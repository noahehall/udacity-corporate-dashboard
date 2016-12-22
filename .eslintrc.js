"use strict";

module.exports = {
  "extends": [
    "eslint-config-ct-fletcher"
  ],
  "rules": {
    'line-comment-position': [
      "error", {
        "position": "above",
        "ignorePattern": "eslintignore"
      },
    ],
    'prefer-reflect': 0,
    'no-confusing-arrow': [
      "error", {
        "allowParens": true
      }
    ],
    'no-extra-parens': 0,
    'no-mixed-operators': 0,
    "react/no-multi-comp": [2, {
      "ignoreStateless": true
    }]
  }
}
