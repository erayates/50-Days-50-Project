const choices = document.querySelectorAll('.choice')
const choiceContainer = document.querySelector('.card-choice')
const sendBtn =  document.querySelector('.btn')
const card = document.querySelector('.feedback-card')
let selectedRating = 'Satisfied'

choiceContainer.addEventListener

choiceContainer.addEventListener('click',(e) => {
    if(e.target.parentNode.classList.contains('choice') && e.target.nextElementSibling){
        removeActiveClass()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }else if(e.target.parentNode.classList.contains('choice') && e.target.previousSibling && e.target.previousElementSibling.nodeName === 'I'){
        removeActiveClass()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})


sendBtn.addEventListener('click',(e) => {
    card.innerHTML = `
        <i class="uil uil-heart"></i>
        <strong>Thanks for your rating!<strong>
        <br>
        <strong>Your feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to enhance our project.</p>
    `
})

function removeActiveClass(){
    for(let i=0; i<choices.length;i++){
        choices[i].classList.remove('active')
    }
}
