import { create } from "zustand";
import axios from "axios";
import { apiKey } from "../api/apiKey";

const initialState = {
  allMovies: [],
  favMovies: [],
  movies: {}, // Store movies by their IDs
  isActive: false,
  searchMovies: [],
};

export const useMovie = create((set) => ({
  ...initialState,
  addFavMovies: (movie) =>
    set((state) => ({ favMovies: [...state.favMovies, movie] })),
  removeFavMovies: (id) =>
    set((state) => ({
      favMovies: state.favMovies.filter((mov) => mov.id !== id),
    })),
  addReview: (movieId, newMsg) =>
    set((state) => ({
      movies: {
        ...state.movies,
        [movieId]: {
          ...state.movies[movieId],
          reviews: [...(state.movies[movieId]?.reviews || []), newMsg],
        },
      },
    })),
  deleteReview: (movieId, id) =>
    set((state) => ({
      movies: {
        ...state.movies,
        [movieId]: {
          ...state.movies[movieId],
          reviews: state.movies[movieId].reviews.filter((msg) => msg.id !== id),
        },
      },
    })),
  editReview: (movieId, id, newReview) =>
    set((state) => ({
      movies: {
        ...state.movies,
        [movieId]: {
          ...state.movies[movieId],
          reviews: state.movies[movieId].reviews.map((msg) =>
            msg.id === id ? { ...msg, review: newReview } : msg
          ),
        },
      },
    })),
  toggleSideBar: () => set((state) => ({ isActive: !state.isActive })),
  searchFilter: async (searchTerm) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    );
    set({ searchMovies: res.data.results });
    console.log(res.data);
  },
}));
