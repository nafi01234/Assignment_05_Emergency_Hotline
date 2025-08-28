1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
1.The return types of these calls vary. querySelector and getElementById both return a single element. querySelectorAll and getElementsByName both return NodeLists. The older getElementsByClassName and getElementsByTagName both return HTMLCollections. NodeLists and HTMLCollections are both referred to as collections of elements.





2.How do you create and insert a new element into the DOM?
ans:
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



Example Explained 
This code creates a new <p> element:
const para = document.createElement("p");
To add text to the <p> element, you must create a text node first. This code creates a text node:
const node = document.createTextNode("This is a new paragraph.");
Then you must append the text node to the <p> element:
para.appendChild(node);
Finally you must append the new element to an existing element.
This code finds an existing element:
const element = document.getElementById("div1");
This code appends the new element to the existing element:
element.appendChild(para);





3.What is Event Bubbling and how does it work?
ans.Event bubbling is the process where an event triggered on a child element automatically "bubbles up" (travels upwards) through its parent elements in the DOM tree.
In other words:

When you click on an element, the event first happens on that element,
then it moves up to its parent,
then the parent’s parent, and so on, until it reaches the document.


how works:
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

A click on the inner <p> first runs onclick:

On that <p>.
Then on the outer <div>.
Then on the outer <form>.
And so on upwards till the document object.



4.What is Event Delegation in JavaScript? Why is it useful?
ans:
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
why is useful.
performance is good because fewar event listeners.
easy to manage and maintain.

5.What is the difference between preventDefault() and stopPropagation() methods?
ans:
main deference
preventDefault():
stops the defult action of element.

event.stopPropagation():
Stops the event from bubbling up.
