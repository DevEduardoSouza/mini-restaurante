const btnMenu = document.querySelector(".menuMobile");
const menu = document.querySelector(".menu nav ul");

btnMenu.addEventListener("click", () =>{
    if(menu.style.display === "flex")
        menu.style.display = "none"
    else
        menu.style.display = "flex"
});





