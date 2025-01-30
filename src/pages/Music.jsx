import React from 'react';
import musicPageData from './musicPageData'; // Importamos la data desde su archivo

const Music = () => {
  return (
    <div className="h-auto min-w-screen flex flex-col items-center justify-center p-2 md:p-14">
     
      <div className="grid grid-cols-1 md:grid-cols-2  w-full max-w-5xl">
        {musicPageData.map((item, index) => (
          <div key={index} className=" md:p-6 p-2 rounded-lg flex flex-col items-center">
            {/* <img
              src={item.image}
              alt={`Music cover ${index + 1}`}
              className="w-full h-auto rounded-lg mb-4"
            /> */}
            <iframe
              title={`Bandcamp Player ${index + 1}`}
              style={{ border: 0, width: "100%" }}
              className="h-[500px] md:h-[600px]" // size of each iframe
              src={item.url}
              seamless
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
