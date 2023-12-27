const showMenu= (toggLeId, navId)=> {
    const toggle = document.getElementById(toggLeId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll(".nav__links");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollheader() {
    const nav = document.getElementById('header');

    if(this.scrollY>=200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
    
}

window.addEventListener('scroll', scrollheader);

function scrollTop() {
    const scrollTop= document.getElementById('scroll-top');

    if(this.scrollY>=560){
        scrollTop.classList.add('scroll-top')
    }else{
        scrollTop.classList.remove('scroll-top')
    }
    
}

window.addEventListener('scroll', scrollTop);

// DARK light theme
const themeButton = document.getElementById("theme-button");
 const darkTheme = "dark-theme";
  themeButton.addEventListener("click", ()=>{ document.body.classList.toggle(darkTheme); })


 