@echo off
cd /d "%~dp0"
pip install python-dotenv > nul
python -m dotenv run -- python gemini_cli.py
pause