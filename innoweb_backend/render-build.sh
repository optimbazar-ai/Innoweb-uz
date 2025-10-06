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
BINARY_SRC=$(find /opt/render/.cache/prisma-python -name "prisma-query-engine-*" -type f | head -n 1)

if [ -z "$BINARY_SRC" ]; then
  echo "Prisma query engine binary topilmadi" >&2
  exit 1
fi

cp "$BINARY_SRC" /opt/render/project/src/innoweb_backend/prisma-query-engine-debian-openssl-3.0.x
chmod +x /opt/render/project/src/innoweb_backend/prisma-query-engine-debian-openssl-3.0.x
