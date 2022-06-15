const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const search = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''
    const container = document.createElement('div')
    container.classList.add('container')
    main.appendChild(container)
    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview } = movie
        
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie--card')
        movieEl.innerHTML = `    
            <div class="movie--card--img">
                    <img src="${IMG_PATH + poster_path}" alt="${title}">
            </div>
            <div class="movie--card--text">
                <h5>${title}</h5>
                <div class="movie--card--imdb">
                        <p>${vote_average}</p>
                </div>
            </div> 
            <div class="overview">
                <h3>Overview<h3>
                <p>${overview}</p>
            </div> 
        `
        container.appendChild(movieEl)
    })
}

searchBtn.addEventListener('click',(e)=> {
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    }else{
        window.location.reload()
    }
})