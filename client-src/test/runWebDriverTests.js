
/* -------------------------------------------------------------------------
 * !!! AUTOMATICALLY GENERATED CODE !!!
 * -------------------------------------------------------------------------
 * This file was automatically generated by the OrangeBits compiler.  
 * Compiled on:  12/01/2013 21:22:29
 * Compiled by: ALEX-PC\Alex
 * Source: E:\Project\MarionetteBase-Coffeescript\client-src\test\runWebDriverTests.coffee      
 * -------------------------------------------------------------------------*/


var BufferedWriter, client, fs, system, webdriverjs;

webdriverjs = require("webdriverjs");

system = require("system");

fs = require("fs");

BufferedWriter = require("buffered-writer");

client = webdriverjs.remote();

client.init().url(system.args[2]).getText("#HTMLReporter", function(value) {
  console.log("====================================");
  console.log("Test Runner : " + system.args[2]);
  console.log("------------------------------------");
  console.log(value.value);
  return console.log("====================================");
}).end();
