
console.log("تم تحميل الملف app.js بنجاح.");

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const num1Input = document.getElementById("num1Input");
const num2Input = document.getElementById("num2Input");
const createCardBtn = document.getElementById("createCardBtn");
const typesBtn = document.getElementById("typesBtn");
const result = document.getElementById("result");

function readInputs() {
  var userName = nameInput.value.trim();

  // Number() لتحويل النص إلى رقم
  let age = Number(ageInput.value);
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);

  return {
    userName: userName,
    age: age,
    num1: num1,
    num2: num2,
  };
}

function validate(userName, age, num1, num2) {
  if (userName === "") {
    result.innerHTML = '<span class="error">الرجاء إدخال الاسم.</span>';
    return false;
  }

  if (!Number.isFinite(age) || !Number.isFinite(num1) || !Number.isFinite(num2)) {
    result.innerHTML = '<span class="error">الرجاء إدخال عمر ورقمين صالحين.</span>';
    return false;
  }

  return true;
}

function createCard() {
  const values = readInputs();
  const userName = values.userName;
  const age = values.age;
  const num1 = values.num1;
  const num2 = values.num2;

  if (!validate(userName, age, num1, num2)) {
    return;
  }

  // المعاملات الحسابية
  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quotient = num2 !== 0 ? num1 / num2 : "غير معرف (قسمة على صفر)";
  const mod = num2 !== 0 ? num1 % num2 : "غير معرف (باقي على صفر)";

  // معاملات الإسناد
  let score = 10;
  score += 5;
  score *= 2;
  score -= 4;

  // معاملات المقارنة
  const isAdult = age >= 18;
  const numbersEqual = num1 == num2;
  const numbersStrictEqual = num1 === num2;
  const num1Greater = num1 > num2;

  // المعاملات المنطقية
  const canOpenAccount = isAdult && num1 > 0;
  const specialOffer = age < 18 || num1 > 100;
  const notAdult = !isAdult;

  // معاملات السلاسل النصية
  const welcomeMessage = "أهلًا " + userName + "!";
  const cardTitle = "بطاقة المستخدم: " + userName;
  const shortInfo = "العمر " + age + " سنة";

  result.classList.remove("muted");
  result.innerText =
    cardTitle + "\n" +
    welcomeMessage + "\n" +
    shortInfo + "\n\n" +
    "العمليات الحسابية:" + "\n" +
    "الجمع = " + sum + "\n" +
    "الطرح = " + diff + "\n" +
    "الضرب = " + product + "\n" +
    "القسمة = " + quotient + "\n" +
    "الباقي = " + mod + "\n\n" +
    "الإسناد (score) = " + score + "\n\n" +
    "المقارنة:" + "\n" +
    "age >= 18 => " + isAdult + "\n" +
    "num1 == num2 => " + numbersEqual + "\n" +
    "num1 === num2 => " + numbersStrictEqual + "\n" +
    "num1 > num2 => " + num1Greater + "\n\n" +
    "المنطق:" + "\n" +
    "isAdult && num1 > 0 => " + canOpenAccount + "\n" +
    "age < 18 || num1 > 100 => " + specialOffer + "\n" +
    "!isAdult => " + notAdult;

  console.log("=== بطاقة المستخدم + الآلة الحاسبة ===");
  console.log("الاسم:", userName);
  console.log("العمر:", age);
  console.log("sum:", sum, "diff:", diff, "product:", product, "quotient:", quotient, "mod:", mod);
  console.log("score بعد الإسناد:", score);
  console.log("isAdult:", isAdult, "numbersEqual:", numbersEqual, "numbersStrictEqual:", numbersStrictEqual);
  console.log("canOpenAccount:", canOpenAccount, "specialOffer:", specialOffer, "notAdult:", notAdult);
}

function logDataTypes() {
  const values = readInputs();
  const userName = values.userName;
  const age = values.age;
  const num1 = values.num1;
  const num2 = values.num2;

  const active = true;
  const emptyValue = null;
  let unknownValue;

  console.log("=== أنواع البيانات ===");
  console.log("userName:", userName, "=>", typeof userName);
  console.log("age:", age, "=>", typeof age);
  console.log("num1:", num1, "=>", typeof num1);
  console.log("num2:", num2, "=>", typeof num2);
  console.log("active:", active, "=>", typeof active);
  console.log("emptyValue:", emptyValue, "=>", typeof emptyValue, "(معلومة: typeof null تُعيد object)");
  console.log("unknownValue:", unknownValue, "=>", typeof unknownValue);

  result.classList.remove("muted");
  result.innerText =
    "تم تسجيل أنواع البيانات في Console.\n" +
    "افتح أدوات المطور (F12) ثم تبويب Console لمشاهدة النتائج.";
}

createCardBtn.addEventListener("click", createCard);
typesBtn.addEventListener("click", logDataTypes);
