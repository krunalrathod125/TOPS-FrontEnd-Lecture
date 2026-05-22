// Store movie data in local storage

if (!localStorage.getItem("movies")) {

    const movies = [
        // Marvel Movies
        {
            category: "Marvel",
            movies: [
                "Iron Man",
                "Avengers Endgame",
                "Spider Man No Way Home",
                "Doctor Strange",
                "Black Panther",
                "Thor Ragnarok",
                "Captain America",
                "Hulk",
                "Ant Man"
            ]
        },

        // South Movies
        {
            category: "South",
            movies: [
                "Pushpa",
                "KGF",
                "RRR",
                "Salaar",
                "Kantara",
                "Bahubali",
                "Leo",
                "Vikram",
                "Master"
            ]
        },

        // Bollywood
        {
            category: "Bollywood",
            movies: [
                "3 Idiots",
                "Dangal",
                "Pathaan",
                "Jawan",
                "PK",
                "War",
                "Animal",
                "Bhool Bhulaiyaa",
                "Tiger 3"
            ]
        },

        // Hollywood
        {
            category: "Hollywood",
            movies: [
                "Avatar",
                "Titanic",
                "Inception",
                "Interstellar",
                "Fast and Furious",
                "John Wick",
                "The Batman",
                "Joker",
                "Mission Impossible"
            ]
        }
    ];

    localStorage.setItem("movies", JSON.stringify(movies));
}

// Get data from local storage
const movieData = JSON.parse(localStorage.getItem("movies"));

const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

// Function to display movies
function displayMovies(filteredMovies) {

    movieList.innerHTML = "";

    if (filteredMovies.length === 0) {
        movieList.innerHTML =
            `<p class="no-result">No movie found</p>`;
        return;
    }

    filteredMovies.forEach(movie => {
        movieList.innerHTML += `
            <div class="movie-card">
                <h3>${movie.name}</h3>
                <p class="category">
                    Category: ${movie.category}
                </p>
            </div>
        `;
    });
}

// Search movie
searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase();

    let result = [];

    movieData.forEach(category => {

        category.movies.forEach(movie => {

            if (
                movie.toLowerCase()
                    .includes(searchText)
            ) {
                result.push({
                    name: movie,
                    category:
                        category.category
                });
            }
        });
    });

    displayMovies(result);
});

// Show all movies initially
let allMovies = [];

movieData.forEach(category => {
    category.movies.forEach(movie => {
        allMovies.push({
            name: movie,
            category: category.movie
        });
    });
});

displayMovies(allMovies);