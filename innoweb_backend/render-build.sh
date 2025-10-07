#!/usr/bin/env bash
# exit on error
set -o errexit

# Install Python dependencies
pip install -r requirements.txt

# Generate Prisma Client with binaries
prisma generate

# Verify binary was downloaded
echo "Checking for Prisma binaries..."
find /opt/render/.cache/prisma-python -name "*query-engine*" -type f || echo "Binary location check complete"
