/*
  __  __  ______      _______ ______ 
 |  \/  |/ __ \ \    / |_   _|  ____|
 | \  / | |  | \ \  / /  | | | |__   
 | |\/| | |  | |\ \/ /   | | |  __|  
 | |  | | |__| | \  /   _| |_| |____ 
 |_|  |_|\____/   \/   |_____|______|
                                     
*/
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id')
const container_top = document.querySelector('#container_top')
const container_bottom = document.querySelector('#container_bottom')

let movie_catalog = []

const init = {
    method: 'GET',
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

const add_movies = fetch('https://moviestack.onrender.com/api/movies', init).then(response => response.json()).then(data =>{
    console.log(data.movies)
    movie_catalog = data.movies
    movie = movie_catalog.find(movie => movie.id === movieId)
    const img_content = `
    <img src="https://moviestack.onrender.com/static/${movie.image}" alt ="movie_poster" class="rounded-md">
    `
    
const info_content1 = `
    <div>
        <h1 class="text-2xl font-bold text-white">${movie.title}<h1>
        <p class="text-white">${movie.overview}<p>
    </div>
    `
    
const info_content2 = `
    <table class="text-white border-collapse border border-slate-500">
    <tr class="w-[600px]">
        <th class="  text-white uppercase w-1/2 text-center border-collapse border border-slate-500">Original language
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.original_language}</td>
    </tr>
    <tr class="w-[500px]">
        <th class="   text-white uppercase w-1/2 text-center border-collapse border border-slate-500">
            Release date
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.release_date}</td>
    </tr>
    <tr class="w-[500px]">
        <th class="   text-white uppercase w-1/2 text-center border-collapse border border-slate-500">
            Runtime
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.runtime}</td>
    </tr>
    <tr class="w-[500px]">
        <th class="   text-white uppercase w-1/2 text-center border-collapse border border-slate-500">
            Status
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.status}</td>
    </tr>
    </table>
    `
    
const info_content3 = `
    <table class="   text-white border-collapse border border-slate-500">
    <tr class="w-[500px]">
        <th class="   text-white uppercase w-1/2 text-center border-collapse border border-slate-500">Vote average
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.vote_average}</td>
    </tr>
    <tr class="w-[500px]">
        <th class="   text-white uppercase w-1/2 text-center border-collapse border border-slate-500">
            Budget
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.budget} $</td>
    </tr>
    <tr class="w-[500px]">
        <th class="   text-white uppercase w-1/2 text-center border-collapse border border-slate-500">
            Revenue
        </th>
        <td class="   w-1/2 text-center border-collapse border border-slate-500">${movie.revenue} $</td>
    </tr>
    </table>
    `
    container_top.innerHTML += img_content + info_content1 + info_content2 + info_content3
} ).catch(err => console.log(err))











