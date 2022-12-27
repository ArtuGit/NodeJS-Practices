const loader = require('./loader.js')({option1: 'option1', option2: 'option2'});

const loaded = loader('option3','option4')

console.log(loaded)
