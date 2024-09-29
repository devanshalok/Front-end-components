### 1. **`let`, `const`, and `var` Differences**

```javascript
// Using 'var': function-scoped, can be redeclared and updated
var name = "John"; // Declaring a variable with var
var name = "Doe"; // Redeclaring is allowed
console.log(name); // Outputs: Doe

// Using 'let': block-scoped, can be updated but not redeclared
let age = 25; // Declaring a variable with let
age = 30; // Updating the value
// let age = 35;    // Error: Cannot redeclare a variable declared with let
console.log(age); // Outputs: 30

// Using 'const': block-scoped, must be initialized, cannot be updated or redeclared
const city = "New York"; // Declaring a constant
// city = "Los Angeles";  // Error: Cannot update a constant
// const city = "Chicago"; // Error: Cannot redeclare a constant
console.log(city); // Outputs: New York
```

### 2. **Spread Operator, Rest Operator, and Default Parameters**

```javascript
// Spread operator: expands elements of an array or object
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Expanding arr1 elements into arr2
console.log(arr2); // Outputs: [1, 2, 3, 4, 5]

// Rest operator: collects remaining elements into an array
function sum(...numbers) {
  // '...numbers' gathers all arguments into an array
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10

// Default parameters: setting default values for function parameters
function greet(name = "Guest") {
  // If no argument is passed, 'Guest' will be used
  console.log(`Hello, ${name}!`);
}
greet(); // Outputs: Hello, Guest!
greet("Alice"); // Outputs: Hello, Alice!
```

### 3. **Deep Copy and Shallow Copy**

```javascript
// Shallow copy using spread operator - nested objects are still referenced
const original = { name: "John", details: { age: 30 } };
const shallowCopy = { ...original };
shallowCopy.details.age = 35; // Modifying nested object affects the original
console.log(original.details.age); // Outputs: 35

// Deep copy using JSON methods - creates a completely independent copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.age = 40; // Modifying deep copy doesn't affect the original
console.log(original.details.age); // Outputs: 35
```

### 4. **Promises, Callback Functions, and `async/await`**

```javascript
// Callback function: function passed to another function to be called later
function fetchDataCallback(callback) {
  setTimeout(() => {
    // Simulating an async operation
    callback("Data fetched");
  }, 1000);
}
fetchDataCallback(console.log); // Outputs: Data fetched after 1 second

// Promise: handles asynchronous operations more cleanly
const fetchDataPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched with promise"), 1000);
  });
fetchDataPromise().then(console.log); // Outputs: Data fetched with promise

// async/await: syntactic sugar for promises, making code look synchronous
async function fetchDataAsync() {
  const data = await fetchDataPromise(); // Waits for promise to resolve
  console.log(data); // Outputs: Data fetched with promise
}
fetchDataAsync();
```

### 5. **Promise vs Callback**

```javascript
// Callback Hell: deeply nested callbacks, hard to manage
setTimeout(() => {
  console.log("First step done");
  setTimeout(() => {
    console.log("Second step done");
    setTimeout(() => {
      console.log("Third step done");
    }, 1000);
  }, 1000);
}, 1000);

// Promises: handle sequential steps without deeply nested code
const step1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Step 1 done"), 1000));
const step2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Step 2 done"), 1000));
const step3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Step 3 done"), 1000));

step1()
  .then(console.log)
  .then(step2)
  .then(console.log)
  .then(step3)
  .then(console.log);
```

### 6. **Event Bubbling and Capturing**

```javascript
// HTML structure example
// <div id="parent"><button id="child">Click me</button></div>

document.getElementById("parent").addEventListener(
  "click",
  () => console.log("Parent clicked (bubbling)"),
  false // false means bubbling phase
);

document
  .getElementById("child")
  .addEventListener(
    "click",
    () => console.log("Child clicked (bubbling)"),
    false
  );

// Event Capturing: triggers from parent to child
document.getElementById("parent").addEventListener(
  "click",
  () => console.log("Parent clicked (capturing)"),
  true // true means capturing phase
);
```

### 7. **Higher-Order Functions**

```javascript
// A function that accepts another function as an argument
function greet(name) {
  return `Hello, ${name}`;
}

function higherOrderFunction(callback) {
  return callback("Alice");
}

console.log(higherOrderFunction(greet)); // Outputs: Hello, Alice
```

### 8. **Different Types of Functions**

```javascript
// Named function
function namedFunction() {
  console.log("I am a named function");
}
namedFunction();

// Anonymous function assigned to a variable
const anonymousFunction = function () {
  console.log("I am an anonymous function");
};
anonymousFunction();

// Arrow function: concise syntax
const arrowFunction = () => console.log("I am an arrow function");
arrowFunction();

// Generator function: pauses execution with yield
function* generatorFunction() {
  yield "First";
  yield "Second";
}
const generator = generatorFunction();
console.log(generator.next().value); // Outputs: First
console.log(generator.next().value); // Outputs: Second
```

### 9. **Arrow Function**

```javascript
// Arrow functions have a shorter syntax and no own 'this'
const add = (a, b) => a + b; // Short syntax for a function that adds two numbers
console.log(add(2, 3)); // Outputs: 5
```

### 10. **`call`, `apply`, and `bind` Methods**

```javascript
function greetPerson(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };

// call: calls the function with a specific 'this' context and arguments
greetPerson.call(person, "Hello");

// apply: similar to call but accepts arguments as an array
greetPerson.apply(person, ["Hi"]);

// bind: returns a new function with bound 'this' value
const boundGreet = greetPerson.bind(person, "Hey");
boundGreet(); // Outputs: Hey, Alice
```

### 11. **Ways to Create an Object**

```javascript
// Object literal
const obj1 = { name: "John" };

// Using new Object()
const obj2 = new Object();
obj2.name = "Jane";

// Constructor function
function Person(name) {
  this.name = name;
}
const obj3 = new Person("Doe");

// Object.create()
const obj4 = Object.create(obj1);

// ES6 Class
class Animal {
  constructor(type) {
    this.type = type;
  }
}
const obj5 = new Animal("Dog");
```

### 12. **Prototype Inheritance**

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak(); // Outputs: Dog makes a noise.
```

### 13. **Array and String Methods**

```javascript
// Array methods
const arr = [1, 2, 3, 4];
arr.push(5); // Adds element at the end
console.log(arr); // Outputs: [1, 2, 3, 4, 5]

// String methods
const str = "Hello World";
console.log(str.toLowerCase()); // Outputs: hello world
```

### 14. **Throttling and Debouncing**

```javascript
// Throttling: limits the number of times a function is called in a set time
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

// Debouncing: delays execution until after a delay
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
```

### 15. \*\*Execution Context, Event Loop, Stack

, Call Queue, Microtask Queue\*\*

```javascript
// Execution Context: JavaScript creates a context for running code
function outer() {
  // Call Stack: where JavaScript keeps track of function calls
  function inner() {
    console.log("Inner function execution");
  }
  inner();
}

outer();

// Event Loop: manages the execution of code, collects events
setTimeout(() => console.log("Timeout callback"), 0);

// Microtask Queue: higher priority than callback queue
Promise.resolve().then(() => console.log("Promise resolved"));

// Output Order: Promise resolved, Timeout callback
```

### 16. **`setTimeout` and `setInterval`**

```javascript
// setTimeout: runs a function once after a delay
setTimeout(() => console.log("Executed after 1 second"), 1000);

// setInterval: runs a function repeatedly at fixed intervals
setInterval(() => console.log("Repeats every second"), 1000);
```

### 17. **`Object.seal` and `Object.freeze`**

```javascript
const obj = { name: "John" };

// Object.seal: prevents adding or removing properties but allows modifying existing ones
Object.seal(obj);
obj.name = "Jane"; // Allowed
// obj.age = 25; // Not allowed
console.log(obj);

// Object.freeze: prevents adding, removing, and modifying properties
Object.freeze(obj);
// obj.name = "Doe"; // Not allowed
console.log(obj);
```

### 18. **`Map` and `Set`**

```javascript
// Map: stores key-value pairs
const map = new Map();
map.set("key", "value");
console.log(map.get("key")); // Outputs: value

// Set: stores unique values
const set = new Set([1, 2, 2, 3]);
console.log(set); // Outputs: Set(3) { 1, 2, 3 }
```

### 19. **`WeakMap` and `WeakSet`**

```javascript
let obj = { key: "value" };

// WeakMap: only stores objects as keys, does not prevent garbage collection
const weakMap = new WeakMap();
weakMap.set(obj, "some value");
console.log(weakMap.has(obj)); // Outputs: true

// WeakSet: only stores objects, does not prevent garbage collection
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // Outputs: true
```

### 20. **`sessionStorage`, `localStorage`, and Cookies**

```javascript
// sessionStorage: data persists only for the session
sessionStorage.setItem("key", "value");
console.log(sessionStorage.getItem("key")); // Outputs: value

// localStorage: data persists until explicitly deleted
localStorage.setItem("key", "value");
console.log(localStorage.getItem("key")); // Outputs: value

// Cookies: data is sent to the server with every request
document.cookie = "username=John; expires=Fri, 31 Dec 2024 12:00:00 UTC";
console.log(document.cookie); // Outputs: username=John
```

### 21. **JSON.stringify and JSON.parse**

```javascript
const obj = { name: "John", age: 30 };

// JSON.stringify: converts object to JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Outputs: {"name":"John","age":30}

// JSON.parse: converts JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // Outputs: { name: 'John', age: 30 }
```

### 22. **`map`, `filter`, and `reduce`**

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: applies a function to each element and returns a new array
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

// filter: returns a new array with elements that pass a test
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Outputs: [2, 4]

// reduce: reduces the array to a single value using a function
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Outputs: 15
```

### 23. **Generator Function**

```javascript
// Generator function can pause and resume its execution
function* countToThree() {
  yield 1; // Pauses here
  yield 2;
  yield 3;
}

const counter = countToThree();
console.log(counter.next().value); // Outputs: 1
console.log(counter.next().value); // Outputs: 2
console.log(counter.next().value); // Outputs: 3
```

### 24. **Stop Event Propagation**

```javascript
// HTML Example
// <button id="myButton">Click me</button>

document.getElementById("myButton").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops the event from bubbling up
  console.log("Button clicked, propagation stopped");
});
```

### 25. **Closures**

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureExample = outerFunction("Outside");
closureExample("Inside"); // Outputs: Outer: Outside, Inner: Inside
```

### 26. **Hoisting**

```javascript
// Hoisting: var declarations are hoisted but not initialized
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I am hoisted";

// Function declarations are hoisted completely
hoistedFunction(); // Outputs: I am hoisted
function hoistedFunction() {
  console.log("I am hoisted");
}
```

### 27. **Temporal Dead Zone**

```javascript
// The time between entering scope and initializing a variable declared with let or const
console.log(temp); // ReferenceError: Cannot access 'temp' before initialization
let temp = "Hello"; // Temporal Dead Zone ends here
```

### 28. **Function Currying**

```javascript
// Currying: breaking down a function into a series of functions that each take a single argument
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // Outputs: 24
```

### 29. **Mutation Observer**

```javascript
// Observing changes to the DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log("Mutation detected:", mutation);
  });
});

const targetNode = document.getElementById("target"); // Assume this element exists
observer.observe(targetNode, { childList: true, subtree: true });
```

### 30. **Memoization**

```javascript
// Memoization: caching results of expensive function calls
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // Computes and caches result
console.log(memoizedAdd(2, 3)); // Returns cached result
```

### 31. **Write a program to find element occurrence in an array.**

```javascript
const arr = [1, 1, 2, 3, 1, 4];
const count = {};
arr.forEach((element) => {
  count[element] = (count[element] || 0) + 1;
});
console.log(count); // { '1': 3, '2': 1, '3': 1, '4': 1 }
```

### 32. **Write a program to remove duplicate items from an array.**

```javascript
const arr = [1, 2, 3, 4, 1, 2];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4]
```

### 33. **What will be the output of the given code snippet?**

```javascript
const firstname = fun();
let name = "vivek";
function fun() {
  return `my name is ${name} malviya`;
}
console.log(firstname); // Output: "my name is undefined malviya" because `name` is hoisted but not initialized before calling fun()
```

### 34. **Write a program to multiply two numbers without using the multiply sign in JavaScript.**

```javascript
function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}
console.log(multiply(5, 3)); // Output: 15
```

### 35. **Write a program for sorting in JavaScript.**

```javascript
const arr = [3, 2, 5, 4, 1, 0];
arr.sort((a, b) => a - b); // Ascending order
console.log(arr); // [0, 1, 2, 3, 4, 5]
```

### 36. **Write a program to create a polyfill for the `map` method in JavaScript.**

```javascript
Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};
const arr = [2, 3, 4, 5];
const result = arr.myMap((num) => num * 5);
console.log(result); // [10, 15, 20, 25]
```

### 37. **Write a program to create a polyfill for the `filter` method in JavaScript.**

```javascript
Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const arr = [2, 3, 4, 5];
const result = arr.myFilter((num) => num > 2);
console.log(result); // [3, 4, 5]
```

### 38. **Write a program to create a polyfill for the `reduce` method in JavaScript.**

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
const arr = [2, 3, 4, 5];
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 14
```
