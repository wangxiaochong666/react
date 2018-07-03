const path=require('path');

var argv

const webpackConfig = {
  entry: {
    main: [
      './src/main.js'
    ],
  },

  output:{
    path:path.join(__dirname, '..','dist'),
		filename:'static/js/[name]-[hash:5].js',
		publicPath: '/'
  },
  
  plugins: []
};

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
      path: path.join(__dirname, '..','src'),
      remotePath: '/longfor/tomcat/webapps/' + argv[2],
      // Show details of uploading for files
      verbose: true
    }))
}

module.exports = webpackConfig;