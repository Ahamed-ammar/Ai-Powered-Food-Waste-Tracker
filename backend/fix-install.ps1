# Fix Backend Installation Script
Write-Host "========================================" -ForegroundColor Green
Write-Host "Fixing Backend Installation" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Step 1: Removing node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
    Write-Host "Done!" -ForegroundColor Green
} else {
    Write-Host "node_modules not found, skipping..." -ForegroundColor Gray
}
Write-Host ""

Write-Host "Step 2: Removing package-lock.json..." -ForegroundColor Yellow
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json" -ErrorAction SilentlyContinue
    Write-Host "Done!" -ForegroundColor Green
} else {
    Write-Host "package-lock.json not found, skipping..." -ForegroundColor Gray
}
Write-Host ""

Write-Host "Step 3: Installing dependencies (without TensorFlow)..." -ForegroundColor Yellow
npm install
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "Installation Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Now you can run: npm run dev" -ForegroundColor Cyan
Write-Host ""
