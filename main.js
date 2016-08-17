/**
 * Created by kozorezal on 8/15/16.
 */

console.warn("MAIN: Hello, I'm main");
console.log("I'm depending on @dependencies-test/test@1 and @dependencies-test/secret@2 and @dependencies-test/foo@1");

console.info("MAIN: importing test@1");
require("@dependencies-test/test");

console.info("MAIN: importing secret@2");
var f = require("@dependencies-test/secret");
f();

console.info("MAIN: importing foo@1");
require("@dependencies-test/foo");
