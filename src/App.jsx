import { React, useEffect, useState, createContext } from 'react';
import './AppStyle.css';
import Head from './Components/Landing Page/Header';
import Main from './Components/Landing Page/Canvas';
import Foot from './Components/FooterSection/footer';
import Gallery from './Components/GallerySection/Gallery';
import NewsUpdates from './Components/NewsSection/News';
import { imagesData } from './Components/DataSet';

export const specs = createContext();

export default function App() {
  const [bgIndex, setbgIndex] = useState(0);

  useEffect(() => {
    const clc = setInterval(() => {
      setbgIndex((bgIndex + 1) % imagesData.length);
    }, 5000);
    return () => {          // If the useEffect return function returns a function,
      clearInterval(clc);   // the returned function is called cleanup
    };
  }); //bgIndex is set to re-run the effect

  return (
    <>
      <div className="contain" style={{ backgroundImage: `url(${imagesData[bgIndex].image})`, padding: '2.5rem' }}>
        <Head />
        <specs.Provider value={bgIndex}>
          <Main
            title={imagesData[bgIndex].text}
            subtitle={imagesData[bgIndex].sub}
            description={imagesData[bgIndex].descrip}
          />
        </specs.Provider>
      </div>
      <NewsUpdates />
      <Gallery />
      <Foot />


    </>
  )
}