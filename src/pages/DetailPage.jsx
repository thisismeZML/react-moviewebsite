import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { movieAPI } from "../api/movieApi";
import { apiKey } from "../api/apiKey";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaHeart } from "react-icons/fa";
import { Avatar, Button } from "@mui/material";
import { useMovie } from "../hooks/useMovie";
import { deepOrange } from "@mui/material/colors";

const DetailPage = () => {
  const { id } = useParams();
  const {
    favMovies,
    addFavMovies,
    removeFavMovies,
    addReview,
    deleteReview,
    editReview,
    movies,
  } = useMovie((state) => ({
    favMovies: state.favMovies,
    addFavMovies: state.addFavMovies,
    removeFavMovies: state.removeFavMovies,
    addReview: state.addReview,
    deleteReview: state.deleteReview,
    editReview: state.editReview,
    movies: state.movies[id] || {}, // Get movie details and reviews for current movie ID
  }));

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState(null);
  const [isEdit, setIsEdit] = useState(null); // Track the ID of the review being edited
  const [editText, setEditText] = useState("");
  const textRef = useRef();
  const editRef = useRef();

  const handlePost = () => {
    if (textRef.current.value.trim()) {
      const newMsg = {
        id:
          movies.reviews && movies.reviews.length > 0
            ? movies.reviews[movies.reviews.length - 1].id + 1
            : 1,
        review: textRef.current.value,
      };
      addReview(id, newMsg); // Add review for current movie ID
      textRef.current.value = ""; // Clear the input after posting
    }
  };

  const handleEdit = (msg) => {
    setIsEdit(msg.id);
    setEditText(msg.review);
  };

  const handleOnBlur = () => {
    editReview(id, isEdit, editText); // Edit review for current movie ID
    setIsEdit(null);
  };

  useEffect(() => {
    if (isEdit) {
      editRef.current.focus();
    }
  }, [isEdit]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents the default line break behavior
      handleOnBlur(); // Calls handleOnBlur when "Enter" is pressed
    }
  };

  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const fetchMovie = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    setMovie(res.data);
    console.log(id);
  };

  const fetchCast = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
    );
    setCast(res.data.cast);
  };

  const fetchVideos = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );
    if (res.data.results.length > 0) {
      setVideo(res.data.results[0]);
    }
  };

  useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchVideos();
  }, [id]);

  const getRatingColor = (rating) => {
    if (rating >= 7) return "#21d07a";
    if (rating >= 4) return "#d2d531";
    return "#db2360";
  };

  const toggleFav = (movie) => {
    if (favMovies.some((mov) => mov.id === movie.id)) {
      removeFavMovies(movie.id);
    } else {
      addFavMovies(movie);
    }
  };

  const handleFavColor = (id) => {
    return favMovies.some((mov) => mov.id === id)
      ? "text-red-600"
      : "text-white";
  };

  return (
    <div className="mt-[70px] text-white mb-[50px] font-pirmaryFont">
      <div className="relative">
        <div className="h-[30vh] sm:h-[50vh]">
          <img
            className="w-full h-full object-cover object-top"
            src={`${baseImageUrl}${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-start text-white bg-black opacity-50 p-4"></div>
      </div>
      <div className="container flex justify-center gap-12 flex-wrap">
        <div>
          <img
            className="h-[500px] lg:-translate-y-1/2 mt-3"
            src={`${baseImageUrl}${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className="flex flex-col gap-4 lg:-translate-y-1/2">
          <h1 className="text-4xl font-bold">{movie.original_title}</h1>
          <div className="flex items-center mt-4 gap-4">
            <div className="w-14 h-14">
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={`${movie.vote_average?.toFixed(1)}`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: getRatingColor(movie.vote_average),
                  trailColor: "#d6d6d6",
                  textSize: "25px",
                  textWeight: "bolder",
                })}
              />
            </div>
            <div>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 px-2 py-1 bg-gray-700 rounded"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <p className="xl:max-w-[500px] line-clamp-3 w-auto">
            {movie.overview}
          </p>
          <div className="flex items-center gap-5">
            <button onClick={() => toggleFav(movie)}>
              <FaHeart className={`text-xl ${handleFavColor(movie.id)}`} />
            </button>
            <Button variant="contained" color="error">
              Watch Now
            </Button>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div>
              <h1 className="border-b-2 border-red-500 text-2xl font-bold font-pirmaryFont">
                Cast
              </h1>
            </div>
            <div className="flex flex-wrap">
              {cast &&
                cast.slice(0, 5).map((actor) => (
                  <div
                    key={actor.cast_id}
                    className="flex items-center mr-4 mb-2 relative"
                  >
                    <img
                      src={`${baseImageUrl}${actor.profile_path}`}
                      alt={actor.name}
                      className="h-[200px]"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {video && (
        <div className="container flex flex-col xl:mt-0 mt-[20px] w-full">
          <h1 className="flex items-start border-b-2 border-red-500 text-2xl font-bold">
            Video
          </h1>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-60 sm:h-80 md:h-96 xl:h-[900px]"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="container mt-[50px] flex flex-col gap-3">
        <h1 className="flex items-start border-b-2 border-red-500 text-2xl font-bold">
          Reviews
        </h1>
        <div>
          {movies.reviews && movies.reviews.length > 0 ? (
            movies.reviews.map((msg) => (
              <div key={msg.id}>
                <div className="bg-gray-800 p-3 rounded mb-2 flex items-center gap-5 col-span-2 justify-between">
                  <div className="flex items-center gap-5">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    {isEdit === msg.id ? (
                      <input
                        ref={editRef}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={handleOnBlur}
                        type="text"
                        className="px-2 focus-visible:outline-none bg-transparent border border-zinc-600 w-full"
                      />
                    ) : (
                      <p>{msg.review}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => handleEdit(msg)}
                      variant="contained"
                      color="error"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteReview(id, msg.id)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </div>
        <div className="w-full mt-5 flex flex-col">
          <textarea
            ref={textRef}
            className="w-full min-h-[100px] bg-transparent border border-gray-500 focus-visible:outline-none p-4"
            placeholder="Write Your Review"
          ></textarea>
          <div className="flex justify-end mt-2">
            <Button onClick={handlePost} variant="contained" color="error">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
