# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const functionName = (parameters) => {
  function body
  };

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  implicitly returns the result of the expression on the right side of the arrow

- When using _concise body syntax_, how do you return an object literal?
  wrap the object literal inside parentheses.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42. Anonymous arrow function

  - How many arguments does the arrow function take?
    none

  - What value does it return?
    42

  - How many arguments are passed to the function `foo`?
    Called with a single argument the arrow function () => 42

  - What type of argument is passed to the function `foo`?
    an arrow function with consice body syntax

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

    (y) => {
    console.log(`4y = ${4 * y}`);
    }

  - How many arguments does the arrow function take?
    one argument (y)

  - What value does it return?
    undefined

  - How many arguments are passed to the function `bar`?
    1

  - What type of argument is passed to the function `bar`?
    callback function

  - When does the arrow function's code get executed?
    When the function bar is called and it invokes the arrow function

- How does the value of `this` differ between standard functions and arrow functions?
  arrow functions do not have a 'this' binding

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
