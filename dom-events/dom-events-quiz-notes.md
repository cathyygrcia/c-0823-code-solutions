# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging purposes

- What is the purpose of events and event handling?
  create interactive and dynamic user experiences.

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener()

- What is a callback function?
  a function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?
  event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  a property that refers to the DOM element on which the event was triggered.
  console.log(event.target)
  MDN

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  the handleClick function is called but the function runs when the event actually happens
  ```js
  element.addEventListener('click', handleClick());
  ```
  the function is ran immediately

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
