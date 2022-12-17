const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer({}),
        // require('postcss-import'),
        // require('postcss-preset-env')({
        //     stage: 1,
        // }),
        // require('postcss-nested'),
    ],
}