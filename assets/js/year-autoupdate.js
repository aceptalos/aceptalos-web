// Actualizar año actual en el footer

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("year-range").textContent = `1996–${currentYear}`;
});
