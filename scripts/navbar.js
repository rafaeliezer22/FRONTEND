// script.js
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert("Producto agregado al carrito");
//     });
// });


const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
