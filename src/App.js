import React from 'react';
import einsteinImage from "./einstein-aman.jpg" 
import videoSample from "./videos/file_example_MP4_480_1_5MG.mp4"
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style= {{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 className="title red"> Einstein is here</h1>

      <div>
          <img className="images" src={einsteinImage} />
      </div>
      
      <div>
          <img className="images" src="/einstein.jpg" />
      </div>
    </div>

      <video width="320" height="240" controls>

        <source src={videoSample}type="video/mp4"></source>
 
      </video>
    </div>
  );
}

export default App;
