ES6 Promise
An asynchronous operation is a task that doesn't necessarily execute in sequential order with the rest of your code. Instead, it runs "in the background" while the rest of your code continues to execute.
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more elegantly and avoid the "callback hell" 
then() is used to handle both resolved and rejected states.
catch() is used to handle only the rejected state.
finally() is used to execute code regardless of whether the Promise is resolved or rejected.