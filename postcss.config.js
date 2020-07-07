// Taken from: https://tailwindcss.com/docs/installation#using-tailwind-with-postcss

// https://dev.to/boywithsilverwings/tailwind-css-with-snowpack-3c7g
const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const importUrl         = require('postcss-import-url')

// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: [
//     './public/index.html',
//     './src/**/*.js',
//   ],
//
//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// })


module.exports = {
  plugins: [
    //? importUrl(),
    //? Postcssimport({
    //   path: 'src/css',
    // }),
    //?Postcsseasings(),
    //? postcssPresetEnv({
    //   stage: 0,
    // }),

    require('tailwindcss')(__dirname+'/tailwind.config.js')

    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss]
    //   : []    ,

    //?Require('Autoprefixer')

  ]
}


     
