# Back-End Notes

## Node.js Overview

Node.js is a runtime environment that allows you to run JavaScript code on the server side, outside of a web browser. It is built on Google's V8 JavaScript engine, which is the same engine that powers Chrome. Node.js is designed for building scalable, high-performance applications, particularly those that require handling a large number of simultaneous connections with low latency.

## Key Features of Node.js

### Event-Driven, Non-Blocking I/O
Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. This is particularly beneficial for applications that perform a lot of I/O operations, such as reading and writing to databases, files, or network communication.

### Single-Threaded with Asynchronous Callbacks
Despite being single-threaded, Node.js can handle many connections simultaneously by using asynchronous callbacks. This means that Node.js can start a task and continue processing other tasks while waiting for the first one to complete, without blocking the execution of other code.

### NPM (Node Package Manager)
Node.js comes with NPM, the world's largest software registry. NPM allows developers to install and manage third-party libraries and modules, enabling them to build applications more efficiently.

### Cross-Platform
Node.js is cross-platform, meaning it can run on various operating systems, including Windows, macOS, and Linux.

### JavaScript Everywhere
With Node.js, developers can use JavaScript both on the client side (in the browser) and on the server side, making it easier to use the same language across the entire application stack.

## Use Cases of Node.js

### Web Servers and APIs
Node.js is commonly used to create web servers and RESTful APIs, allowing for high performance and real-time data updates.

### Real-Time Applications
Applications like chat applications, real-time collaboration tools, and online gaming often use Node.js for its ability to handle many concurrent connections with minimal overhead.

### Microservices
Node.js is well-suited for building microservices architectures, where each service is small and independently deployable.

### Streaming Applications
Its non-blocking nature makes Node.js ideal for building streaming applications like video or audio streaming services.

### Task Automation
Node.js is also used in task automation tools and build scripts, often in combination with tools like Gulp or Webpack.








## Importent Points to Remember
As Javascript can't create a server alone, a js wrapper recieves the code and  uses the V8 engin's C++ module to create a server.

- Synchronous code: Codes that are executed line by line ie these codes are processed on the Main Stack (Call Stack). This follows LIFO (Last In, First Out). In simple words it is a blocking code.

- Asynchronous code: Code of async nature should be send to Side Stack (Event Queue, Task Queue, or Microtask Queue), after all the synchronous code is executed/ main stack is empty then check if async code is completed. if completed then move to main stack/ call stack. Asynchronous functions, like setTimeout, Promises, or events, are placed in these queues and wait to be pushed onto the call stack once the current stack is clear.


- Main stack: The main stack, often referred to simply as the call stack, is the primary mechanism where JavaScript keeps track of function calls. When a function is called, it's added to the stack, and when it returns, it’s removed from the stack.

- Side Stack: The "side stack" could refer to the event queue (sometimes called the task queue) or the microtask queue in the event loop model. These queues hold tasks that are ready to be executed after the call stack is empty.

- Blocking: Since JavaScript is single-threaded, if the main stack is busy with a long-running operation, it will block further execution until that operation is complete.

- Event Loop: The event loop continually checks the call stack and these queues. If the call stack is empty, the event loop pushes tasks from the event queue or microtask queue to the call stack for execution.

- Microtasks vs. Macrotasks: Microtasks (like Promise callbacks) have higher priority and are executed before any other tasks in the event queue.

- dev dependencies: packeges that we are only using at the time of devlopment. (npm i nodemon --save--dev)

- diff btw "npm start", "npm run dev" and "npm run cuncurrent".


## File System Module
- writefile: This function is used to write data into file and create the file if not present.

- appendfile: This funciton is used to update ie append the file with addition data. this doesn't replace the data already present.

- rename: this function allows to rename the name of the file. takes three arguments original name, new name and a callback funciton.

- copyfile: Used to copy a file to a perticual directory if directory present and path provided, if not a cop is created in the same directory. The name of both files must be diffrent in the same directory else curernt file will be replaced.

- unlink: used to delete a file form the directory and has a colback function for errors.

- rmdir: This function used to delete the folder untill the folder is empty and if not empty use "{recursive:true}".



## Express.Js
### Introduction to Express.js
Express js is a npm package. It is a framework and manages everything from recieving the requests and giving the response.

- middleware: whenever a server accepts a request. And we stop the request form reaching the routes and perform some additional function and then send it to the routes. these elements are called middleware. \n
[accept] ----------[middleware]--------- [response]



### What is a Session?

A **session** in web development is a mechanism to store data on the server for individual users, identified by a unique session ID. This session ID is usually stored in a cookie on the user's browser. Sessions allow the server to remember user-specific data across different HTTP requests, maintaining the user's state throughout their interaction with a web application.

### Key Concepts

1. **State Management**:
   - HTTP is inherently stateless, meaning it doesn't retain information about previous interactions.
   - Sessions enable the server to maintain user state across multiple requests, such as login status, shopping cart contents, and personalized settings.

2. **Session ID**:
   - When a session is created, the server generates a unique identifier known as a session ID.
   - This ID is sent to the client's browser and is typically stored in a cookie.

3. **Session Storage**:
   - The session data associated with the session ID is stored on the server.
   - This data can be stored in various places such as memory, a database, or a file, and may include user preferences, authentication tokens, etc.

4. **Session Lifetime**:
   - Sessions usually have an expiration time. After a set period of inactivity, the session will expire, and the user may need to log in again.

5. **Security**:
   - Proper management of sessions is essential for security.
   - Secure session IDs should be generated and transmitted over HTTPS to prevent session hijacking.

### Example Workflow

1. **User Logs In**:
   - The server authenticates the user and creates a session.
   - A session ID is sent to the user's browser in a cookie.

2. **User Navigates the Site**:
   - With each new request, the browser sends the session ID back to the server.
   - The server retrieves the associated session data and recognizes the user.

3. **Session Ends**:
   - The session can end either when the user logs out, closes the browser, or after a set period of inactivity.

### Summary

Sessions are a fundamental aspect of web applications, allowing servers to maintain continuity between user interactions. They enable the storage and retrieval of user-specific data across multiple requests, providing a more dynamic and personalized web experience.



## Data Storage
### Types of Databases
- there are 2 types of database and can be classified as SQL and NoSQL
   -  SQL stores data into tables.
   - NoSQL stores the data in the form of objects.  

### Terminologies

1. Collections
   - A **collection** in databases like MongoDB is equivalent to a table in relational databases.
   - It stores **documents** (similar to rows in relational databases).
   - Collections don't enforce a schema, so documents within the same collection can have different structures.

2. Documents
   - A **document** is an individual record within a collection.
   - Documents are stored in a **JSON-like** format (BSON in MongoDB), consisting of key-value pairs.
   - Documents can contain nested fields and arrays.

3. Schemas
   - A **schema** defines the structure of a document.
   - Schemas are optional in MongoDB but can be enforced using libraries like **Mongoose**.
   - A schema specifies which fields a document should have, their types, and any validation rules.

4. Keys
   - **Keys** are the field names in a document.
   - Each key is associated with a value, forming key-value pairs.

5. Models
   - **Models** represent collections of documents in your application.
   - Models use schemas to enforce structure and rules on the documents they manage.
   - They allow you to interact with the collection using various methods like `find()`, `create()`, and `update()`.
