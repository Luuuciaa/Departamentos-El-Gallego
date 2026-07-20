const toggle = document.querySelector(".nav_toggle");
const menu = document.querySelector(".nav_items");

// Agregamos el evento al botón hamburguesa
//Activa y desactiva el menú cuando hacés clic en el botón hamburguesa
toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    toggle.classList.toggle("active");
});