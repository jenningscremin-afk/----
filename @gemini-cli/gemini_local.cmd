@echo off
setlocal ENABLEEXTENSIONS
set "SCRIPT_DIR=%~dp0"
set "PYTHON_EXE="

REM Prefer active virtualenv if present
if defined VIRTUAL_ENV (
    if exist "%VIRTUAL_ENV%\Scripts\python.exe" (
        set "PYTHON_EXE=%VIRTUAL_ENV%\Scripts\python.exe"
    )
)

if "%PYTHON_EXE%"=="" (
    for %%P in (py.exe python.exe python3.exe) do (
        where %%P >nul 2>&1 && (
            set "PYTHON_EXE=%%P"
            goto :run
        )
    )
)

:run
if "%PYTHON_EXE%"=="" (
    echo [Gemini CLI] 未找到可用的 Python 解释器 (需要 Python 3.8+).
    exit /b 9009
)
"%PYTHON_EXE%" "%SCRIPT_DIR%gemini_cli.py" %*
exit /b %errorlevel%
