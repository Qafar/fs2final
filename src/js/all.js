//Sidebar slider menu
let sliderMenu = document.querySelector(".desktop-sidebar-slider-menu");

function openNav() {
    sliderMenu.style.width = "86vh";
    sliderMenu.style.right = "0"
}
  
function closeNav() {
    sliderMenu.style.right = "-86vh"
}

//scroll top

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollUpButton = document.getElementById("scrollUpButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
    console.log(document.body.scrollTop);
}

function scrollToTop() {
    const scrollTopDuration = 500; // Duration in milliseconds

    const scrollStep = -window.scrollY / (scrollTopDuration / 15);

    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}