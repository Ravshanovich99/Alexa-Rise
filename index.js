const toggleContainer = document.querySelector('.toggle-container');
const toggle = document.querySelector('.toggle');
const buregerMenu = document.querySelector('.burgerMenu')
const link = document.querySelectorAll('.burgerMenuItems')

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


console.log('1 - 12')
console.log('2 - 20')
console.log('3 - 48')
console.log('4 - 12')
console.log('5 - 20')


