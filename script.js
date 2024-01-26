// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

document.body.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
document.body.appendChild(h3);

const div = document.createElement("div");
div.style.cssText = "border: solid black;background-color: pink;";
const elem = document.createElement("h1");
elem.textContent = "I'm in a div!";
document.body.appendChild(div);
div.appendChild(elem);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

const container = document.querySelector("#container");
container.appendChild(div);
