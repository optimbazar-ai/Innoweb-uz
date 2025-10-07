#!/usr/bin/env bash
# exit on error
set -o errexit

# Install Python dependencies
pip install -r requirements.txt

# Generate Prisma Client with binaries
prisma generate

# Find and copy the binary to the expected location
echo "Setting up Prisma binary..."
BINARY_SRC=$(find /opt/render/.cache/prisma-python -path "*/node_modules/prisma/query-engine-debian-openssl-3.0.x" -type f | head -n 1)

if [ -n "$BINARY_SRC" ]; then
  echo "Found binary at: $BINARY_SRC"
  mkdir -p /opt/render/project/src/innoweb_backend/
  cp "$BINARY_SRC" /opt/render/project/src/innoweb_backend/prisma-query-engine-debian-openssl-3.0.x
  chmod +x /opt/render/project/src/innoweb_backend/prisma-query-engine-debian-openssl-3.0.x
  echo "Binary copied and made executable"
else
  echo "Warning: Binary not found in expected location"
fi
