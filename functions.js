//Creador de cards para peliculas

function card_creator(movie){
    let card = ``
    if (movie.favourited === true){
        card = `  
        <article class="flex-shrink-0 w-[300px] border-gray-200 rounded-lg shadow dark:bg-[#222222] dark:border-[#222222] transition ease-in-out  hover:transform hover:scale-110">
            <img class="rounded-t-lg" src="https://moviestack.onrender.com/static/${movie.image}" alt="" >
            <h5 class="mb-1 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${movie.title}</h5>
            <div class = "h-[175px] text-wrap overflow-auto m-1 ">
                <p class="font-normal text-gray-700 dark:text-gray-400 text-justify m-3">${movie.overview}</p>
            </div>
            <div class="flex flex-row content-center items-center place-content-evenly gap-8">
            <svg id="${movie.id}" class="favbtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>
    
          <a type="button" href="movie.html?id=${movie.id}" id="moreInfo" class="bg-[#5b21b6] hover:bg-[#c084fc] text-white font-bold py-2 px-4 rounded-full mt-4 mr-7 mb-7">More info</a>
            </div>
            </article>
`}
    else{
        card = `  
        <article class="flex-shrink-0 w-[300px] border-gray-200 rounded-lg shadow dark:bg-[#222222] dark:border-[#222222] transition ease-in-out  hover:transform hover:scale-110">
            <img class="rounded-t-lg" src="https://moviestack.onrender.com/static/${movie.image}" alt="" >
            <h5 class="mb-1 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${movie.title}</h5>
            <div class = "h-[175px] text-wrap overflow-auto m-1 ">
                <p class="font-normal text-gray-700 dark:text-gray-400 text-justify m-3">${movie.overview}</p>
            </div>
            <div class="flex flex-row content-center items-center place-content-evenly gap-8">
            <svg id="${movie.id}" class="favbtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>
    
          <a type="button" href="movie.html?id=${movie.id}" id="moreInfo" class="bg-[#5b21b6] hover:bg-[#c084fc] text-white font-bold py-2 px-4 rounded-full mt-4 mr-7 mb-7">More info</a>
            </div>
            </article>
    
`
    }
    return card
}

//Añadir cards a un container

export function add_card(array, container){
    for (const movie of array){
        const card = card_creator(movie);
        container.innerHTML += card
    }    
}


//Borrar container 
export  function clean_board(container){
    container.innerHTML = ""
}

export function message(){
    console.log("horray!")
}
