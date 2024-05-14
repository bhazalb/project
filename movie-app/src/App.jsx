import { useState, useEffect } from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import { fetchDataFromApi } from "./utils/api"

import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch()
   const url = useSelector((state) => state.home);
   console.log(url);
  
   useEffect(() =>{
    apiTesting();
  }  , []);

const apiTesting = () => {
  fetchDataFromApi('person/popular').then((res) => {
    console.log(response)
    dispatch(getApiConfiguration(res))
  });
 
};



  return (
  <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
  </BrowserRouter>
  );
}






