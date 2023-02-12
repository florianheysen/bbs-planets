# 🪐 BBS-planets

### Rappel des consignes 

En se basant sur l'[API](https://api.le-systeme-solaire.net/) :
- Afficher la liste des planètes du système solaire (image, nom).
- Avoir la possibilité de filtrer par un champ texte sur le nom de la planète.
- Au clique, faire apparaître une page détails (avec une route) pour afficher les détails de la planète.

### Comment lancer le projet ?

1. Installer les dépendences : ``npm install`` ou ``yarn``
2. Lancer le serveur de développement ``npm run dev`` ou ``yarn dev`` 
3. Lancer Storybook ``npm run storybook`` ou ``yarn storybook`` 



### Tech-Stack utilisée

| Technologie | Utilisation |
|---|---|
| [Vite](https://vitejs.dev/) | Améliore les temps de chargements en enivronement de dev |
| TypeScript | Ajoute une couche Type Safety à React.JS |
| Matarial UI | Fait gagner sur temps sur le développement UI |
| Storybook | Permet de créer un design system des composants |
| Axios | Simplifie les requêtes avancées aux APIs |
| [React Query](https://tanstack.com/query/latest/) | Simplifie la gestion et mes en cache les donnée appellées via API |
| [Zustand](https://zustand-demo.pmnd.rs/) | Permet de gérer des états globalement dans toute l'application |


#### Pourquoi avoir choisi Zustand plutôt que Redux ?

| Redux | Zustand |
|---|---|
| Trop de code boilerplate | Va direct au but |
| Compliqué à appréhender | Simple à débuter même avec des options avancées|
| On doit écrire trop de code même pour de petits changements sur l'UI |  On écrit uniquement le code nécessaire à gérer un state |
| Seulement pour des projets à moyenne ou grande échelle | Fait pour toute sorte de projets |
| N/A | On peut définir notre propre structure et comment gérer de multiple stores |


#### ⚠️ Disclaimer:  Code uniquement destiné au test technique pour l'entreprise Big Boss Studio
