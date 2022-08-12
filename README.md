# Website
https://les-bonnes-recettes-d-evy.herokuapp.com/

# How to connect to prod database

```bash
psql -Atx <connection_string>
```

# How to setup deployment

- git remote add heroku : https://git.heroku.com/les-bonnes-recettes-d-evy.git
- Add buildpack on heroku : https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz
- Add database to heroku server : https://devcenter.heroku.com/articles/heroku-postgresql

# How to deploy

https://devcenter.heroku.com/articles/deploying-nodejs

- git push heroku main

# How to import heroku's DB locally

- heroku pg:backups:capture --app les-bonnes-recettes-d-evy
- heroku pg:backups:download --app les-bonnes-recettes-d-evy
- docker compose exec db pg_restore --verbose --clean --no-acl --no-owner -U evy -v -d les-bonnes-recettes-d-evy < ~/latest.dump  

# How to run projects locally with WSL2

1. cd ~/workspace/fred
2. npm run devops:ip
3. copy the line with the port 3000, it should looks like

```
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=172.28.110.114
```

4. Open powershell as an administrator
5. Paste the previous line to be able to access to the application from "http://localhost:3000"
