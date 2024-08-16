Back-End Importent points and notes-

- Synchronous code:
    Codes that are executed line by line ie these codes are processed on the Main Stack (Call Stack). This follows LIFO (Last In, First Out). In simple words it is a blocking code.

- Asynchronous code: 
    code of async nature should be send to Side Stack (Event Queue, Task Queue, or Microtask Queue), after all the synchronous code is executed/ main stack is empty then check if async code is completed. if completed then move to main stack/ call stack. Asynchronous functions, like setTimeout, Promises, or events, are placed in these queues and wait to be pushed onto the call stack once the current stack is clear.


- Main stack: The main stack, often referred to simply as the call stack, is the primary mechanism where JavaScript keeps track of function calls. When a function is called, it's added to the stack, and when it returns, it’s removed from the stack.

- Side Stack: The "side stack" could refer to the event queue (sometimes called the task queue) or the microtask queue in the event loop model. These queues hold tasks that are ready to be executed after the call stack is empty.

- Blocking: Since JavaScript is single-threaded, if the main stack is busy with a long-running operation, it will block further execution until that operation is complete.

- Event Loop: The event loop continually checks the call stack and these queues. If the call stack is empty, the event loop pushes tasks from the event queue or microtask queue to the call stack for execution.

- Microtasks vs. Macrotasks: Microtasks (like Promise callbacks) have higher priority and are executed before any other tasks in the event queue.