const { override, addWebpackPlugin } = require("customize-cra");
const webpack = require("webpack");
const SourceMapPlugin = require("@mdap/source-map-webpack-plugin");
const { GitRevisionPlugin } = require("git-revision-webpack-plugin");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const gitRevisionPlugin = new GitRevisionPlugin();
module.exports = override([
  addWebpackPlugin(
    new SourceMapPlugin({
      appName: "pc-web",
      secret:
        "daab032acfb3522e391957c076f9bacb14a00dd4c7474ed5aad7cdc8dc51a610",
      env: "production",
      appVersion: "[git-revision-hash]",
      forceLog: true,
    })
  ),
  addWebpackPlugin(gitRevisionPlugin),
  addWebpackPlugin(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(gitRevisionPlugin.version()),
      COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
      BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
      LASTCOMMITDATETIME: JSON.stringify(
        gitRevisionPlugin.lastcommitdatetime()
      ),
    })
  ),
]);
// module.exports = override(
//   addWebpackPlugin(
//     new SentryWebpackPlugin({
//       // sentry-cli configuration - can also be done directly through sentry-cli
//       // see https://docs.sentry.io/product/cli/configuration/ for details
//       authToken:
//         "0807b25252d34e748ce8f55c0560fbc23e5b86162582413d916f2dae388a8c71", // token写在这里是不安全的，不过由于公司的内网
//       org: "7222d4bcc833",
//       project: "react",
//       release: process.env.SENTRY_RELEASE,

//       // other SentryWebpackPlugin configuration
//       include: ".",
//       ignore: ["node_modules", "webpack.config.js"],
//       // 上传前验证 SourceMap 对应关系
//       validate: true,
//       // 发布前删除所有的 Sentry 中的 sourceMap
//       cleanArtifacts: true,
//     })
//   )
// );
