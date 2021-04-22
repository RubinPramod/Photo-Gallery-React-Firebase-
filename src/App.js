import React, { useState } from 'react';
import './App.css';
import Title from './components/title';
import UploadForm from './components/uploadForm';
import ImageGrid from './components/imageGrid';
import Modal from './components/modal';

function App() {
  

    const [selectedImg, setselectedImg] = useState(null)

  return (
    <div className="App text-center">
      <header className="App-header">
        {/* logo */}
      </header>
        <Title/>
        <UploadForm/>
        <ImageGrid setselectedImg={setselectedImg}/>
        {selectedImg &&  <Modal selectedImg={selectedImg} setselectedImg={setselectedImg}/> }
       
    </div>
  );
}

export default App;
