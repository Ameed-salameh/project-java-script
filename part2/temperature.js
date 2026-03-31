console.log("تم تحميل صفحة Temperature Converter.");

const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const logBtn = document.getElementById("logBtn");
const result = document.getElementById("result");

function parseTemperature() {
  var rawValue = tempInput.value.trim();
  const unit = unitSelect.value;
  const parsed = Number(rawValue);

  return {
    rawValue: rawValue,
    unit: unit,
    parsed: parsed,
  };
}

function inputGuard(rawValue, parsed, unit) {
  const hasValue = rawValue !== "";
  const isNumeric = Number.isFinite(parsed);
  const validUnit = unit === "C" || unit === "F";

  if (!hasValue) {
    result.innerHTML = '<span class="error">الرجاء إدخال درجة حرارة.</span>';
    return false;
  }

  if (!isNumeric) {
    result.innerHTML = '<span class="error">القيمة يجب أن تكون رقمًا صالحًا.</span>';
    return false;
  }

  if (!validUnit) {
    result.innerHTML = '<span class="error">نوع الدرجة غير صحيح.</span>';
    return false;
  }

  return true;
}

function convertTemperature() {
  const data = parseTemperature();
  const rawValue = data.rawValue;
  const inputUnit = data.unit;
  const tempValue = data.parsed;

  if (!inputGuard(rawValue, tempValue, inputUnit)) {
    return;
  }

  const toFahrenheit = (tempValue * 9) / 5 + 32;
  const toCelsius = ((tempValue - 32) * 5) / 9;

  let converted = 0;
  let outputUnit = "";

  if (inputUnit === "C") {
    converted = toFahrenheit;
    outputUnit = "F";
  } else {
    converted = toCelsius;
    outputUnit = "C";
  }

  let checks = 0;
  checks += 1;
  checks += 1;

  const isFreezingC = inputUnit === "C" && tempValue <= 0;
  const isBoilingC = inputUnit === "C" && tempValue >= 100;
  const isHotInF = inputUnit === "F" && tempValue > 86;
  const equalsBodyTempApprox = converted >= 36.5 && converted <= 37.5;

  const extreme = isBoilingC || isHotInF;
  const normalRange = !extreme && tempValue > -50;

  const title = "نتيجة التحويل";
  const line1 = "القيمة المدخلة: " + tempValue + "°" + inputUnit;
  const line2 = "القيمة المحوّلة: " + converted.toFixed(2) + "°" + outputUnit;

  result.classList.remove("muted");
  result.innerText =
    title + "\n" +
    line1 + "\n" +
    line2 + "\n\n" +
    "التحقق والمنطق:" + "\n" +
    "isFreezingC => " + isFreezingC + "\n" +
    "isBoilingC => " + isBoilingC + "\n" +
    "isHotInF => " + isHotInF + "\n" +
    "equalsBodyTempApprox => " + equalsBodyTempApprox + "\n" +
    "extreme => " + extreme + "\n" +
    "normalRange => " + normalRange + "\n" +
    "checks (assignment operators) => " + checks;

  console.log("=== Temperature Converter ===");
  console.log("input raw:", rawValue, "typeof:", typeof rawValue);
  console.log("input numeric:", tempValue, "typeof:", typeof tempValue);
  console.log("inputUnit:", inputUnit, "outputUnit:", outputUnit);
  console.log("converted:", converted.toFixed(2));
  console.log("isFreezingC:", isFreezingC, "isBoilingC:", isBoilingC, "isHotInF:", isHotInF);
  console.log("equalsBodyTempApprox:", equalsBodyTempApprox, "extreme:", extreme, "normalRange:", normalRange);
}

function logTypesOnly() {
  const data = parseTemperature();
  const rawValue = data.rawValue;
  const inputUnit = data.unit;
  const tempValue = data.parsed;
  const hasInput = rawValue !== "";

  console.log("=== Input Guard / Data Types ===");
  console.log("rawValue:", rawValue, "=>", typeof rawValue);
  console.log("tempValue:", tempValue, "=>", typeof tempValue);
  console.log("inputUnit:", inputUnit, "=>", typeof inputUnit);
  console.log("hasInput:", hasInput, "=>", typeof hasInput);

  result.classList.remove("muted");
  result.innerText = "تم تسجيل أنواع البيانات وحالة الإدخال في Console.";
}

convertBtn.addEventListener("click", convertTemperature);
logBtn.addEventListener("click", logTypesOnly);
