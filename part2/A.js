// 1
let h1_1 = document.getElementById("title");
console.log(h1_1.textContent);

let h1_2 = document.querySelector("h1");
console.log(h1_2.textContent);

let h1_3 = document.getElementsByTagName("h1")[0];
console.log(h1_3.textContent);

// 2
let p = document.querySelectorAll("p");
p[1].textContent = "Changed";

// 3
let items = document.querySelectorAll(".item");
items.forEach(el => el.style.color = "blue");

// 4
let input = document.getElementById("username");
console.log(input.value);

// 5
let btns = document.querySelectorAll("button");
btns.forEach(btn => btn.style.border = "2px solid red");

// 6
let firstLi = document.querySelector("ul li");

// 7
let el = document.querySelector('[data-id="5"]');

// 8
console.log(el.tagName);



// 9
document.querySelector("h2").textContent = "Welcome to DOM!";

// 10
document.querySelector("div").innerHTML = "<strong>Hello</strong>";

// 11
window.onload = function() {
  document.querySelector("button").style.backgroundColor = "yellow";
};

// 12
document.querySelectorAll("p").forEach(el => el.style.fontSize = "20px");

// 13
document.querySelector(".box").classList.add("active");

// 14
function toggleClass() {
  document.querySelector(".box").classList.toggle("active");
}

// 15
document.querySelector(".box").style.display = "none";

// 16
document.querySelector("img").src = "photo.jpg";



// 17
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});

// 18
document.querySelector("div").addEventListener("click", function() {
  this.style.backgroundColor = "blue";
});

// 19
let img = document.querySelector("img");
img.addEventListener("mouseover", () => img.style.width = "300px");
img.addEventListener("mouseout", () => img.style.width = "200px");

// 20
document.querySelector("input").addEventListener("keyup", function() {
  console.log(this.value);
});

// 21
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
});

// 22
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", function() {
    this.style.backgroundColor = "yellow";
  });
});

// 23
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
  this.disabled = true;
});

// 24
document.querySelector("p").addEventListener("dblclick", function() {
  this.style.fontWeight = "bold";
});

// 25
document.addEventListener("click", function(e) {
  console.log(e.target);
});

// 26
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    console.log("Enter pressed");
  }
});






// 27
console.log(document.querySelector("button").parentElement);

// 28
console.log(document.querySelector("ul").children);

// 29
document.querySelector("li").addEventListener("click", function() {
  console.log(this.nextElementSibling);
});

// 30
console.log(document.querySelector("p").previousElementSibling);

// 31
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", function() {
    console.log(this.parentElement);
    console.log(this.parentElement.children);
  });
});

// 32
let child = document.querySelector("span");
while (child.parentElement) {
  child = child.parentElement;
}
console.log(child); 



// 33
let li = document.createElement("li");
li.textContent = "New Item";
document.querySelector("ul").appendChild(li);

// 34
let newBtn = document.createElement("button");
newBtn.textContent = "Click me";
newBtn.addEventListener("click", () => alert("Hi"));
document.body.appendChild(newBtn);

// 35
let div = document.createElement("div");
let h = document.createElement("h3");
let p = document.createElement("p");

h.textContent = "Title";
p.textContent = "Paragraph";

div.appendChild(h);
div.appendChild(p);
document.body.appendChild(div);

// 36
let input2 = document.createElement("input");
let ref = document.querySelector("button");
ref.parentElement.insertBefore(input2, ref);

// 37
let el2 = document.createElement("div");
el2.textContent = "First";
document.body.prepend(el2);

// 38
let note = document.createElement("div");
note.textContent = "Notification";
document.body.appendChild(note);

setTimeout(() => note.remove(), 3000);

// 39
let card = document.createElement("div");
card.innerHTML = `
  <img src="img.jpg" width="100">
  <h3>Title</h3>
  <p>Description</p>
  <button>Buy</button>
`;
document.body.appendChild(card);

// 40
let clone = document.querySelector(".box").cloneNode(true);
document.body.appendChild(clone);