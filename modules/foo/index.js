/**
 * Created by kozorezal on 8/15/16.
 */
console.warn("FOO@1: Hello, I'm foo@1 and i'm depending on secret@1");
var f = require("@dependencies-test/secret");
f();
