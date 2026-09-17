#!/usr/bin/env bash
set -euo pipefail

APP_NAME="idevs"
IMAGE_NAME="${APP_NAME}:latest"
CONTAINER_NAME="${APP_NAME}"
HOST_PORT=17001
CONTAINER_PORT=3000
ENV_FILE=".env.local"

echo "Building image: ${IMAGE_NAME}"
docker build -t "${IMAGE_NAME}" .

echo "Stopping old container (if exists): ${CONTAINER_NAME}"
if docker ps -a --format '{{.Names}}' | grep -Eq "^${CONTAINER_NAME}$"; then
  docker stop "${CONTAINER_NAME}" >/dev/null 2>&1 || true
  docker rm "${CONTAINER_NAME}" >/dev/null 2>&1 || true
fi

ENV_FILE_ARGS=()
if [ -f "${ENV_FILE}" ]; then
  echo "Loading secrets from ${ENV_FILE} (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ...)"
  ENV_FILE_ARGS=(--env-file "${ENV_FILE}")
else
  echo "Warning: ${ENV_FILE} not found next to deploy.sh — the contact form's Telegram bot won't work without it."
fi

echo "Starting new container on port ${HOST_PORT}..."
docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart unless-stopped \
  -p "${HOST_PORT}:${CONTAINER_PORT}" \
  -e NODE_ENV=production \
  -e PORT=${CONTAINER_PORT} \
  "${ENV_FILE_ARGS[@]}" \
  "${IMAGE_NAME}"

echo "Container is running with restart policy 'unless-stopped'. Visit http://localhost:${HOST_PORT}"
