'use strict';

var through = require('through2');

module.exports = function(options){

  function bufferContents(file, enc, cb) {
    
    if(!file.isDirectory()){
      file.path = file.base + file.path.split(/\/|\\/).pop();
      this.push(file);
    }
    
    cb();
  }

  return through.obj(bufferContents);
};