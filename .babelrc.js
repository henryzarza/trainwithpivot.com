module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "~components": "./src/app/components",
          "~screens": "./src/app/screens",
          "~config": "./src/config",
          "~constants": "./src/constants",
          "~propTypes": "./src/propTypes",
          "~services": "./src/services",
          "~utils": "./src/utils",
          "~assets": "./src/assets",
          "~theme": "./src/theme",
        }
      }
    ], [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/core",
        libraryDirectory: "esm",
        camel2DashComponentName: false
      },
      "core"
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/icons",
        libraryDirectory: "esm",
        camel2DashComponentName: false
      },
      "icons"
    ]
  ]
}
