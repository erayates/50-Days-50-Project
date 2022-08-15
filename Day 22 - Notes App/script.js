document.addEventListener('DOMContentLoaded',() => {
    const deleteBtn = document.getElementsByClassName('btn__delete')
    var editBtn = document.getElementsByClassName('btn__edit')
    const addBtn = document.querySelector('#btn__add')

    const container = document.querySelector('.container')
    
    
    getCardsWithLS()
    editAndDeleteButtons()


    addBtn.addEventListener('click',()=>{
        createCard()
        console.log(addBtn)
    })
    
    
    var textAreaWritingMode = true
    function editAndDeleteButtons(){
        for(let item of editBtn){
            item.addEventListener('click',(e) => {
                textArea = e.target.parentElement.parentElement.lastElementChild
                noteCard = e.target.parentElement.parentElement
                if(!textAreaWritingMode){
                    textArea.setAttribute('readonly','')
                    setStyles(noteCard,textArea)
                    textAreaWritingMode = true
                    if(textArea.value != null){
                        window.localStorage.setItem(`${noteCard.id}`,textArea.value)
                        alert('Your note is saved!')
                    }
                
                }else{
                    textArea.removeAttribute('readonly')
                    setStyles(noteCard,textArea)
                    textAreaWritingMode = false
                }
            })}      
        
        for(let item of deleteBtn){
            item.addEventListener('click',(e)=>{
                const noteCard = e.target.parentElement.parentElement
                window.localStorage.removeItem(`${noteCard.id}`)
                noteCard.remove()
            })} 
    }
    
    
    const setStyles = (noteCard,textArea) => {
        if(!textAreaWritingMode){
            textArea.style.fontSize = '1rem';
            textArea.style.fontWeight = 'bold'
            noteCard.style.height='400px'
            noteCard.style.width = '350px'
        }else{
            textArea.style.fontSize = '1.2rem'
            textArea.style.fontWeight = 'normal'
            noteCard.style.height='420px'
            noteCard.style.width = '370px'
        }
    }
    
    
    function getCardsWithLS(){
        const cardNumbers = window.localStorage.length
        for(i=0;i<cardNumbers;i++){
            const cardID = window.localStorage.key(`${i}`)
            createCardFromLS(cardID)
        }
        
    }
    
    function createCardFromLS(cardID){
        const card = document.createElement('div')
        const cardNav = document.createElement('div')
        const textArea = document.createElement('textarea')
        card.className = 'note__card'
        cardNav.className = 'note__navigation'
        cardNav.innerHTML = `
            <i class="fa-solid fa-pen-to-square btn__edit"></i>
            <i class="fa-solid fa-trash-can btn__delete"></i>
        `
        card.id = cardID
      
        textArea.className = 'note__input'
        textArea.value = window.localStorage.getItem(`${cardID}`)
    
        card.appendChild(cardNav)
        card.appendChild(textArea)
        
        container.append(card)
       
    
    }
    
    
    function createCard(){
        const card = document.createElement('div')
        const cardNav = document.createElement('div')
        const textArea = document.createElement('textarea')
        var randomID = Math.floor(Math.random()*1000)
        card.className = 'note__card'
        cardNav.className = 'note__navigation'
        cardNav.innerHTML = `
            <i class="fa-solid fa-pen-to-square btn__edit"></i>
            <i class="fa-solid fa-trash-can btn__delete"></i>
        `
        textArea.className = 'note__input'
    
        card.appendChild(cardNav)
        card.appendChild(textArea)
        card.id = randomID
        container.append(card)
        editAndDeleteButtons()
    
    }
    /* When user press enter in the textarea
    
    for(let item of textAreas){
        item.addEventListener('keypress',(e)=>{
            
            if(e.key == 'Enter'){
                console.log(e.key)
                e.target.removeAttribute('readonly',)
                e.target.style.background = '#dbdbdb'
               
                textAreaReadOnly = true
            }
            if(textAreaReadOnly){
                e.target.setAttribute('readonly','')
             
            }
        })
        textAreaReadOnly = true
    } */
    
    
    
    
})

