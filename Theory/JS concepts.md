1. **What is ECMAScript in JavaScript?**

   - ECMAScript (ES) is the standard specification that JavaScript follows. It defines the core features of the language. JavaScript is an implementation of ECMAScript, and updates to ECMAScript, like ES6, ES7, etc., bring new features to JavaScript.

2. **What is the difference between `let`, `const`, and `var`?**

   - `var` is function-scoped and can be redeclared and updated. `let` is block-scoped and can be updated but not redeclared. `const` is also block-scoped but cannot be updated or redeclared; it must be initialized at the time of declaration.

3. **What are the spread operator, rest operator, and default parameter?**

   - The **spread operator (`...`)** allows an iterable like an array to be expanded in places where multiple elements are expected.
   - The **rest operator (`...`)** collects all remaining elements into an array.
   - **Default parameters** allow named parameters to be initialized with default values if no value or `undefined` is passed.

4. **What is deep copy and shallow copy in JavaScript?**

   - A **shallow copy** copies the values of an object but does not copy nested objects—they still reference the original objects.
   - A **deep copy** copies everything, including nested objects, so that there are no shared references between the original and the copy.

5. **What are promises, callback functions, and `async/await` in JavaScript?**

   - **Promises** are objects representing the eventual completion or failure of an asynchronous operation and its resulting value.
   - **Callback functions** are functions passed into other functions as arguments to be executed later.
   - **`async/await`** is syntactic sugar built on promises that allows you to write asynchronous code that looks synchronous.

6. **What is the difference between a promise and a callback in JavaScript?**

   - A **callback** is a function passed into another function to be executed later, often leading to "callback hell" if used extensively. A **promise** is an object that represents the completion of an asynchronous operation and is easier to manage, avoiding deeply nested callbacks.

7. **What is event bubbling and event capturing in JavaScript?**

   - **Event bubbling** means that the event starts from the target element and bubbles up to the parent elements.
   - **Event capturing** (or trickling) is the opposite; the event starts from the root and trickles down to the target.

8. **What is a higher-order function in JavaScript?**

   - A higher-order function is a function that takes other functions as arguments, returns a function, or both. Examples include `map`, `filter`, and `reduce`.

9. **Explain different types of functions in JavaScript.**

   - **Named functions:** Functions with a specified name.
   - **Anonymous functions:** Functions without a name, often used as arguments.
   - **Arrow functions:** A shorthand for writing functions introduced in ES6.
   - **Generator functions:** Functions that can pause and resume their execution using `yield`.

10. **What is an arrow function in JavaScript?**

    - Arrow functions are a concise way to write functions using `=>`. They do not have their own `this` context, making them great for writing shorter functions without needing to worry about rebinding `this`.

11. **Why do we use `call`, `apply`, and `bind` methods in JavaScript?**

    - `**call**`: Calls a function with a given `this` value and arguments.
    - `**apply**`: Similar to `call`, but takes arguments as an array.
    - `**bind**`: Returns a new function with a specified `this` value and arguments, allowing you to call it later.

12. **How many ways are there to create an object in JavaScript?**

    - Using object literals: `{ key: 'value' }`
    - Using `new Object()`
    - Using constructor functions
    - Using `Object.create()`
    - Using ES6 classes

13. **What is prototype inheritance in JavaScript?**

    - Prototype inheritance allows objects to inherit properties and methods from other objects. Every JavaScript object has a `prototype` property that refers to another object, enabling inheritance.

14. **What is TypeScript?**

    - TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, interfaces, and other features, enhancing developer productivity and reducing bugs.

15. **What are array methods and string methods?**

    - **Array methods**: `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `filter()`, `reduce()`, `slice()`, `splice()`, etc.
    - **String methods**: `charAt()`, `includes()`, `indexOf()`, `replace()`, `split()`, `toLowerCase()`, `toUpperCase()`, `trim()`, etc.

16. **What is the difference between Java and JavaScript?**

    - **Java** is a statically typed, object-oriented language primarily used for server-side applications.
    - **JavaScript** is a dynamically typed, scripting language primarily used for web development and client-side scripting.

17. **What are throttling and debouncing in JS?**

    - **Throttling** limits the execution of a function to once every specified amount of time.
    - **Debouncing** delays the execution of a function until after a certain amount of time has passed since it was last called.

18. **What is null and undefined in JavaScript?**

    - **`null`** is an assignment value representing no value or an empty object reference.
    - **`undefined`** means a variable has been declared but not assigned a value.

19. **What are falsy values in JavaScript?**

    - Falsy values are `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`. These values are considered `false` when evaluated in boolean contexts.

20. **What are execution context, event loop, stack, call queue, and microtask queue in JavaScript?**

    - The **execution context** is the environment where JavaScript code is evaluated.
    - The **event loop** is responsible for executing code, collecting events, and running queued tasks.
    - The **call stack** is where the browser keeps track of function calls.
    - The **task queue** holds callbacks from `setTimeout`, `setInterval`, and other asynchronous tasks.
    - The **microtask queue** handles promises and mutations, processed before the task queue.

21. **What is `setTimeout` and `setInterval` in JavaScript?**

    - **`setTimeout`** schedules a function to execute once after a specified delay.
    - **`setInterval`** schedules a function to execute repeatedly at fixed intervals.

22. **What are `Object.seal` and `Object.freeze` in JavaScript?**

    - **`Object.seal`** prevents new properties from being added to an object but allows existing properties to be modified.
    - **`Object.freeze`** makes an object immutable by preventing new properties from being added and existing properties from being modified or deleted.

23. **What is the difference between `Map` and `Set` in JavaScript?**

    - **`Map`** stores key-value pairs and allows for keys of any type.
    - **`Set`** stores unique values of any type and does not allow duplicates.

24. **What are `WeakMap` and `WeakSet` in JavaScript?**

    - **`WeakMap`** is a collection of key-value pairs where keys must be objects, and the references to keys are weak, allowing for garbage collection.
    - **`WeakSet`** is a collection of objects that are weakly held, meaning they can be garbage-collected when no longer referenced.

25. **What are `sessionStorage`, `localStorage`, and cookies?**

    - **`sessionStorage`** stores data temporarily for a session, deleted when the browser is closed.
    - **`localStorage`** stores data with no expiration time.
    - **Cookies** store data that can be sent to the server with each HTTP request, usually with expiration dates.

26. **Write a program to sort an array.**

    ```javascript
    const arr = [3, 1, 4, 1, 5];
    arr.sort((a, b) => a - b); // Ascending order
    console.log(arr); // [1, 1, 3, 4, 5]
    ```

27. **What is the use of `JSON.stringify` and `JSON.parse()` methods in JavaScript?**

    - `JSON.stringify` converts a JavaScript object into a JSON string.
    - `JSON.parse` converts a JSON string back into a JavaScript object.

28. **What are `map`, `filter`, and `reduce` in JavaScript?**

    - **`map`** creates a new array by applying a function to each element of an array.
    - **`filter`** creates a new array with elements that pass a specified test.
    - **`reduce`** applies a function to each element of an array to reduce it to a single value.

29. **What is a generator function in JavaScript?**
    - A generator function is defined using `function*` and can pause its execution with `yield`. It returns an iterator, which can be resumed

to execute code blocks.

30. **How to stop event propagation in JavaScript?**

    - Use the `event.stopPropagation()` method within an event handler to stop the event from bubbling up or trickling down.

31. **What is closure in JavaScript?**

    - A closure is a function that remembers its lexical scope even when the function is executed outside that scope. Closures allow functions to access variables from their outer scope.

32. **What is hoisting in JavaScript?**

    - Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope before code execution.

33. **What is the dead zone in JavaScript?**

    - The Temporal Dead Zone (TDZ) is the time between entering a scope and initializing a variable declared with `let` or `const` during which the variable cannot be accessed.

34. **What is function currying in JavaScript?**

    - Currying is the process of breaking down a function that takes multiple arguments into a series of functions that each take a single argument.

35. **What is Mutation Observer in JavaScript?**

    - A MutationObserver watches for changes in the DOM tree and executes a callback when mutations (changes) are detected.

36. **What is memoization in JavaScript?**

    - Memoization is an optimization technique used to speed up function execution by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

37. **Write a program to find element occurrence in an array.**

    ```javascript
    const arr = [1, 1, 2, 3, 1, 4];
    const count = {};
    arr.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });
    console.log(count); // { '1': 3, '2': 1, '3': 1, '4': 1 }
    ```

38. **Write a program to remove duplicate items from an array.**

    ```javascript
    const arr = [1, 2, 3, 4, 1, 2];
    const uniqueArr = [...new Set(arr)];
    console.log(uniqueArr); // [1, 2, 3, 4]
    ```

39. **What will be the output of the given code snippet?**

    ```javascript
    const firstname = fun();
    let name = "vivek";
    function fun() {
      return `my name is ${name} malviya`;
    }
    console.log(firstname); // Output: "my name is undefined malviya" because `name` is hoisted but not initialized before calling fun()
    ```

40. **Write a program to multiply two numbers without using the multiply sign in JavaScript.**

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

41. **Write a program for sorting in JavaScript.**

    ```javascript
    const arr = [3, 2, 5, 4, 1, 0];
    arr.sort((a, b) => a - b); // Ascending order
    console.log(arr); // [0, 1, 2, 3, 4, 5]
    ```

42. **What will be the output of the provided code examples?**

    - This question would need specific examples to provide answers.

43. **Write a program to create a polyfill for the `map` method in JavaScript.**

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

44. **Write a program to create a polyfill for the `filter` method in JavaScript.**

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

45. **Write a program to create a polyfill for the `reduce` method in JavaScript.**
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
