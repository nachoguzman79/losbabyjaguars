import React from 'react';

const Home = () => {
  return (
    <div className="relative max-w-7xl lg:mt-[80px] lg:mx-auto px-1 h-auto flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Columna de imagen */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <img
            src="/lbj-zirkus.jpg"
            alt="foto de la banda"
            className="grayscale-[0.9] w-full max-w-[800px] h-auto object-cover shadow-lg"
          />
        </div>

        {/* Columna de texto */}
        <div className="flex flex-col justify-center items-start text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-7xl lg:text-7xl xl:text-9xl font-extrabold mb-4 tracking-tight text-left">
            LOS BABY JAGUARS
          </h1>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-left">
            CUMBIA / LATIN FUNK & PSICODELICO BOOGALOO
          </h2>
          <h3 className="text-xl lg:text-4xl font-bold tracking-tight text-left mt-4">
            From Berlin to the world!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
