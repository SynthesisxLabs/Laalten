#!/bin/bash
# ──────────────────────────────────────────────────────────────
#  Laalten Installer — Dynamic Island for macOS
#  Usage: curl -sL https://raw.githubusercontent.com/SynthesisxLabs/Laalten/main/install.sh | bash
# ──────────────────────────────────────────────────────────────
set -euo pipefail

APP_NAME="Laalten"
DMG_URL="https://github.com/SynthesisxLabs/Laalten/releases/latest/download/Notch.dmg"
TEMP_DIR=$(mktemp -d)
DMG_PATH="$TEMP_DIR/Notch.dmg"
MOUNT_POINT=""

# ── Colors ──
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
DIM='\033[2m'
NC='\033[0m'

# ── Cleanup trap ──
cleanup() {
    if [ -n "$MOUNT_POINT" ] && [ -d "$MOUNT_POINT" ]; then
        hdiutil detach "$MOUNT_POINT" -quiet 2>/dev/null || true
    fi
    rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

# ── Header ──
echo ""
echo -e "${CYAN}${BOLD}"
echo "  ╔══════════════════════════════════════════╗"
echo "  ║                                          ║"
echo "  ║        ◆  Laalten Installer  ◆           ║"
echo "  ║        Dynamic Island for macOS          ║"
echo "  ║                                          ║"
echo "  ╚══════════════════════════════════════════╝"
echo -e "${NC}"

# ── 1. Platform Check ──
if [[ "$(uname)" != "Darwin" ]]; then
    echo -e "  ${RED}✗ Error: Laalten requires macOS.${NC}"
    exit 1
fi

# ── 2. Architecture + Version ──
ARCH=$(uname -m)
OS_VERSION=$(sw_vers -productVersion 2>/dev/null || echo "Unknown")
echo -e "  ${DIM}System${NC}    macOS $OS_VERSION ($ARCH)"

# Minimum version check (macOS 14+)
MAJOR_VERSION=$(echo "$OS_VERSION" | cut -d. -f1)
if [ "$MAJOR_VERSION" -lt 14 ] 2>/dev/null; then
    echo -e "  ${RED}✗ Error: Laalten requires macOS 14 (Sonoma) or later.${NC}"
    echo -e "  ${DIM}You are running macOS $OS_VERSION.${NC}"
    exit 1
fi

# ── 3. Download ──
echo ""
echo -e "  ${CYAN}⟡${NC}  Downloading Laalten..."
if ! curl -L --progress-bar --fail -o "$DMG_PATH" "$DMG_URL"; then
    echo -e "  ${RED}✗ Download failed. Check your internet connection.${NC}"
    exit 1
fi

FILE_SIZE=$(du -h "$DMG_PATH" | awk '{print $1}')
echo -e "  ${DIM}Downloaded $FILE_SIZE${NC}"

# ── 4. Mount DMG ──
echo -e "  ${CYAN}⟡${NC}  Mounting disk image..."
MOUNT_OUTPUT=$(hdiutil attach "$DMG_PATH" -nobrowse -quiet 2>&1)
MOUNT_POINT=$(echo "$MOUNT_OUTPUT" | grep "/Volumes/" | awk -F'\t' '{print $3}' | xargs)

if [ -z "$MOUNT_POINT" ] || [ ! -d "$MOUNT_POINT" ]; then
    echo -e "  ${RED}✗ Failed to mount disk image.${NC}"
    exit 1
fi

if [ ! -d "$MOUNT_POINT/$APP_NAME.app" ]; then
    echo -e "  ${RED}✗ App bundle not found in disk image.${NC}"
    exit 1
fi

# ── 5. Close Running Instance ──
if pgrep -x "$APP_NAME" > /dev/null 2>&1; then
    echo -e "  ${YELLOW}⟡${NC}  Closing running instance..."
    killall "$APP_NAME" 2>/dev/null || true
    sleep 1
fi

# ── 6. Install to /Applications ──
echo -e "  ${CYAN}⟡${NC}  Installing to /Applications..."
if [ -d "/Applications/$APP_NAME.app" ]; then
    rm -rf "/Applications/$APP_NAME.app"
fi
cp -R "$MOUNT_POINT/$APP_NAME.app" "/Applications/"

# ── 7. Clear Quarantine (Gatekeeper) ──
xattr -cr "/Applications/$APP_NAME.app" 2>/dev/null || true

# ── 8. Success ──
echo ""
echo -e "  ${GREEN}${BOLD}✓  Laalten installed successfully!${NC}"
echo ""
echo -e "  ${DIM}Location${NC}   /Applications/$APP_NAME.app"
echo -e "  ${DIM}Launch${NC}     Spotlight → \"Laalten\" or open from Applications"
echo ""

# ── 9. Auto-Launch Prompt ──
if [ -t 0 ]; then
    # Only prompt if running interactively (not piped)
    read -p "  Launch Laalten now? [Y/n] " -n 1 -r REPLY
    echo ""
    if [[ "$REPLY" =~ ^[Yy]$ ]] || [[ -z "$REPLY" ]]; then
        open "/Applications/$APP_NAME.app"
        echo -e "  ${GREEN}⟡${NC}  Launched! Look at your notch ✨"
    fi
else
    # When piped via curl, auto-launch
    open "/Applications/$APP_NAME.app"
    echo -e "  ${GREEN}⟡${NC}  Launched! Look at your notch ✨"
fi

echo ""
