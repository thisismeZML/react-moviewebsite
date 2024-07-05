import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import UpCommingPage from './pages/UpCommingPage'
import FavMovies from './pages/FavMovies'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='movie/:id' element={<DetailPage/>}/>
        <Route path='/popular/movie/:id' element={<DetailPage/>}/>
        <Route path='/toprated/movie/:id' element={<DetailPage/>}/>
        <Route path='/upcomming/movie/:id' element={<DetailPage/>}/>
        <Route path='popular' element={<PopularPage/>}/>
        <Route path='toprated' element={<TopRatedPage/>}/>
        <Route path='upcomming' element={<UpCommingPage/>}/>
        <Route path='favMovies' element={<FavMovies/>}/>
        <Route path='favMovies/movie/:id' element={<DetailPage/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App