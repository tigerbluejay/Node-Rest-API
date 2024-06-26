﻿# Node-Rest-API
 
This Typescript Node API leverages the TypeORM Framework to perform various CRUD style operations on a database. Calls include get, patch, post and delete requests to query and modify a series of tables containing course and lesson information, connected on a one-to-many basis.

The API relies on a number of packages, including body-parser, cors, dotenv, express, pg, reflect-metadata, rimraf, typeorm and winston.
body-parser: Parses incoming request bodies for easier access to data.
cors: Enables Cross-Origin Resource Sharing (CORS) for requests from different domains.
dotenv: Loads environment variables from a .env file.
express: Web framework for building web applications and APIs.
pg: PostgreSQL client for interacting with PostgreSQL databases.
reflect-metadata: Enables reflection on metadata stored in code.
rimraf: Recursively removes directories.
typeorm: Object-relational mapper (ORM) for working with databases in Node.js.
winston: Powerful logging library for Node.js applications.

Additionally, it defines a number of command line scripts in the package.json file.

The API defines two models Courses and Lessons, which are connected on a one-to-many basis. For any given Course there can be many lessons defined. Any given lesson, corresponds to one course.

Before implementing the core CRUD functionality, special functions are defined for populating the database and deleting the items in the database.
The intent of these functions is to get some sample data working on our database and have the possiblity of cleaning it with simple commands.
The data is stored in a data file within the application.

The routes defined as middleware handle the different HTTP verb requests.
Functions are defined to create and delete courses, get courses by url, get lessons for a given course, get all courses and update courses.

Finally, it's worth noting that both logging and default error handling have been implemented.
