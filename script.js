const toggleContainer = document.querySelector('.toggle-container');
const toggle = document.querySelector('.toggle');
const buregerMenu = document.querySelector('.burgerMenu')
const link = document.querySelectorAll('.burgerMenuItems')
console.log(buregerMenu)
console.log(link)

link.forEach(elem => elem.addEventListener('click', () => {
    toggleContainer.classList.toggle('open')
    buregerMenu.style.transform = "scale(0)"
    toggleContainer.style.position = "static"

}))

toggleContainer.addEventListener('click', () => {
    toggleContainer.classList.toggle('open')
    if(toggleContainer.classList.contains('open')) {
        buregerMenu.style.transform = "scale(1)"
        toggleContainer.style.position = "fixed"
    }
    else {
        buregerMenu.style.transform = "scale(0)"
        toggleContainer.style.position = "static"
    }
});

