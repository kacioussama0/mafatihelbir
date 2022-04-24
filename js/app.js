


window.onload = () => {
  
}



// Burger Menu




window.onload = ()=> {

    // let audio = new Audio('../imgs/bg.mp3');
    // audio.play(); 

    let toggle = document.querySelector('header nav div.links span.toggle');

    let ul = document.getElementById('navLinks');
    

toggle.onclick = () => {

   if(ul.style.display == 'flex') {
        ul.style.display = 'none';
   }
   else {
    ul.style.display = 'flex';
   }
 
}


}

let section = document.querySelector(".our-works");
let landing = document.querySelector('.landing');
let toTop = document.querySelector('.to-top'); 
window.onscroll = function () {
if (window.scrollY >= section.offsetTop) {

    toTop.style.opacity = 1;
    let ul = document.getElementById('navLinks');

    if(ul.style.display == 'flex') {
        ul.style.display = 'none';
   }

}

if(window.scrollY <= landing.offsetTop) toTop.style.opacity = 0;

}

