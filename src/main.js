const menuIcon = document.getElementById('menu-icon')
const sideBar = document.getElementById('sidebar')
menuIcon.addEventListener('click',()=> {
    sideBar.style.transitionDuration = "0.5s" ;
    sideBar.style.transform = "translatex(0)" ;
} )
const closeIcon = document.getElementById('close-icon')
closeIcon.addEventListener('click',()=> {
    sideBar.style.transform = "translatex(-100%)" ;
} )
