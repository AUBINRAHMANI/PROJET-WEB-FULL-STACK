#!/bin/bash

# Se déplacer vers le répertoire du script
cd "$(dirname "$0")"

# Construire et exécuter les conteneurs avec docker-compose
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
