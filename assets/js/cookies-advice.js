const botonCookie = document.getElementById("button-cookies");
const contenedorCookie = document.getElementById("cookies-advice");

if (sessionStorage.getItem("cookies") === null) {
    contenedorCookie.style.display = "inline";
} else {
    contenedorCookie.style.display = "none";
}

botonCookie.addEventListener('click', ()=>{
    contenedorCookie.style.display = "none";
    sessionStorage.setItem("cookies", "aceptadas");
});
