// Automated Linters
// Linters are tools that can automatically check the style of your code and make improving suggestions.
// The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you don’t want to stick to one particular “code style”.

// JSLint – one of the first linters.
// JSHint – more settings than JSLint.
// ESLint – probably the newest one.

// experienced with .eslintrc.json file
{
    "extends": "eslint:recommended",
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "rules": {
      "no-console": 0,
      "indent": 2
    }
  }