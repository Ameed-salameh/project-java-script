// 1
let data = '{"name":"John","age":30}';
let obj1 = JSON.parse(data);
console.log(obj1.name);

// 2
let studentsJSON = '[{"name":"Ali"}, {"name":"Lina"}]';
let students = JSON.parse(studentsJSON);
students.forEach(s => console.log(s.name));

// 3
let info = '{"user":{"name":"Sara","scores":{"math":90}}}';
let obj3 = JSON.parse(info);
console.log(obj3.user.scores.math);

// 4 (JSON غير صالح + إصلاحه)
let badJSON = "{name:'Ali'}"; // غلط
let fixedJSON = '{"name":"Ali"}';
console.log(JSON.parse(fixedJSON));

// 5
let obj5 = JSON.parse('{"name":"Adam","age":22}');
obj5.age = 30;
console.log(obj5);

// 6
let obj6 = JSON.parse('{"active":true,"data":null}');
console.log(typeof obj6.active); // boolean
console.log(typeof obj6.data);   // object (null)

// 7
let obj7 = JSON.parse('{"grades":[50,60,70]}');
let sum = obj7.grades.reduce((a,b) => a + b, 0);
console.log(sum);

// 8
let products = JSON.parse('[{"price":30},{"price":60},{"price":80}]');
products.filter(p => p.price > 50).forEach(p => console.log(p));

// 9
let obj9 = JSON.parse('{"created":"2024-01-10"}');
let date = new Date(obj9.created);
console.log(date);

// 10
let tasks = JSON.parse('["Task1","Task2"]');
let ul = document.createElement("ul");
tasks.forEach(t => {
  let li = document.createElement("li");
  li.textContent = t;
  ul.appendChild(li);
});
document.body.appendChild(ul);


// 11
let user = {name:"Mona", age:28};
let json11 = JSON.stringify(user);
console.log(json11);

// 12
let obj12 = {skills:["HTML","CSS","JS"]};
let json12 = JSON.stringify(obj12);
localStorage.setItem("skills", json12);

// 13
let settings = {theme:"dark", lang:"en"};
localStorage.setItem("settings", JSON.stringify(settings));

// 14 (تجاهل password)
let obj14 = {username:"admin", password:"1234"};
let json14 = JSON.stringify(obj14, (key, value) => {
  if (key === "password") return undefined;
  return value;
});
console.log(json14);

// 15 (تواريخ)
let obj15 = {date: new Date()};
console.log(JSON.stringify(obj15));

// 16 (دالة)
let obj16 = {name:"Test", action:function(){return 5;}};
console.log(JSON.stringify(obj16));
// الدالة يتم تجاهلها ❗

// 17 (تنسيق)
let obj17 = {name:"Ali", age:22};
console.log(JSON.stringify(obj17, null, 2));

// 18
let bill = {items:["a","b","c"]};
let json18 = JSON.stringify(bill);
console.log(json18.length);

// 19
let user19 = {name:"Ali", tasks:["task1","task2"]};
let json19 = JSON.stringify(user19);
console.log(json19);

// 20
let big = {data:[1,2,3]};
let str = JSON.stringify(big);
let back = JSON.parse(str);
document.body.textContent = JSON.stringify(back);







// 21
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => data.forEach(u => console.log(u.name)));

// 22
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => {
  let h2 = document.createElement("h2");
  h2.textContent = data.title;
  document.body.appendChild(h2);
});

// 23
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => {
  let done = data.filter(t => t.completed);
  console.log(done);
});

// 24
fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => res.json())
.then(data => {
  let img = document.createElement("img");
  img.src = data[0].url;
  document.body.appendChild(img);
});

// 25 (POST)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body: JSON.stringify({title:"Test"})
});

// 26
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => res.json())
.then(user => {
  let card = document.createElement("div");
  card.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
  document.body.appendChild(card);
});

// 27
fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
.then(res => res.json())
.then(data => console.log(data));

// 28
document.querySelector("button").onclick = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => {
    let pre = document.createElement("pre");
    pre.textContent = JSON.stringify(data, null, 2);
    document.body.appendChild(pre);
  });
};

// 29
let obj29 = {a:1,b:2};
document.body.innerHTML = `<pre>${JSON.stringify(obj29,null,2)}</pre>`;

// 30
let products30 = [
  {name:"A", price:10},
  {name:"B", price:20}
];

let table = document.createElement("table");
products30.forEach(p => {
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${p.name}</td><td>${p.price}</td>`;
  table.appendChild(tr);
});
document.body.appendChild(table);

// 31 (try/catch)
async function getData() {
  try {
    let res = await fetch("bad-url");
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log("Error!");
  }
}

// 32 (search)
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
  let result = data.filter(u => u.name.includes("Leanne"));
  console.log(result);
});
