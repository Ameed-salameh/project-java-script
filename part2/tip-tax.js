console.log("تم تحميل صفحة Tip & Tax Calculator.");

const APP = "BillHelper";
let lastRunMode = "INIT";
var legacy = "legacy-var-flag";

const billInput = document.getElementById("billInput");
const taxInput = document.getElementById("taxInput");
const tipInput = document.getElementById("tipInput");
const codeInput = document.getElementById("codeInput");
const calcBtn = document.getElementById("calcBtn");
const typesBtn = document.getElementById("typesBtn");
const out = document.getElementById("out");

function readValues() {
  const billRaw = billInput.value.trim();
  const taxRaw = taxInput.value.trim();
  const tipRaw = tipInput.value.trim();
  const code = codeInput.value.trim();

  const bill = Number(billRaw);
  const taxP = Number(taxRaw);
  const tipP = Number(tipRaw);

  return {
    billRaw: billRaw,
    taxRaw: taxRaw,
    tipRaw: tipRaw,
    code: code,
    bill: bill,
    taxP: taxP,
    tipP: tipP,
  };
}

function isValidInput(bill, taxP, tipP) {
  const valid =
    Number.isFinite(bill) && bill > 0 &&
    Number.isFinite(taxP) && taxP >= 0 &&
    Number.isFinite(tipP) && tipP >= 0;

  return valid;
}

function calculateBill() {
  const values = readValues();
  const bill = values.bill;
  const taxP = values.taxP;
  const tipP = values.tipP;
  const code = values.code;

  if (!isValidInput(bill, taxP, tipP)) {
    out.innerHTML = '<span class="error">مدخلات غير صالحة. تأكد من قيمة الفاتورة والنسب.</span>';
    return;
  }

  const taxAmt = bill * (taxP / 100);
  const tipAmt = bill * (tipP / 100);
  let total = bill + taxAmt + tipAmt;

  let reward = 1;
  reward += 1;
  reward *= 2;
  reward **= 1;

  const baseLine = "Base=" + bill.toFixed(2) + ", Tax=" + taxAmt.toFixed(2) + ", Tip=" + tipAmt.toFixed(2);

  let discount = 0;
  const upperCode = code.toUpperCase();
  const isVIP = upperCode === "VIP";
  const isStudent = upperCode === "STUDENT";

  if (isVIP && (total > 200 || (bill > 150 && tipP >= 10))) {
    discount = total * 0.10;
  }

  if (isStudent && total >= 50) {
    discount += 10;
  }

  total -= discount;

  console.log("== Types ==");
  console.log(typeof bill, typeof taxP, typeof tipP, typeof code);

  out.classList.remove("muted");
  out.innerText =
    baseLine + "\n" +
    "Discount=" + discount.toFixed(2) + "\n" +
    "Total=" + total.toFixed(2) + "\n" +
    "Reward=" + reward + "\n" +
    "Code=" + (code || "-") + " | VIP: " + isVIP + " | STUDENT: " + isStudent;

  lastRunMode = "CALC";
  console.log({ APP: APP, lastRunMode: lastRunMode, legacy: legacy });
}

function logTypes() {
  const values = readValues();

  console.log("== Input Types ==");
  console.log("billRaw:", values.billRaw, "=>", typeof values.billRaw);
  console.log("taxRaw:", values.taxRaw, "=>", typeof values.taxRaw);
  console.log("tipRaw:", values.tipRaw, "=>", typeof values.tipRaw);
  console.log("code:", values.code, "=>", typeof values.code);
  console.log("bill:", values.bill, "=>", typeof values.bill);
  console.log("taxP:", values.taxP, "=>", typeof values.taxP);
  console.log("tipP:", values.tipP, "=>", typeof values.tipP);

  out.classList.remove("muted");
  out.innerText = "تم تسجيل أنواع البيانات في Console.";
}

calcBtn.addEventListener("click", calculateBill);
typesBtn.addEventListener("click", logTypes);
