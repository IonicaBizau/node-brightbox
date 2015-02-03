// Dependencies
var Fs = require("fs")
  , allFiles = Fs.readdirSync(__dirname)
  , Apis = module.exports = {}
  ;

// Require APIs
allFiles.forEach(function (c) {
    if (!/^(?!index.js).*\.js$/.test(c)) { return; }
    Apis[c.replace(/.js$/, "")] = __dirname + "/" + c;
});
