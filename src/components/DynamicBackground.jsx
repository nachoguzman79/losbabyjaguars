import React from "react";
import PropTypes from "prop-types";

const DynamicBackground = ({ bgColor, leftImage, rightImage, children }) => {
  return (
    <div
      className={`relative min-h-screen pt-16`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Imagen izquierda */}
      {leftImage && (
        <div
        className="absolute top-0 left-0 h-full w-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${leftImage})`,
          backgroundColor: "transparent", 
          transform: "translateX(50px)", // Mueve 50px hacia la izquierda
        }}
      ></div>
      )}
      {/* Imagen derecha */}
      {rightImage && (
        <div
        className="absolute top-0 right-0 h-full w-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${rightImage})`,
          transform: "translateX(50px)", // Mueve 50px hacia la derecha
        }}
      ></div>
      )}
      {/* Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Definición de props
DynamicBackground.propTypes = {
  bgColor: PropTypes.string.isRequired, // Color del fondo
  leftImage: PropTypes.string, // Ruta de la imagen izquierda
  rightImage: PropTypes.string, // Ruta de la imagen derecha
  children: PropTypes.node, // Contenido dentro del fondo
};

export default DynamicBackground;
