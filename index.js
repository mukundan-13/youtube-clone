var menu=document.querySelector(".ham")
var side=document.querySelector(".sidebar")
var maincontainer=document.querySelector(".maincontainer")
menu.onclick=function(){
    side.classList.toggle("smaller-side")
    maincontainer.classList.toggle("large-main")
}