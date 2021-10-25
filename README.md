# Les bonnes recettes d'Evy

## Résolution de problème

### How to connect to prod database

```bash
psql -Atx <connection_string>
```

### psql: error: FATAL:  Peer authentication failed for user "postgres"

This problem occured only in my VM, which is accessible from unknown users

```bash
locate pg_hba.conflocate pg_hba.conf
sudo service postgresql restart
locate pg_hba.conf
sudo apt install mlocate
sudo cat /etc/postgresql/12/main/pg_hba.conf
```

- Check hostname and connection method (md5 vs peer, should be md5)
- You should then connect by defining the hostname and username parameters

```bash
## Example

local   replication     all                                     peer ## NOK
host    replication     all             127.0.0.1/32            md5 ## OK
host    replication     all             ::1/128                 md5

## Command line
> psql --host=127.0.0.1 --username=postgres ## Current Password in local: js4life
```

### Hooks can only be called from function component

- Installer react-router-dom dans le répertoire `./front`

## How to setup deployment

- git remote add heroku : https://git.heroku.com/les-bonnes-recettes-d-evy.git
- Add buildpack on heroku : https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz
- Add database to heroku server : https://devcenter.heroku.com/articles/heroku-postgresql

## How to deploy

https://devcenter.heroku.com/articles/deploying-nodejs

- git push heroku main
