

Asynchronous code - 
    - code of async nature should be send to side stack or event loop, after all the synchronous code is executed/ main stack is empty then check if async code is completed. if completed then move to main stack/ call stack.