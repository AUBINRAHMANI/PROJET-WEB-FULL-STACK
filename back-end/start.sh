#!/bin/sh

if [ "$ENVIRONMENT" = "development" ]; then
  npm run dev
else
  npm run start:e2e
fi
