Profil Utilisateur et Commandes
Ce projet affiche un profil utilisateur dynamique et une liste de commandes associées en utilisant HTML, CSS et JavaScript. Les informations sont récupérées de manière simulée (à l'aide de promesses et de setTimeout) pour simuler un appel API.

Fonctionnalités
Affichage d'un profil utilisateur avec les informations suivantes :

Nom

Email

Login

Mot de passe

Adresse

Avatar

Genre

Affichage des commandes de l'utilisateur dans une liste :

Chaque commande contient une description.

Structure du projet
Le projet est composé de 3 fichiers principaux :

index.html : Structure HTML de la page, y compris l'affichage du profil et des commandes.

style.css : Fichier CSS pour styliser le profil utilisateur et les commandes.

script.js : Contient le JavaScript pour gérer les données utilisateurs et commandes et afficher ces informations de manière dynamique.

Installation
Clonez ce projet dans votre répertoire local :

bash
Copier
git clone https://github.com/votre-nom-utilisateur/profil-utilisateur-commande.git
Ouvrez le fichier index.html dans votre navigateur pour visualiser l'application.

Comment ça marche
Les données utilisateur (nom, email, etc.) et les commandes sont simulées à l'aide de constantes JavaScript (userData et ordersData).

Les fonctions fetchuserdata() et fetchUsersOrders() retournent des promesses qui résolvent ces données après un délai simulé de 1 seconde.

La fonction display() attend ces données et les injecte dans le DOM pour afficher le profil et la liste des commandes.

Exemple d'utilisation
Voici ce que l'utilisateur verra après le chargement de la page :

Un tableau avec ses informations personnelles (nom, email, etc.).

Une liste de ses commandes passées.

Technologies utilisées
HTML5

CSS3

JavaScript (ES6+)

Contribution
Si vous souhaitez contribuer à ce projet, suivez les étapes suivantes :

Forkez ce dépôt.

Créez une branche pour vos modifications (git checkout -b feature-nouvelle-fonctionnalité).

Effectuez vos modifications et committez-les (git commit -am 'Ajout de nouvelle fonctionnalité').

Poussez vos modifications (git push origin feature-nouvelle-fonctionnalité).

Créez une Pull Request.

License
