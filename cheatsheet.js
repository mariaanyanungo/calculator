/* ================================
JAVASCRIPT CHEAT SHEET (BASICS)
================================ */

/* 1. VARIABLES */
let name = "John";     // can change
const pi = 3.14;       // cannot change

/* 2. DATA TYPES */
let text = "hello";    // string
let number = 5;        // number
let isTrue = true;     // boolean

/* 3. OPERATORS */
let x = 5;
x += 2;   // x = x + 2 → 7

/* 4. SELECTING HTML ELEMENTS */
const el1 = document.getElementById("id");
const el2 = document.querySelector(".class");
const buttons = document.querySelectorAll("button");

/* 5. CHANGING CONTENT */
el1.innerText = "Hello";
el1.innerHTML = "<b>Hello</b>";

/* 6. EVENTS */
buttons.forEach(btn => {
btn.addEventListener("click", () => {
console.log("Clicked!");
});
});

/* 7. FUNCTIONS */
function sayHello() {
console.log("Hello");
}

function add(a, b) {
return a + b;
}

/* 8. CONDITIONALS */
if (x > 5) {
console.log("Big");
} else {
console.log("Small");
}

/* 9. LOOPS */
for (let i = 0; i < 5; i++) {
console.log(i);
}

/* 10. ARRAYS */
let numbers = [1, 2, 3];
numbers.push(4);
numbers.pop();

/* 11. STRINGS */
let input = "123";
input += "4";   // "1234"

/* 12. ERROR HANDLING */
try {
let result = eval("2+2");
} catch (error) {
console.log("Error!");
}
