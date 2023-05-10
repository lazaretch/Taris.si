const header =document.querySelector("header");

window.addEventListener ("scroll", function(){
      header.classList.toggle ("sticky", this.window.scrollY > 0);
})
function updateButtonStyles() {
      const buttons = document.querySelectorAll('.button');
    
      buttons.forEach((button) => {
        if (window.innerWidth <= 768) {
          button.style.fontSize = '14px';
          button.style.padding = '8px 16px';
        } else {
          button.style.fontSize = '16px';
          button.style.padding = '10px 20px';
        }
      });
    }
    
    // Call the function initially
    updateButtonStyles();
    
    // Call the function whenever the window is resized
    window.addEventListener('resize', updateButtonStyles);