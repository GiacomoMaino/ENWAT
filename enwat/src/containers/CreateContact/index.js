import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import ImageGallery from "../../layout/Contacts/Create";
import {storageImageRef} from "../../helpers/firebase"

const ImageGalleryContainer = () => {

  function imagesToDict()
  {
    var vector = new Array();

    const results = storageImageRef.listAll();
    results.then((images) => {
      images.items.forEach((image) =>{
        const promise = image.getDownloadURL();

        promise.then((url) =>{
          vector.push({src: url, width: 9, height: 16});
        }).catch((error) => {
        })
      })
    });
    console.log(vector);
    console.log(typeof(vector));
    return vector;
  }


  return (
    <div>
    <Header/>
    <ImageGallery
      photos = {imagesToDict()}
    />
    </div>
  );
};

export default ImageGalleryContainer;
