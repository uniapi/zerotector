This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# Zerotector

## Task
Implement a function **zerotect**, given a natural number, detects trailing zeros of its factorial *without computing it*!

### Example:
```js
zerotect(2)  // 0 because 2! = 2 * 1 = 2
zerotect(5)  // 1 because 5! = 5 * 4 * 3 * 2 * 1 = 120
zerotect(10) // 2 because 10! = 3628800
```

### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **zerotector branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
  }
```
