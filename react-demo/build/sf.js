var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var opn = require('opn');

var webpackConfig = {
  entry: {
    app: [
      "./src"
    ]
  },
  output: {},
  plugins: []
};

var argv
try {
  argv = JSON.parse(process.env.npm_config_argv).original
} catch (ex) {
  argv = process.argv
}

if (argv && argv.length > 0 && argv[2] && argv[2] != '--scripts-prepend-node-path=auto') {
  var WebpackSftpClient = require('webpack-sftp-client')
  webpackConfig.plugins.push(
    new WebpackSftpClient({
      port: '22',
      host: '192.168.36.197',
      username: 'root',
      password: 'pass123!@#',
      path: path.join(__dirname, '..', 'src'),
      remotePath: '/longfor/tomcat/webapps/longcity-wangxueqian',
      verbose: true
    })
  )
}

var spinner = ora('building for production...')
if(!true){
  spinner.start()
}
webpack(webpackConfig, function (err, stats) {
  // spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
  opn(`https://uatlongcity.longfor.com:27236/longcity-wangxueqian`);
});
// module.exports=webpackConfig