'use strict';
const rewrite = require('connect-modrewrite');

// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  return {
    style: {
      noGuide: true
    },
    html: {
      src: './src/view/**/*.ejs'
    },
    script: production ? require('./config/webpack.config.production') : require('./config/webpack.config'),
    server: {
      middleware: [
        rewrite([
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    },
    // ファイルコピー
    copy: {
      'src/admin/fonts/**/*': FRP_DEST + '/assets/fonts'
    },
    // スプライト画像
    sprite: [ // 複数のスプライト画像を生成することができます。
    ]
  }
};
