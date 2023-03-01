const botonCookie = document.getElementById("cookies-advice");

if (sessionStorage.getItem("cookies") === null) {
    botonCookie.style.display = "inline";
} else {
    botonCookie.style.display = "none";
}

botonCookie.addEventListener('click', ()=>{
    botonCookie.style.display = "none";
    sessionStorage.setItem("cookies", "aceptadas");
});