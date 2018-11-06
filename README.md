## crypto-webparts

A webpart displaying information about Bitcoin using external api and SPFx with a react framework.

External API: https://coinmarketcap.com/api/

Current API will be licensed with an account on Coinmarketcap on december 4th 2018. Webpart will be updated before then to deal with the changes.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
