// webpack.config.js

const path = require('path');

module.exports = {
  // การตั้งค่าอื่น ๆ ตามต้องการ
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "net": false, // หรือตั้งเป็น false หากไม่ต้องการโมดูล net
      "tls": false, // หรือตั้งเป็น false หากไม่ต้องการโมดูล tls
      "url": false, // หรือตั้งเป็น false หากไม่ต้องการโมดูล url
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  }
};
