module.exports = {
  extends: ["wolox-react"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "unknown",
          "parent",
          "internal",
          "sibling",
          "index"
        ]
      }
    ],
    "react/jsx-no-bind": "off"
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        alias: {
          "~components": "./src/app/components",
          "~screens": "./src/app/screens",
          "~config": "./src/config",
          "~constants": "./src/constants",
          "~services": "./src/services",
          "~utils": "./src/utils",
          "~assets": "./src/assets",
          "~propTypes": "./src/propTypes",
          "~theme": "./src/theme"
        }
      }
    }
  }
};
