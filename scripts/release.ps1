# CodexFlow Release Script
# Usage: .\scripts\release.ps1 -Version "1.0.8"

param(
    [Parameter(Mandatory=$false)]
    [string]$Version
)

$ErrorActionPreference = "Stop"

# Colors
function Write-Success { Write-Host $args -ForegroundColor Green }
function Write-Info { Write-Host $args -ForegroundColor Cyan }
function Write-Warn { Write-Host $args -ForegroundColor Yellow }

Write-Info "🚀 CodexFlow Release Script"
Write-Info "================================"

# Get current version if not provided
if (-not $Version) {
    $packageJson = Get-Content "src/package.json" | ConvertFrom-Json
    $Version = $packageJson.version
    Write-Info "Using version from package.json: $Version"
}

# Confirm
Write-Warn "About to release version: v$Version"
$confirm = Read-Host "Continue? (y/n)"
if ($confirm -ne "y") {
    Write-Warn "Aborted."
    exit 0
}

# Build
Write-Info "`n📦 Building extension..."
pnpm build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

# Package VSIX
Write-Info "`n📦 Packaging VSIX..."
Set-Location src
pnpm vsix
Set-Location ..
if ($LASTEXITCODE -ne 0) { throw "VSIX packaging failed" }

$vsixFile = "bin/codexflow-agent-$Version.vsix"
if (-not (Test-Path $vsixFile)) {
    throw "VSIX file not found: $vsixFile"
}

Write-Success "✅ VSIX created: $vsixFile"

# Git tag
Write-Info "`n🏷️ Creating git tag..."
git tag -a "v$Version" -m "Release v$Version"
if ($LASTEXITCODE -ne 0) { 
    Write-Warn "Tag might already exist, continuing..."
}

# Push tag
Write-Info "`n📤 Pushing tag to GitHub..."
git push origin "v$Version"
if ($LASTEXITCODE -ne 0) { throw "Failed to push tag" }

Write-Success "`n🎉 Release v$Version complete!"
Write-Info "GitHub Actions will now create the release automatically."
Write-Info "Check: https://github.com/doctorcmptrmita2/CodexFlowIDEPro/actions"
