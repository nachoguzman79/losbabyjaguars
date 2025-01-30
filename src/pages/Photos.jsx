import React, { useState } from "react";
import photosPageData from "./photosPageData";

const Photos = () => {
  // Estado para manejar la imagen seleccionada y el índice actual
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Función para abrir una imagen en grande
  const openPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  // Función para cerrar la imagen en grande
  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  // Función para navegar a la siguiente imagen
  const nextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photosPageData.length);
  };

  // Función para navegar a la imagen anterior
  const prevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      (prevIndex - 1 + photosPageData.length) % photosPageData.length
    );
  };

  return (
    <div className="relative max-w-7xl md:mt-[80px] md:mx-auto px-1 mt-4 mb-4 h-auto flex flex-col items-center justify-center">
      {/* Modal para la imagen seleccionada */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closePhoto}
        >
          <div
            className="relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic en la imagen
          >
            {/* Botón para cerrar */}
            <button
              onClick={closePhoto}
              className="absolute top-4 right-4 text-white text-3xl font-bold p-2 z-50"
            >
              &times;
            </button>

            {/* Botón para ir a la imagen anterior */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 text-white text-3xl font-bold z-50 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
            >
              &#8249; {/* Flecha izquierda */}
            </button>

            {/* Imagen seleccionada */}
            <img
              src={photosPageData[selectedPhotoIndex].src}
              alt={photosPageData[selectedPhotoIndex].alt}
              className="max-w-full max-h-[600px] rounded-lg"
            />

            {/* Botón para ir a la siguiente imagen */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 text-white text-3xl font-bold z-50 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
            >
              &#8250; {/* Flecha derecha */}
            </button>
          </div>
        </div>
      )}

      {/* <h1 className="text-4xl font-bold mb-8">Fotos</h1> */}

      {/* Grid para las imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photosPageData.map((photo, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openPhoto(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300 ease-in-out" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
