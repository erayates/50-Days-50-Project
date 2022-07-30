const APIURL = "https://api.github.com/users/"
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    }catch(err){
        if(err.response.status == 404){
            createErrorCard('User was not found.')
        }
    }
 
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    }catch(err){
        console.log(err)
    }
}


form.addEventListener('submit',(e) => {
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(user)
        search.value = ""
    }

})

function createUserCard(data){
    const profileCard = `  <div class="card">
    <div>
        <img src="${data.avatar_url}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p>${data.bio}</p>
        <ul>
            <li>${data.followers} <strong>followers</strong></li>
            <li>${data.following} <strong>following</strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">
         
        </div>
    </div>
</div>`
    main.innerHTML = profileCard
}

function createErrorCard(msg) {
    const errorCard = `<div class="card">
        <h1>${msg}</h1>
</div>`
main.innerHTML = errorCard
}


function addReposToCard(repos){
    const reposEl = document.getElementById('repos')
    repos
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repos')
            repoEl.href= repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name
            reposEl.appendChild(repoEl)
        })
}