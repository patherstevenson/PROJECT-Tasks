# Project React

## Sommaire :

* [1. Générer les fichiers](#1-générer-les-fichiers)
* [2. Visualisation du gestionnaire de tâches](#2-visualisation-du-gestionnaire-de-tâches)
* [3. Modifier le projet](#3-modifier-le-projet)
* [4. Etat du projet](#4-etat-du-projet)
* [5. Sujet du projet](#6-sujet-du-projet)

## 1. Générer les fichiers

Pour générer les fichiers nécessaire au lancement du gestionnaire de tâche veuillez suivre les instructions suivantes dans cet ordre :

    - Cloner le projet en local grâce à git clone

    - Placez-vous à la racine du projet => dossier react-task

    - Utilisez la commande suivante pour installer les modules :
        
        $ npm install

    - Utilisez la commande suivante pour créer le dossier dist/ et construire le bundle

## 2. Visualisation du gestionnaire de tâches

Une fois les fichiers générés vous pouvez accéder au gestionnaire de tâche en ouvrant le fichier dist/index.html sur votre navigateur web. Ou si vous utilisez le dev-server en aller sur votre localhost:port (normalement port = 9000).

## 3. Modifier le projet

Pour toute modification du projet vous pouvez utiliser Webpack pour construire le bundle et visualiser vos ajouts et modifications en démarrant le serveur de développement grâce à la commande : 
    
    $ npm run dev-server

Toujours en étant à la racine du projet. Ainsi les modifications seront directement ajoutées après sauvegarde des fichiers concernés et seront visibles depuis le fichier dist/index.html. 

Sinon après modification vous pouvez simplement utiliser la commande : 

    $ npm run build
    
et voir les modifications. Mais cela est plus fastidieux.

N'oubliez pas d'exécuter la commande :

    $ npm run build
    
après l'arrêt du serveur de développement pour mettre à jour le dossier dist/.

## 4. Etat du projet

Le travail demandé dans ce projet a été traité. Nous avons fait l'ajout d'un bouton qui permet de supprimer une tâche qui est en cours ou terminée.
    
## 5. Sujet du projet

Vous pouvez retrouver le sujet du projet en cliquant sur [ce lien](https://www.fil.univ-lille1.fr/~routier/enseignement/licence/js-s4/tdtp/exercice-react-task.html)
