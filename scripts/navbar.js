document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Cierra el menú cuando se hace clic en cualquier otro lugar de la página
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove("active");
        }
    });
});
