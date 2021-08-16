import React, { useRef } from "react";
import Header from "../../../components/Header";
import "./index.css";
import Gallery from "react-photo-gallery"

import {
  Grid,
  Header as SemanticHeader,
  Card,
  Form,
  Button,
  Select,
  Icon,
  Image,
} from "semantic-ui-react";
import countries from "../../../utils/countries";
import { Prompt } from "react-router-dom";

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
