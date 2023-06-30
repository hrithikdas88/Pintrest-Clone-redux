import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/PhotoSlice";
import "./photoGallery.scss";

import { add } from "../store/FavoriteSlice";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const addToFav = (photo) => {
    dispatch(add(photo));
  };
  
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
            <button className="card-button" onClick={() => addToFav(photo)}>
              Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
