import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { apiKey } from "../api/apiKey";
import { movieAPI } from "../api/movieApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "@mui/material";
import ShowCase from "../components/ShowCase";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SecondShowCase from "../components/SecondShowCase";

const Home = () => {
  const [movieBanner, setMovieBanner] = useState([]);
  const [fullMovie, setFullMovie] = useState([]);

  const [topMovies, setTopMovies] = useState([]);
  const [upComming, setUpComming] = useState([]);

  const fetchMovies = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );
    setMovieBanner(res.data.results.slice(1, 7));
  };

  const fetchFullMovies = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );
    setFullMovie(res.data.results);
  };

  const fetchTopRated = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    );
    setTopMovies(res.data.results);
  };

  const fetchUpComming = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    );
    setUpComming(res.data.results);
  };

  useEffect(() => {
    fetchMovies();
    fetchFullMovies();
    fetchTopRated();
    fetchUpComming();
  }, []);

  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {movieBanner.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="h-full xl:h-[80dvh] mt-[70px] relative image-container mb-0">
              <NavLink>
                <img
                  className="w-full h-auto object-cover"
                  src={`${baseImageUrl}${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </NavLink>
              <div className="container absolute inset-0 flex items-center justify-start text-white z-30">
                <div className="max-w-[600px] flex flex-col gap-3 p-4 mt-4">
                  <h1 className="text-4xl font-bold">{movie.original_title}</h1>
                  <p className="line-clamp-3 text-lg">{movie.overview}</p>
                  <p>
                    <span>{movie.release_date}</span> |{" "}
                    <span>{movie.original_language}</span>
                  </p>
                  <NavLink to={`movie/${movie.id}`}>
                    <Button variant="contained" color="error">
                      Watch Now
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-7 mb-3">
        <div className="font-pirmaryFont text-white mb-3 container flex items-center justify-between">
          <h1>Popular Movies</h1>
          <NavLink to="popular">
            <h1 className=" text-[#ff5059] flex items-center gap-3">
              <span>All Movies</span>
              <button className="border rounded-full border-[#ff5059] flex items-center justify-center">
                <MdKeyboardArrowRight className="" />
              </button>
            </h1>
          </NavLink>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={7}
          className="mySwiper container relative mb-0"
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: {
              // Tailwind 'sm'
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              // Tailwind 'md'
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              // Tailwind 'lg'
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              // Tailwind 'xl'
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1420: {
              // Tailwind 'xl'
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
        >
          {fullMovie.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="h-[300px]">
                <NavLink to={`movie/${movie.id}`}>
                  <img
                    className=" select-none"
                    src={`${baseImageUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev-custom absolute left-7 top-[40%] transform  p-2.5 flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-black group z-10">
            <SlArrowLeft className="text-sm text-white " />
          </div>
          <div className="swiper-button-next-custom absolute right-3 top-1/2 transform -translate-y-1/2 p-2.5 flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-black group z-10">
            <SlArrowRight className="text-sm text-white" />
          </div>
        </Swiper>
      </div>

      {/* Show Case */}
      <div className=" w-full h-[600px]">
        <ShowCase />
      </div>

      <div className="mt-7 mb-3">
        <div className="font-pirmaryFont text-white mb-3 container flex items-center justify-between">
          <h1>Top Rated</h1>
          <NavLink to="toprated">
            <h1 className=" text-[#ff5059] flex items-center gap-3">
              <span>All Movies</span>
              <button className="border rounded-full border-[#ff5059] flex items-center justify-center">
                <MdKeyboardArrowRight className="" />
              </button>
            </h1>
          </NavLink>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={7}
          className="mySwiper container relative mb-0"
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: {
              // Tailwind 'sm'
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              // Tailwind 'md'
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              // Tailwind 'lg'
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              // Tailwind 'xl'
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1420: {
              // Tailwind 'xl'
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
        >
          {topMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="h-[300px]">
                <NavLink to={`movie/${movie.id}`}>
                  <img
                    className=" select-none"
                    src={`${baseImageUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev-custom absolute left-7 top-[40%] transform  p-2.5 flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-black group z-10">
            <SlArrowLeft className="text-sm text-white " />
          </div>
          <div className="swiper-button-next-custom absolute right-3 top-1/2 transform -translate-y-1/2 p-2.5 flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-black group z-10">
            <SlArrowRight className="text-sm text-white" />
          </div>
        </Swiper>
      </div>

      {/* Show Case */}
      <div className=" w-full h-[600px]">
        <SecondShowCase />
      </div>

      <div className="mt-7 mb-3">
        <div className="font-pirmaryFont text-white mb-3 container flex items-center justify-between">
          <h1>Up Comming</h1>
          <NavLink to="upcomming">
            <h1 className=" text-[#ff5059] flex items-center gap-3">
              <span>All Movies</span>
              <button className="border rounded-full border-[#ff5059] flex items-center justify-center">
                <MdKeyboardArrowRight className="" />
              </button>
            </h1>
          </NavLink>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={7}
          className="mySwiper container relative mb-0"
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: {
              // Tailwind 'sm'
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              // Tailwind 'md'
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              // Tailwind 'lg'
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              // Tailwind 'xl'
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1420: {
              // Tailwind 'xl'
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
        >
          {upComming.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="h-[300px]">
                <NavLink to={`movie/${movie.id}`}>
                  <img
                    className=" select-none"
                    src={`${baseImageUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev-custom absolute left-7 top-[40%] transform  p-2.5 flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-black group z-10">
            <SlArrowLeft className="text-sm text-white " />
          </div>
          <div className="swiper-button-next-custom absolute right-3 top-1/2 transform -translate-y-1/2 p-2.5 flex items-center justify-center bg-black rounded-full cursor-pointer hover:bg-black group z-10">
            <SlArrowRight className="text-sm text-white" />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
