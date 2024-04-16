"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log("Error loading environment variables, aborting");
    process.exit(1);
}
console.log(process.env.PORT);
// SERVER
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./utils");
var logger_1 = require("./logger");
var data_source_1 = require("./data-source");
var app = express(); // initialize express
// setting up express routes and middleware
function setupExpress() {
    // first express endpoint or route
    // a mapping between a request, a url, and a function
    app.route("/").get(root_1.root);
}
// startup logic that launches the server
function startServer() {
    var port;
    var portEnv = process.env.PORT, portArg = process.argv[2];
    // the argv array contains the parameters of the process starting at the third element of the
    // array so [2], in position [0] we find the node process that is running, 
    // in position [1] we find the script that we are running
    // we first give precedence to environment port variable
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    // if none set, we give precedence to argument port variable
    if (!port && (0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    // if none set, we set the port variable to 9000
    if (!port) {
        port = 9000;
    }
    app.listen(port, function () {
        // console.log(`HTTP REST API Server is now running at http://localhost:${port}`);
        logger_1.logger.info("HTTP REST API Server is now running at http://localhost:".concat(port));
    });
}
data_source_1.AppDataSource.initialize()
    .then(function () {
    logger_1.logger.info("The datasource has been initialized successfully");
    setupExpress();
    startServer();
})
    .catch(function (err) {
    logger_1.logger.info("Error during datasource initialization");
    process.exit(1);
});
/* package.json notes */
/*
"scripts": {
    // calls rimraft and cleans the dist folder
    "clean": "rimraf dist",
    // build a new version of our server
    "build": "tsc",
    // run node in production without hot reloading
    "start-server": "node dist/server.js",
    // run node in development with hot reloading
    // when a file chnages launch the escaped path
    "start-dev-server": "tsc-watch --onSuccess \"node ./dist/server.js\"",
    // sequence of scripts we want to execute
    "dev": "npm-run-all clean build start-dev-server"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@types/express": "^4.17.21",
    "npm-run-all": "^4.1.5", // allows you to run packages in sequence and in parallel
    "tsc-watch": "^6.2.0", // watches your ts project and if you change any of the files, it triggers a brand new build
    "typescript": "^5.4.5"
  },
  "dependencies": {
    "express": "^4.19.2",
    "rimraf": "^5.0.5" // completely clean the dist folder at the beginning of the build process
  }
*/ 
