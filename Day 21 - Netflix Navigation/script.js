
const menuContainer = document.querySelector('.menu-container')
const menuInner = document.querySelector('.menu-inner')
const menu = document.querySelector('.menu')


const menuOpen = document.querySelector('.menu-hover')
const menuClose = document.querySelector('.menu-hover-close')

const menuCloseAnimate = [
    {transform: 'translateX(0)'},
    {transform: 'translateX(-200%)'}
]

const menuOpenAnimate = [
    {transform: 'translate(-200%)'},
    {transform: 'translate(0)'}
]

menuClose.addEventListener('click',() => {
    menuContainer.animate(menuCloseAnimate,{
        duration: 1400
    })
    menuInner.animate(menuCloseAnimate,{
        duration: 1200
    })
    menu.animate(menuCloseAnimate,{
        duration: 1000
    })
    setTimeout(() => {
        menuContainer.classList.add('hidden')
        menuContainer.classList.remove('show')
    },1300)
    setTimeout(() => {
        menuOpen.classList.add('show')
    },1000)
    

})

menuOpen.addEventListener('click',() => {
    menuContainer.classList.add('show')
    menuOpen.classList.remove('show')
    menuOpen.classList.add('hidden')
    menuContainer.animate(menuOpenAnimate,{
        duration: 1000
    })
    menuInner.animate(menuOpenAnimate,{
        duration: 1200
    })
    menu.animate(menuOpenAnimate,{
        duration: 1400
    })
 
})