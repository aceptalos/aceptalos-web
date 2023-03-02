const botonCookie = document.getElementById("button-cookies");

if (sessionStorage.getItem("cookies") === null) {
    botonCookie.style.display = "inline";
} else {
    document.getElementById("cookies-advice").style.display = "none";
}

botonCookie.addEventListener('click', ()=>{
    document.getElementById("cookies-advice").style.display = "none";
    sessionStorage.setItem("cookies", "aceptadas");
});
