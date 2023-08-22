let menu = document.getElementById("menu")
let nav = document.getElementsByClassName("nav")
let scroller =document.getElementById("scroller")

nav[0].onclick= function(){

    if(menu.classList == ""){
     menu.setAttribute("class","active")
     menu.style.display="block"
    } else{
        menu.removeAttribute("class","active")
        menu.style.display="none"
    }

}
 let height = window.document.documentElement.scrollHeight - window.document.documentElement.clientHeight




let scroll = document.getElementsByClassName("scroll")[0]

window.onscroll = function(){
    let scrolltop = document.documentElement.scrollTop

    scroller.style.width = `${(scrolltop / height) * 100 }% `
    if(window.scrollY >= 500){
        scroll.style.display ="block"
     }else{
         scroll.style.display ="none"
     }
}



scroll.onclick = function(){
    window.scroll({
        top:0,
        right:0,
        behavior:"smooth"
    })
    
}