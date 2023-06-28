import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../store/PhotoSlice';

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div>
      <h1>Photo Gallery</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="gallery">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;