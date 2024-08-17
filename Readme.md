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

- middleware: whenever a server accepts a request. And we stop the request form reaching the routes and perform some additional function and then send it to the routes. these elements are called middleware. 
[accept] ----------[middleware]--------- [response]