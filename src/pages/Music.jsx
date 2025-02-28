import React from 'react';
import musicPageData from './musicPageData'; // Importamos la data desde su archivo

const Music = () => {
  return (
    <div className="h-auto min-w-screen flex flex-col items-center justify-center p-2 md:p-14 ">
     
      <div className=" grid grid-cols-1 md:grid-cols-2  w-full max-w-5xl gap-0">
        {musicPageData.map((item, index) => (
          <div key={index} className=" md:p-3 p-1 rounded-lg flex flex-col items-center">
        
            <iframe
              title={`Bandcamp Player ${index + 1}`}
              style={{ border: 0, width: "100%", marginBottom: "0px" }}
              className="h-[500px] md:h-[450px] lg:h-[700px] m-8 p-0" // size of each iframe
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
