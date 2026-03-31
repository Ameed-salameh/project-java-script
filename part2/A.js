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




