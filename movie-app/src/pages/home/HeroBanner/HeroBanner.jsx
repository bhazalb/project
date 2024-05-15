import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";  //yönlendirme için kullandım
import  "./style.scss";

import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
    const [background , setBackground]= useState("");
    const [query , setQuery]= useState("");
    const navigate = useNavigate();

    const {data , loading} =useFetch("/movie/upcoming");

    useEffect(() => {
        
      const bg= 
      data?.results?.[Math.floor(Math.random()* 20)].backdrop_path
      setBackground(bg);
    }, [data] );
    
    const searchQeryHandler = (event) => {
      if(event.key == "Enter" && query.length >0) {
           navigate(`/search/${query}`);
      }
    };

    return (
       <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Keşfedilecek 
                bir sürü film, TV şovu ve keşfedilecek oyuncu var. 
                Heyecana sen de katıl!
                </span>
                <div className="searchInput">
                    <input
                     type="text" 
                     placeholder="Bir film veya dizi arayın.."
                     onChsnge={() => setQuery(e.target.value)}
                     onKeyUp={searchQeryHandler}
                    />
                     <button>Search</button>
                </div>
            </div>
        </div>
       </div>
    )
}

export default HeroBanner