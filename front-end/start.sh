#!/bin/sh

# Remplacer 'http://your-production-api-url' avec la valeur de API_URL
# Cette ligne modifie le fichier main.js qui est le fichier JavaScript principal de votre application Angular.
sed -i "s|http://backend:9428|$API_URL|g" /usr/share/nginx/html/main*.js

# Démarrer Nginx
nginx -g "daemon off;"
