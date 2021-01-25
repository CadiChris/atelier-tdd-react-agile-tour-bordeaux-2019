# TDD en React

Ce repo est le support de l'atelier _TDD en React_.

Slides : https://slides.com/cadichris/tdd-en-react

## Librairies utiles

[`React Testing Library`](https://github.com/testing-library/react-testing-library) est la librairie utilisée pour les tests unitaires.  
Les assertions reposent sur des [matchers jest custom](https://github.com/testing-library/jest-dom) de cette même librairie.

[`Prettier`](https://github.com/prettier/prettier) est utilisé pour le formatage du code :

- exécution automatique en pre-commit hook

## Naviguer dans le repo

L'atelier comprend 4 étapes principales.  
Chaque branche du repo représente une étape terminée.  
Autrement dit, chaque branche permet de démarrer l'étape suivante, sur une base fonctionnelle.

Les étapes de l'atelier :

- l'ardoise vierge
- l'inscription des participants
- la saisie des dépenses
- le calcul de créances

`master` sert à confirmer que l'environnement technique est fonctionnel :

- `yarn test` lance les tests
- `yarn start` lance l'application dans le navigateur
