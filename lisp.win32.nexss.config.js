let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Lisp";
languageConfig.description =
  "Nim is a statically typed compiled systems programming language. It combines successful concepts from mature languages like Python, Ada and Modula.";
languageConfig.url = "http://www.sbcl.org/";
languageConfig.extensions = [".lisp"];
languageConfig.executeCommandLine = "sbcl";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "sbcl";
languageConfig.builders = {};
languageConfig.compilers = {
  sbcl: {
    install: "scoop install sbcl",
    command: "sbcl",
    args: "--load <file>",
    help: ``
  },
  cormanlisp: {
    install: "scoop install cormanlisp",
    command: "Corman LispCormanLisp.exe",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.lisp.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
