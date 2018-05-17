// var component = require('./src/components/my-component/index');

const compiler = require('marko/compiler');

const compiledSrc = compiler.compileFile('./src/components/my-component/index.marko');
console.log(compiledSrc);
