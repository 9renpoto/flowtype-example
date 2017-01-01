/* @flow */
const script = document.createElement('script')
const filename = Math.random() > 0.5 ? 'webpack' : 'browserify'
script.src = `https://9renpoto.github.io/js/${filename}.bundle.js`
document.body.appendChild(script)
