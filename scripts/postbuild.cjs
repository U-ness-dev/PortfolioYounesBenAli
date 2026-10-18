const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, '..', 'dist')
fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
