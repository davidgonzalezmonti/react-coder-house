import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-card">
          <h1>ANIME STICKERS</h1>
          <h3>encontra acá, tus mejores stickers de anime</h3>
          <div className="conteiner-img-home">
            <img
              src="https://res.cloudinary.com/dbaqismy5/image/upload/v1669683181/Stock%20Stickers%20Anime/stickers-dragon_mgieql.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dbaqismy5/image/upload/v1669683180/Stock%20Stickers%20Anime/stickers-kimetsu_qvzkiy.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dbaqismy5/image/upload/v1669683179/Stock%20Stickers%20Anime/anime-one2_st3gua.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
