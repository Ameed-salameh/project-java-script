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









