const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

module.exports = {
  output: {
    uniqueName: "widget",
    publicPath: "http://localhost:4200/", // URL en el puerto de desarrollo del widget
  },
  optimization: { runtimeChunk: false },
  resolve: {
    alias: { ...mf.sharedMappings.getAliases() },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "widget",
      filename: "remoteEntry.js",
      exposes: {
        "./WidgetComponent": "./src/app/widget/widget.component.ts", // Exponer el WidgetComponent
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: "auto" },
      },
    }),
    mf.sharedMappings.getPlugin(),
  ],
};