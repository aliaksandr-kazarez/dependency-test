System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "@dependencies-test/foo": "npm:@dependencies-test/foo@1.0.0",
    "@dependencies-test/secret": "npm:@dependencies-test/secret@2.0.0",
    "@dependencies-test/test": "npm:@dependencies-test/test@1.0.0",
    "npm:@dependencies-test/foo@1.0.0": {
      "@dependencies-test/secret": "npm:@dependencies-test/secret@1.0.0"
    },
    "npm:@dependencies-test/test@1.0.0": {
      "@dependencies-test/secret": "npm:@dependencies-test/secret@1.0.0"
    }
  }
});
