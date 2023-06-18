# Rapport de Livraison

## Statut lors de la livraison
- Étape 1: **Terminée**
- Étape 2: **Terminée**
- Étape 3: **Terminée**
- Étape 4: **Commencée mais pas fonctionnelle**

## Healthchecks

### Backend
Le service backend utilise un healthcheck pour s'assurer qu'il est opérationnel. Il vérifie toutes les 30 secondes si l'API répond en accédant à `http://localhost:9428/api/status`. Après 3 tentatives infructueuses, il est considéré comme en échec.

### Frontend
Le service frontend utilise également un healthcheck, en vérifiant toutes les 30 secondes si le serveur nginx est opérationnel en accédant à `http://localhost:80`. Après 3 tentatives infructueuses, il est considéré comme en échec.

## Utilisateurs

### Backend
Le service backend s'exécute avec l'utilisateur `myuser` qui est créé spécifiquement dans le Dockerfile.

### Frontend
Le service frontend s'exécute avec l'utilisateur par défaut fourni par l'image de base nginx. 
### tests
Exécute sous l'utilisateur par défaut de l'image Node.js.

## Services et URLs

- **Backend**: Accessible sur le port 9428. Par exemple, l'URL serait `http://localhost:9428`.
- **Frontend**: Accessible sur le port 8080. Par exemple, l'URL serait `http://localhost:8080`.
- **Tests**: Les résultats des tests sont accessibles sur le port 9323 si nécessaire.

## Scripts principales

### Scripts :

- Deux scripts shell sont inclus dans le dossier `ops` pour faciliter l'exécution de docker-compose:
    - `run.sh`: Ce script construit et exécute les conteneurs de l'environnement de développement.
    - `run-e2e.sh`: Ce script construit et exécute les conteneurs pour les tests e2e.

### Utilisation :

- Pour démarrer l'environnement de développement, exécutez le script `run.sh` depuis la racine du projet:
  ```
  ./ops/run.sh
  ```

- Pour exécuter les tests e2e, utilisez le script `run-e2e.sh` depuis la racine du projet:
  ```
  ./ops/run-e2e.sh
  ```
## Scripts supplémentaires

### Backend start.sh

Un script `start.sh` est utilisé dans le backend pour démarrer le serveur en mode de développement ou de test en fonction de la variable d'environnement `ENVIRONMENT`.

```sh
#!/bin/bash

# Vérifier si l'environnement est en mode développement
if [ "$ENVIRONMENT" = "development" ]; then
    # Exécuter en mode développement
    npm run dev
else
    # Exécuter les tests e2e
    npm run start:e2e
fi
```

### Frontend start.sh

Un script `start.sh` similaire pourrait être utilisé pour le frontend si nécessaire. Il permettrait de configurer et de démarrer le frontend en fonction de différentes variables d'environnement ou de configurations.

```sh
#!/bin/bash

# Vérifier si l'environnement est en mode développement
if [ "$ENVIRONMENT" = "development" ]; then
    # Démarrer le serveur de développement Angular
    npm start
else
    # Démarrer le serveur nginx pour servir l'application de production
    nginx -g 'daemon off;'
fi
```


### Notes importantes:

- Assurez-vous que Docker est installé et en cours d'exécution sur votre système avant d'exécuter les scripts.
- Les scripts doivent être exécutables. Vous pouvez utiliser `chmod +x ops/run.sh` et `chmod +x ops/run-e2e.sh` pour les rendre exécutables.