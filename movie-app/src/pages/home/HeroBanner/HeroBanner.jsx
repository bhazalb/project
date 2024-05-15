import React from "react";

import  "./style.scss";

const HeroBanner = () => {
    return (
       <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Keşfedilecek 
                bir sürü film, TV şovu ve keşfedilecek oyuncu var. 
                Heyecana sen de katıl!
                </span>
            </div>
        </div>
       </div>
    )
}

export default HeroBanner