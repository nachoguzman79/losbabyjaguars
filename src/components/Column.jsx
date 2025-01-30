

import React from "react";

const Column = ({ images }) => {
  return (
    <div className=" hidden lg:flex w-[10%] flex-col justify-center items-center overflow-hidden h-full">
      <div className="animate-scroll flex flex-col h-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-2/3 h-auto object-contain mx-auto ${image.className || ""}`}
            style={image.style || {}}
          />
        ))}
        {/* Duplicamos las imágenes para el loop continuo */}
        {images.map((image, index) => (
          <img
            key={`${index}-duplicate`}
            src={image.src}
            alt={image.alt}
            className={`w-2/3 h-auto object-contain mx-auto ${image.className || ""}`}
            style={image.style || {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
