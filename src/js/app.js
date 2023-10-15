//Sidebar slider menu
let sliderMenu = document.querySelector(".desktop-sidebar-slider-menu");

function openNav() {
    sliderMenu.style.width = "86vh";
    sliderMenu.style.right = "0"
}
  
function closeNav() {
    sliderMenu.style.right = "-86vh"
}


//Carousel slider
 
let imgNum = 1;
let autoSlideInterval; 
const slider = document.getElementById("slider"); 

function startAutoSlide() {
    autoSlideInterval = setInterval(right, 1000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function right() {
    if (imgNum != 3) {
        imgNum += 1;
        changeImg(imgNum, -1);
    } else {
        imgNum = 1;
        changeImg(imgNum, +2);
    }
}

function left() {
    if (imgNum != 1) {
        imgNum -= 1;
        changeImg(imgNum, +1);
    } else {
        imgNum = 3;
        changeImg(imgNum, -2);
    }
    AOS.refresh(); 
    AOS.init();
}


function changeImg(value, count) {
    
    document.getElementById(`img${value + count}`).style.opacity = "0";

    let element = document.querySelectorAll('.aos-init');
    element.forEach(e => {
        e.classList.remove('aos-animate');
    });

    document.getElementById(`img${value}`).style.opacity = "1";
    document.getElementById(`circle${value + count}`).style.background = "transparent";
    document.getElementById(`circle${value}`).style.background = "white";

    AOS.init();
}

startAutoSlide();


slider.addEventListener("mouseover", stopAutoSlide);
slider.addEventListener("mouseout", startAutoSlide);
AOS.init();

