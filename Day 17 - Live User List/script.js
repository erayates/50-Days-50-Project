const userContent = document.querySelector('.user-ui-content')
const userFilter = document.querySelector('.user-filter')
const userList = []

getData()

userFilter.addEventListener('input',(e) => filterData(e.target.value))

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')
    const {results} = await res.json()
    
    // Clear Results
    results.innerHTML = ''
    results.forEach(user => {
        const div = document.createElement('div')
        div.classList.add('user-ui-user')
        userList.push(div)
        div.innerHTML = ` 
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-ui-content">
            <h4 class="user-ui-user-name"><strong>${user.name.first} ${user.name.last}</strong></h4>
            <p class="user-ui-user-address">${user.location.city}, ${user.location.country}</p>
        </div>
        `
        userContent.appendChild(div)
    })
    
}

function filterData(searchTerm){
    userList.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}