// Before Values:
const beforeNumber = 42;

const beforeString = "Hello, World!";

const beforeArray = [1, 2, 3, 4, 5];

const beforeObject = {
  Car: "Toyota",
  Speed: "120km/h",
  Location: "Alberta",
};

// Modifications:
let afterIncrement = beforeNumber + 2;

let afterToString = beforeNumber.toString();

let afterStringLength = beforeString.length;

let afterSubstring = beforeString.substring(0, 5);

let afterPush = beforeArray.push("6");

let afterPop = beforeArray.pop();

let afterObjectValues = Object.values(beforeObject);

let afterObjectKeys = Object.keys(beforeObject);

// Putting the values into the HTML:
document.getElementById("beforeNumber").innerText = beforeNumber;

document.getElementById("beforeString").innerText = beforeString;

document.getElementById("beforeArray").innerText = JSON.stringify(beforeArray);

document.getElementById("beforeObjectValues").innerText =
  JSON.stringify(afterObjectValues);
document.getElementById("beforeObjectKeys").innerText =
  JSON.stringify(afterObjectKeys);

// After Values:
document.getElementById("afterIncrement").innerText = afterIncrement;
document.getElementById("afterToString").innerText = afterToString;

document.getElementById("afterStringLength").innerText = afterStringLength;
document.getElementById("afterSubstring").innerText = afterSubstring;

document.getElementById("afterPush").innerText = afterPush;
document.getElementById("afterPop").innerText = afterPop;

document.getElementById("afterObjectValues").innerText =
  JSON.stringify(afterObjectValues);
document.getElementById("afterObjectKeys").innerText =
  JSON.stringify(afterObjectKeys);
