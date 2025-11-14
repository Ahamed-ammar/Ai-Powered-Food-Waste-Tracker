@echo off
echo ========================================
echo Fixing Backend Installation
echo ========================================
echo.

echo Step 1: Removing node_modules...
rmdir /s /q node_modules 2>nul
echo Done!
echo.

echo Step 2: Removing package-lock.json...
del package-lock.json 2>nul
echo Done!
echo.

echo Step 3: Installing dependencies (without TensorFlow)...
npm install
echo.

echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Now you can run: npm run dev
echo.
pause
