@echo off
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

rem Resolve current directory (strip trailing backslash)
set "TARGET=%~dp0"
if "%TARGET:~-1%"=="\" set "TARGET=%TARGET:~0,-1%"

REM Read existing user PATH
for /f "tokens=2*" %%A in ('reg query HKCU\Environment /v Path 2^>nul') do set "USER_PATH=%%B"

REM If PATH not defined, initialize empty
if not defined USER_PATH set "USER_PATH="

REM Check if target already in PATH (case-insensitive)
set "CHECK=!USER_PATH:"="!"
set "CHECK=!CHECK:%TARGET%=!"
if not "!CHECK!"=="!USER_PATH!" (
    echo [Gemini CLI] 已存在到 PATH 中: %TARGET%
    goto :EOF
)

REM Append with semicolon separator when needed
if defined USER_PATH (
    set "NEW_PATH=!USER_PATH!;%TARGET%"
) else (
    set "NEW_PATH=%TARGET%"
)

REM Update user PATH (requires next shell restart)
reg add HKCU\Environment /v Path /t REG_EXPAND_SZ /d "!NEW_PATH!" /f >nul

echo [Gemini CLI] 已将 %TARGET% 添加到当前用户的 PATH。
echo 请关闭并重新打开终端，使新的 PATH 生效。

endlocal
