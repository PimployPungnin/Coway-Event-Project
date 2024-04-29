const path = require('path');

module.exports = {
    // ตั้งค่า mode เป็น 'development' หรือ 'production' ตามที่คุณต้องการ
    mode: 'development', // หรือ 'production' ตามที่คุณต้องการ
    entry: './src/App.js', // ตำแหน่งของไฟล์เริ่มต้นของโปรแกรมของคุณ
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        // เพิ่ม fallback ในการ resolve โมดูลที่ขาดหายไป
        fallback: {
            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve("crypto-browserify"),
            "fs": false,
            "net": false,
            "tls": false,
            "util": require.resolve("util/"),
            "url": require.resolve("url/"),
            "timers": require.resolve("timers-browserify"),
            "stream": require.resolve("stream-browserify"),
            "vm": require.resolve("vm-browserify")
        }
    },
    // ตั้งค่า module.rules ตามความต้องการของโปรเจ็ค
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
