import React, { useState } from "react";
import "./index.css";

import CloseIcon from '@material-ui/icons/Close';


const ImageGallery = (photos) => {
  const photoArr = photos.photos;

  const[model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
    <div className={model? "model open" : "model"}>
      <img src={tempImgSrc} alt={'Foto aperta'}/>
      <CloseIcon onClick={() => setModel(false)}/>
    </div>
    <div className="gallery">
      {photoArr.map((item, index) => {
        return (
          <div className="pics" key={index}  onClick={() => getImg(item)}>
            <img src={item} alt={"Foto"} style={{width: '100%'}} />
          </div>
        )
      })}
    </div>
    </>
  )};

export default ImageGallery;
