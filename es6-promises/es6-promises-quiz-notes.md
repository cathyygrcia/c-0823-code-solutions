# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?

its how javascript handles asynchronous operations and callbacks.
First all the functions in the call stack run and then the functions in the event queue.

- What are the three states a Promise can be in?
  Pending - initial state, neither fulfilled nor rejected
  fulfilled - the operation was completed successfully
  rejected - the operation failed

- How do you handle the fulfillment of a Promise?

by attaching a .then() method to the Promise object.
.then() takes one or two functions as arguments which are executed when the promise is fulfilled.

- How do you handle the rejection of a Promise?
  attaching the .catch() method to the Promise.

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
