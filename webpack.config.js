var path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: {
        javascript: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        // library: "dependencies-test",
        // libraryTarget: "commonjs2",
        filename: 'main.js'
    },
    devtool: 'source-map'
};
