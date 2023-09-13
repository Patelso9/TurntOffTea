# Turnt off Tea

Homepage for all my creative ventures. 

## Deployed to ```gh-pages```
Reference document: https://blog.logrocket.com/deploying-react-apps-github-pages/

### Install gh-pages package:

Install package: ``` npm i npm gh-pages --save-dev ```

#### Add code to "package.json"
```"homepage": "http://patelso9.github.io/TurntOffTea",```

Under "scripts":
```"predeploy" : "npm run build",```
```"deploy": "gh-pages -d build",```

New github branch created called ```gh-pages```

### Deploy code updates:
``` npm run deploy ```
