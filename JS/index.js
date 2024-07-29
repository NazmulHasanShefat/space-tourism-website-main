let allmenus = document.querySelector(".nav-right");
let menu_togger = document.querySelector(".menu-icon");
let close_btn = document.querySelector(".close-btn");
menu_togger.addEventListener("click",()=>{
    allmenus.classList.toggle("active_menu");
})
close_btn.addEventListener("click",()=>{
    allmenus.classList.toggle("active_menu");
})