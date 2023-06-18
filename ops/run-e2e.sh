#!/bin/bash

# Se déplacer vers le répertoire du script
#cd "$(dirname "$0")"

# Construire et exécuter les conteneurs de tests avec docker-compose
docker-compose -f docker-compose-e2e.yml build
docker-compose -f docker-compose-e2e.yml up
