# JavaScript DOM & Events Q/A

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- **`getElementById`** → Returns a single element.
- **`querySelector`** → Returns the first matching element.
- **`querySelectorAll`** → Returns a NodeList (all matching elements).
- **`getElementsByClassName`** / **`getElementsByTagName`** → Return an HTMLCollection.

---

## 2. How do you create and insert a new element into the DOM?

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>
```

---

## 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event triggered on a child element automatically bubbles up through its parent elements.

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
### Event Bubbling Example Flow

A click on the inner `<p>` first runs `onclick`:

1. On the `<p>`.
2. Then on the outer `<div>`.
3. Then on the outer `<form>`.
4. And so on upwards till the `document` object.
---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a pattern where an event listener is added to a parent element and the event target is used to identify the child element.

- Improves performance (fewer listeners).
- Easier to manage and maintain.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()`?

- **`event.preventDefault()`** → Stops the default action of the element.  
- **`event.stopPropagation()`** → Stops the event from bubbling up.  
