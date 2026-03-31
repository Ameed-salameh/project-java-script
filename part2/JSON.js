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



