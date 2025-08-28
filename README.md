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
