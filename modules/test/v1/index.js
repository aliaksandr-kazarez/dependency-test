/**
 * Created by kozorezal on 8/15/16.
 */
console.warn("TEST@1: Hello, I'm test@1 and I'm depending on secret@1");
var f = require("@dependencies-test/secret");
f();