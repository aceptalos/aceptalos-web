// Actualizar año actual en el footer

document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento año por su ID
    var yearElement = document.getElementById("copyr-list");

    // Obtiene el año actual
    var currentYear = new Date().getFullYear();

    // Actualiza el contenido del elemento con el año actual
    yearElement.innerHTML = "©&nbsp;&nbsp;1996 - " + currentYear +".&nbsp;&nbsp;&nbsp;─&nbsp;&nbsp;&nbsp;Asociación Acéptalos.";
});