// components/ImageSplitter.js
import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const ImageSplitter = ({
  locale = '',
  indexLanguageText
  }) => {

    const handleClick = () => {
      document.getElementById("game").requestFullscreen();
      console.log("Button clicked!");
    };

  return (

    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative p-6">
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" title="Fullscreen">Fullscreen</button>
                      </div>
                      <iframe id="game" src="https://g.igroutka.ru/games/760/pP8hwNgq2r4z6L5E/b34682ee-a412-4acc-82b7-c8c45821975f/index.html" allow="autoplay"  style={{ top: '0px', left: '0px',width: '100%', height: '800px'}}></iframe>
    </div>
  );
};

export default ImageSplitter;
