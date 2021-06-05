const slider = document.querySelectorAll('.slider')
const imgSelect = document.querySelectorAll('.img-select')

let counter = 1

slideTurn(counter)

function addSlide(i){
    counter +=i;
    slideTurn(counter)
}

function selectCurrent(i){
    counter = i;
    slideTurn(counter)
}

function slideTurn(x){
    let i;

    for(i=0 ; i<slider.length ; i++){
        slider[i].style.display = 'none';
    }

    for(i=0 ; i<imgSelect.length;i++){
        imgSelect[i].classList.remove('active');
    }

    if(x>slider.length){
       counter = 1
    }

    else if (x<1){
        counter = slider.length
    }

    slider[counter - 1].style.display = "block";
    imgSelect[counter - 1].classList.add('active');
}


// nav-mobile-menu

const hamburger = document.querySelector('.hamburger');
const x = document.querySelector('.x');
const nav = document.querySelector('.nav-mobile');
const page = document.querySelector('.page-wrap')
const mobileMenu = document.querySelector('.mobile-menu')
const logo = document.querySelector('.logo-mobile')
const navItems = document.querySelectorAll('.mobile-main-nav li')
const home = document.getElementById('home')




function showMenu(){
        x.style.visibility = 'visible';
        x.classList.add('close');
        hamburger.classList.remove('show')
        hamburger.style.visibility = 'hidden';
        nav.style.visibility = 'visible';
        page.style.opacity = '0.4'
        mobileMenu.classList.add('close')
        mobileMenu.style.zIndex='1'
        logo.style.visibility = 'visible'
        mobileMenu.style.display = 'block'
        
}

function closeMenu(){
        hamburger.style.visibility = 'visible';
        hamburger.classList.add('show');
        x.classList.remove('close')
        x.style.visibility = 'hidden'
        nav.style.visibility = 'hidden';
        page.style.opacity = '1'
        mobileMenu.style.zIndex='0'
        logo.style.visibility = 'hidden'
        mobileMenu.classList.remove('close')
        mobileMenu.style.display = 'none'
}

navItems.forEach((curr)=>{
    curr.addEventListener("click",function(){
        nav.style.visibility = 'hidden';
        x.style.visibility = "hidden"
        page.style.opacity = '1'
        logo.style.visibility = 'hidden'
        hamburger.style.visibility = 'visible';
        mobileMenu.style.zIndex='0'
        mobileMenu.style.display = 'none'
    })

})
