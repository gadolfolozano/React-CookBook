module.exports = {
  "extends": "airbnb",
  "globals": {
    "window": true,
    "sessionStorage": true,
    "history": true,
    "document": true,
    "it": true,
    "describe": true,
    "fetch": true,
  },
  rules:{
    "linebreak-style": 0,
    "no-underscore-dangle": [
      "error", {
        "allow": ["_id"]
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/prefer-default-export": "off",
    "react/forbid-prop-types": 0,
  }
};
