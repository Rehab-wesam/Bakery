const stickyNav=document.querySelector(".nav-bar")
document.addEventListener("scroll" ,() =>{
if(window.scrollY >36){
    stickyNav.classList.add("sticky")
}else{
    stickyNav.classList.remove("sticky")
}

})