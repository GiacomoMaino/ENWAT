import React, {useState, useRef, useEffect} from 'react';

import ImageGallery from "../../layout/Contacts/ImageGallery";

import '../Gallery/index.css'

import InfiniteScroll from 'react-infinite-scroll-component'

import {storageMemeRef as storageImageRef} from '../../helpers/firebase';

const MemesContainer = () =>{
  const [images, setFiles] = useState([]);

  const pageToken = useRef(null);

  const fetchImages = async () => {
    let result = await storageImageRef.list({pageToken: pageToken.current ,maxResults: 15});
    let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

    pageToken.current = result.nextPageToken;

    return Promise.all(urlPromises);

  }

  const loadImages = async () => {
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
      if(typeof pageToken.current === 'undefined' || pageToken.current == null)
        return false;
      return true;
    }

    return(
      <div>
      <div style={{display: 'flex', justifyContent: 'center', paddingBottom:"2rem", paddingLeft:"2rem", paddingRight: "2rem"}} >
        <h1>Le nostre ore meglio spese</h1>
      </div>
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

}

export default MemesContainer;