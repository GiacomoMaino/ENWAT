import React, { useRef } from "react";
import "./index.css";
import Gallery from "react-photo-gallery"


const ImageGallery = (photos) => {
  const photoArr = photos.photos;

  console.log(Array.isArray(photoArr))
  return (
    <div>
      <Gallery photos={photoArr}/>
    </div>
  )};
/*}*/;

export default ImageGallery;
