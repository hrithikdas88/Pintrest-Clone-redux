import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/PhotoSlice";
import "./photoGallery.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addToFavorites, removeFromFavorites } from "../store/ClickSlice";

import { add, remove } from "../store/FavoriteSlice";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  // useEffect(() => {
  //   dispatch(fetchPhotos());
  // }, [dispatch]);

  // const addToFav = (photo) => {
  //   dispatch(add(photo));
  // };

  const clickedPhotos = useSelector((state) => state.click);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleToggleFavorite = (photo) => {
    if (isFavorite(photo)) {
      dispatch(removeFromFavorites(photo.id));
      dispatch(remove(photo.id))
    } else {
      dispatch(addToFavorites(photo.id));
      dispatch(add(photo));
    }
  };

  const isFavorite = (photo) => clickedPhotos.includes(photo.id);

  // const [favoritePhotos,setFavoritePhotos]= useState([])

  // const clickEvent = (photo) => {
  //   if (favoritePhotos.includes(photo.id)) {

  //     setFavoritePhotos(favoritePhotos.filter((id) => id !== photo.id));
  //   } else {

  //     setFavoritePhotos([...favoritePhotos, photo.id]);
  //   }
  // };

  // const isFavorite = (photo) => favoritePhotos.includes(photo.id);

  return (
    <div className="main-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="container">
        {photos.map((photo) => (
          <div className="card">
            <img
              className="card-image"
              key={photo.id}
              src={photo.src.medium}
              alt={photo.photographer}
            />
            <button
              className="card-button"
              onClick={() => handleToggleFavorite(photo)}
              onDoubleClick={() => handleToggleFavorite(photo)}
            >
              {isFavorite(photo) ? (
                <AiFillHeart size={50} />
              ) : (
                <AiOutlineHeart size={50} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
