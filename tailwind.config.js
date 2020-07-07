module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './public/**/*.css'
      //'./build/**/*.jsx',
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
}
