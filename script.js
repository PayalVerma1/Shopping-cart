const add1 = document.querySelector("#one");
const add2 = document.querySelector("#two");
const add3 = document.querySelector("#three");
const cart = document.querySelector("#checkout");
const container_cart = document.querySelector("#container_cartecho ");
let item1 = 0;
let item2 = 0;
let item3 = 0;

add1.addEventListener("click", function () {
    item1 = item1 + 1;
    localStorage.setItem('1', 'Product1');
});
add2.addEventListener("click", function () {
    item2 = item2 + 1;
    localStorage.setItem('11', 'Product2');
});
add3.addEventListener("click", function () {
    item3 = item3 + 1;
    localStorage.setItem('111', 'Product3');
});
cart.addEventListener("click", function () {
    let products = item1 + item2 + item3;
    localStorage.setItem("products", item1 + item2 + item3);
    let Total = 10 * item1 + 20 * item2 + 30 * item3;
    localStorage.setItem("Payable amount", Total);
});

// Below written code is wrong because we can't access unique elements of cart.html which are not present in index.html here. That's why we make new cart.js

// container_cart.addEventListener("click", function () {
//     const value = localStorage.getItem("products");
//     console.log(value);
// });
