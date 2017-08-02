module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jasmine": true,
    "node": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "global-require": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-use-before-define": 0,
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "react/no-multi-comp": 0,
    "react/require-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/no-did-mount-set-state": 0,

    "react/no-string-refs": 0,
    "react/no-find-dom-node": 0,
    "one-var-declaration-per-line": 0,
    "prefer-const": 0,
    "react/require-default-props": 0,
    "one-var": 0,
    "no-mixed-operators": 0
  }
};
