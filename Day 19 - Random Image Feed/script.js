const btn = document.querySelector('.btn')
const input = document.querySelector('#input')
const imgContainer = document.querySelector('.image-container')
const unsplashURL = 'http://source.unsplash.com/random/'


btn.addEventListener('click',()=>{
    imgContainer.innerHTML = ''
    for(let i = 0; i < input.value; i++){
        const newImage = createImage()
        imgContainer.appendChild(newImage)
    }
})


const createImage = () => {
    const shadow = getRandomShadow()
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    img.setAttribute('width','300px')
    img.setAttribute('heigth','300px')
    //axios('http://source.unsplash.com/random/300x300').then(res => img.src = `${res.request.responseURL}`)

    img.classList.add(shadow)
    return img
}

const getRandomShadow = () => {
    const rand = Math.floor(Math.random()*4) + 1
    if(rand == 1){return 'shadow-1'}
    else if(rand == 2){return 'shadow-2'}
    else if(rand == 3){return 'shadow-3'}
    else{return 'shadow-4'} 
}

const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNr()}`
}

const getRandomNr = () => {
    return Math.floor(Math.random()*10)+300
}