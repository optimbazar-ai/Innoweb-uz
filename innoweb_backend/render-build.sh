#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

# Prisma binary engine'ni yuklab olish
prisma py fetch

# Prisma Client'ni generatsiya qilish
prisma generate

# Prisma binary'ni to'g'ri joyga nusxalash
mkdir -p /opt/render/project/src/innoweb_backend/
find /opt/render/.cache/prisma-python -name "prisma-query-engine-*" -type f -executable | head -1 | xargs -I {} cp {} /opt/render/project/src/innoweb_backend/prisma-query-engine-debian-openssl-3.0.x || echo "Binary copy failed, but continuing..."
