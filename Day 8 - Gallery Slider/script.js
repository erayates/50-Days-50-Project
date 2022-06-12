const body = document.body
const images = document.querySelectorAll('img')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let activeImg = 0
prevBtn.addEventListener('click',() => {
    activeImg++
    if(activeImg > images.length - 1) activeImg = 0
    setBgToBody()
    setActiveSlide()
})

nextBtn.addEventListener('click',() => {
    activeImg--
    if(activeImg < 0) activeImg = images.length-1
    setBgToBody()
    setActiveSlide()
})

function setBgToBody(){
    body.setAttribute("style", "background-image: url("+images[activeImg].src+");");
}

function setActiveSlide(){
    images.forEach((slide) => slide.classList.remove('active'))
    images[activeImg].classList.add('active')
}