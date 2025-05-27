# Node-Rest-API
 
A TypeScript-based Node.js API utilizing the TypeORM framework to perform CRUD operations on a PostgreSQL database. It manages Course and Lesson entities, which are connected via a one-to-many relationship.

### Features
- CRUD Operations: Supports GET, POST, PATCH, and DELETE requests to interact with the database.
- Entity Relationships: Each Course can have multiple associated Lessons, establishing a one-to-many relationship.
- Database Seeding and Cleanup: Includes functions to populate the database with sample data and to clear existing data using simple commands.
- Routing: Middleware handles various HTTP requests, including
  - Creating and deleting courses
  - Retrieving courses by URL
  - Fetching lessons for a specific course
  - Listing all courses
  - Updating course details
- Logging and Error Handling: Implements robust logging and default error handling mechanisms.

### Technologies Used
- Node.js: JavaScript runtime environment.
- TypeScript: Superset of JavaScript that adds static typing.
- TypeORM: Object-Relational Mapping (ORM) tool for TypeScript and JavaScript.
- Express: Web framework for building APIs.
- PostgreSQL: Relational database management system.

### Dependencies
The project relies on the following npm packages:
- body-parser: Parses incoming request bodies for easier data handling.
- cors: Enables Cross-Origin Resource Sharing (CORS) for requests from different domains.
- dotenv: Loads environment variables from a .env file.
- express: Web framework for building APIs.
- pg: PostgreSQL client for Node.js.
- reflect-metadata: Enables reflection on metadata stored in code.
- rimraf: Recursively removes directories.
- typeorm: ORM for working with databases in Node.js.
- winston: Logging library for Node.js applications.

Scripts
Defined in the package.json file, the following scripts are available:
- npm run populate-db: Populates the database with sample data.
- npm run clear-db: Clears all data from the database.

### Getting Started
#### Clone the repository:

```bash
git clone https://github.com/tigerbluejay/Node-Rest-API.git
```
#### Navigate to the project directory:

```bash
cd Node-Rest-API
```

#### Install dependencies:

```bash
npm install
```

#### Set up environment variables:

Create a .env file in the root directory and define the necessary environment variables as required by your application.

#### Run the application:

```bash
npm start
```

Functions are defined to create and delete courses, get courses by url, get lessons for a given course, get all courses and update courses.

Finally, it's worth noting that both logging and default error handling have been implemented.
