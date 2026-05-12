// Variables del HTML

const menu = document.getElementById("menu-navegacion");

const boton = document.getElementById("btn-menu");

const enlaces = document.querySelectorAll("#menu-navegacion a");

// Evento del menu desplegable para celulares

boton.addEventListener("click", () =>{
    menu.classList.toggle("activo");

});

// Evento para los enlaces del menu desplegable

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () =>{
        menu.classList.remove("activo");
    });
});