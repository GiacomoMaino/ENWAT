import React, { useRef, useState,  useEffect } from "react";
import ImageGallery from "../../layout/Contacts/ImageGallery";
import {storageImageRef} from "../../helpers/firebase"

import './index.css'

import InfiniteScroll from 'react-infinite-scroll-component'
var token = null;

const ImageGalleryContainer = () => {

  const [images, setFiles] = useState([]);

  const pageToken = useRef(null);

  const fetchImages = async () => {
    let result = await storageImageRef.list({pageToken: pageToken.current, maxResults: 15});
    console.log("request");
    let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

    pageToken.current = result.nextPageToken;

    return Promise.all(urlPromises);

  }

  const loadImages = async () => {
    //console.log(typeof token);
    console.log(pageToken.current);
    if(typeof pageToken.current !== 'undefined')
    { 
    const urls = await fetchImages();
    const newImages = images.concat(urls);
    setFiles(newImages);
    }
}
  
  useEffect(() => {
    loadImages();
    }, []);

    const computeHasNext = () => {
      console.log(typeof pageToken.current === 'undefined' );
      if(typeof pageToken.current === 'undefined' || pageToken.current == null)
        return false;
      return true;
    }

    return(
      <div style={{maxHeight: "100%"}}>
      <InfiniteScroll
        dataLength={images.length}
        next={loadImages}
        hasMore={computeHasNext()}
        loader={<div style={{display: 'flex', justifyContent: 'center'}} ><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>}
      >
      <ImageGallery photos={images}/>
      </InfiniteScroll>
      </div>
    );


  /*return (
    <div>
    <Header/>
    <ImageGallery
      photos = {images}
    />
    </div>
  );*/
};

export default ImageGalleryContainer;
