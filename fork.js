#!/usr/bin/env node

var stream = require('stream');
var util = require('util');
var lib = require("./jsfork.js");
var repl = require('repl');

if(process.argv.length !== 3) {

  function Stream() {
    stream.Transform.call(this);
  }
  util.inherits(Stream, stream.Transform);

  Stream.prototype._transform = function (chunk, encoding, callback) {
    var script = lib.JSFork.encode(chunk.toString());
    var lines = script.split(/\n+/);
    for (var i = 0; i < lines.length; i++) {
      // ignore empty lines
      if (lines[i] !== '') this.push(lines[i] + '\n');
    }
    callback();
  };

  var forkScript = new Stream();
  repl.start({
    prompt: "FORK> ",
    input: forkScript,
    useColors: true,
    output: process.stdout
  });

  process.stdin.pipe(forkScript);
} else {
  var data = require("fs").readFileSync(process.argv[2], "utf8");
  var output = lib.JSFork.encode(data, false);
  console.log(output);
}
