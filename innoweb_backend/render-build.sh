#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

# Prisma binary engine'ni yuklab olish
prisma py fetch

# Prisma Client'ni generatsiya qilish
prisma generate
