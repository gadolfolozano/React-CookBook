module.exports = {
  "extends": "airbnb",
  rules:{
    "linebreak-style": 0,
    "no-underscore-dangle": [
      "error", {
        "allow": ["_id"]
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  }
};
