# Les bonnes recettes d'Evy

## Résolution de problème

### Hooks can only be called from function component

- Installer react-router-dom dans le répertoire `./front`

## How to deploy

- git remote add les-bonnes-recettes-d-evy https://git.heroku.com/les-bonnes-recettes-d-evy.git
- heroku config:set -a les-bonnes-recettes-d-evy APP_BASE=front
- heroku buildpacks:add -a les-bonnes-recettes-d-evy https://github.com/lstoll/heroku-buildpack-monorepo -i 1
