// import React from "react";

// const Column = ({ images }) => {
//   return (
//     <div className="bg-white/15 hidden lg:flex w-[10%] flex-col justify-center items-center">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image.src}
//           alt={image.alt}
//           className={`w-2/3 h-auto object-contain ${image.className || ""}`}
//           style={image.style || {}}
//         />
//       ))}
//     </div>
//   );
// };

// export default Column;

import React from "react";

const Column = ({ images }) => {
  return (
    <div className="bg-white/0 hidden lg:flex w-[10%] flex-col justify-center items-center overflow-hidden">
      <div className="animate-scroll flex flex-col">
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
