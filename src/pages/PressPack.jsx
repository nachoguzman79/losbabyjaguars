import React from 'react';

const PressPack = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6">
      <h1 className="mt-12  text-xl md:text-3xl font-bold mb-4">DOWNLOADABLE PDFs - PHOTOS</h1>
      
      {/* <p className="text-xl text-gray-700 mb-6"></p> */}

      {/* Botón de descarga del Rider */}
      {/* <p className="mt-2 mb-6 text-2xl  font-extrabold">DOWNLOAD PDF</p> */}
      <a
        href="/losbabyjaguars-rider.pdf"
        download
        className="bg-slate-800 text-slate-200 px-6 py-3 rounded-lg shadow-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-4"
      >
        Technical rider 
      </a>
      

      {/* Botón de descarga del Press Kit */}
      <a
        href="/losbabyjaguars-press.pdf"
        download
        className="bg-slate-800 text-slate-200 px-6 py-3 rounded-lg shadow-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-4"
      >
        Press Kit
      </a>
      {/* <p className=" mt-2 mb-12 text-xl text-gray-700">Press kit</p> */}

      {/* Botón de descarga de la Hi-Fi Picture */}
      <a
        href="/lbj-press-01.jpg"
        download
        className="bg-slate-800 text-slate-200 px-6 py-3 rounded-lg shadow-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        Hi quality Picture
      </a>

      {/* Texto adicional */}
      {/* <p className="mt-4 text-xl text-gray-700">Press kit + Technical Rider</p> */}
    </div>
  );
};

export default PressPack;
