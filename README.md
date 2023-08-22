# webdriverio-playground
A playground repo to keep track of Webdriver.io features and explore new capabilities

Run 

```
yarn test:acceptance:desktop
```

To use tag filters run

```
yarn test:acceptance:desktop --cucumberOpts.tagExpression="@swaglab-app"
```




# IMPORTANT CONFIG NOTES

## Initializer

Installation process with Yarn:

`yarn wdio create .` 

## Import json files as data

You will need these 2 settings
```
"resolveJsonModule": true,
"esModuleInterop": true,
```
## TS files to be included without extensions

Make the following changes

* In tsconfig.json, change module: "ESNext" to target: "ESNext"
* In package.json, remove type: "module"
* Wherever you see import <filename>.js, change it to just import <filename>, as it's a .ts file.