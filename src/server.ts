import * as dotenv from "dotenv";

const result = dotenv.config();
if (result.error) {
    console.log(`Error loading environment variables, aborting`);
    process.exit(1);
}

console.log(process.env.PORT);

// SERVER
import * as express from 'express';
import {root} from "./routes/root";
import { isInteger } from './utils';

const app = express(); // initialize express


// setting up express routes and middleware
function setupExpress() {

    // first express endpoint or route
    // a mapping between a request, a url, and a function
    app.route("/").get(root);

}

// startup logic that launches the server
function startServer() {

    let port: number;
    const portArg = process.argv[2]; // the argv array contains the parameters of the process starting at the third element of the
                                    // array so [2], in position [0] we find the node process that is running, 
                                    // in position [1] we find the script that we are running
    
    if (isInteger(portArg)) {
        port = parseInt(portArg);
    }

    if (!port) port = 9000;

    app.listen(port, () => {
        console.log(`HTTP REST API Server is now running at http://localhost:${port}`);
    })
}

setupExpress();
startServer();


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