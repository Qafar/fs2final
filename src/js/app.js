let sliderMenu = document.querySelector(".desktop-sidebar-slider-menu");

function openNav() {
    sliderMenu.style.width = "86vh";
    sliderMenu.style.right = "0"
  }
  
  function closeNav() {
    sliderMenu.style.right = "-86vh"
  }