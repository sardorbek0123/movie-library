import {createStore} from "vuex";
import movies from "@/data/movies.json"

export const store = createStore({
    state: {
        movies: movies,
        favoriteMovies: JSON.parse(localStorage.getItem("favoriteMovies")) || [],
    },
    mutations: {
        addFavoriteMovie(state, movieId) {
            const movie = state.movies.find(movie => movie.id == movieId);
            state.favoriteMovies.push(movie);
            localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
        },
        removeFavoriteMovie(state, movieId) {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== movieId);
            localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
        },
    },
    actions: {
        addFavoriteMovie({commit}, movieId) {
            commit("addFavoriteMovie", movieId);
        },
        removeFavoriteMovie({commit}, movieId) {
            commit("removeFavoriteMovie", movieId);
        },
    },
    getters: {
        isFavorite: (state) => (movieId) => {
            return state.favoriteMovies.some((m) => m.id == movieId);
        },
        getMovieById: (state) => (movieId) => {
            return state.movies.find(movie => movie.id == movieId);
        },
    }
});

