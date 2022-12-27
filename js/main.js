const burgerMenu = document.getElementById('burgerMenu')
const headerMenu = document.getElementById('headerMenu')
const bodyOverlay = document.querySelector('body')

const headerDropdown = document.querySelectorAll('#headerDropdown')

burgerMenu.addEventListener('click', (e) => {
    if (e.target.src) {
        e.target.src = e.target.src.includes("images/icon-close-menu.svg") ? "images/icon-menu.svg" : "images/icon-close-menu.svg"
        headerMenu.classList.toggle('visible')
        bodyOverlay.classList.toggle('overlay')
    }
})

headerDropdown.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target)
        dropDownId = e.target.getAttribute('dropdownTo')
        e.target.classList.toggle('active')
        document.getElementById(dropDownId).classList.toggle('visible')
})
})

