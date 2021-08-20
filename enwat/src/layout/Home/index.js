import React, {useState, useEffect} from "react";
import {
  Container,
} from "semantic-ui-react";

import AccountComponent from "../../components/AccountComponent";

import './style.css'

import Dasboard from '../../components/Dashboard';
import { auth } from "../../helpers/firebase";
import ImageGalleryContainer from "../../containers/Gallery";
import MemesContainer from "../../containers/Memes"
import BottizionarioContainer from "../../containers/Bottizionario";
import CitazioniContainer from "../../containers/Citazioni";
import TopMenu from "../../components/TopMenu";

const HomeUI = () => {

  const [content, setContent] = useState(0);

  const size = useWindowSize();

  const onDashboardButtonClicked = (e) => {
    if(e.target.id !== "none")
      setContent(e.target.id);
  }


  return (
    <>
    <div className={"glass"}>
      { !(size.width < 1100 && content > 0) && 
      (<Dasboard userName="Giacomo Maino" onButtonClick={onDashboardButtonClicked}/>)
      }
      { !(size.width < 1100 && content == 0) && (
      <div className={"content"}>
        { (size.width < 1100 && content > 0) && 
        (<TopMenu onClick={onDashboardButtonClicked}/>)
        }
        {
          {
            1: <p>Pippo</p>,
            2: <ImageGalleryContainer />,
            3: <MemesContainer />,
            4: <BottizionarioContainer />,
            5: <CitazioniContainer />,
            6: <AccountComponent username="Giacomo Maino" user={auth.currentUser}/>
          }[content]
        }
        
      </div>
      )
    }
    </div>
    <div className={"circle1"}></div>
    <div></div>
    <div className={"circle2"}></div>
    </>
  );

  // Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;

}
}

export default HomeUI;
