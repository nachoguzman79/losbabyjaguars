import React from 'react';

const Home = () => {
  return (
    <div className="relative max-w-7xl md:mt-[20px] md:mx-auto px-1 mt-4 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
        {/* Columna de imagen */}
        <div className="flex justify-center items-center h-full order-1 md:order-2">
          <img
            src="/lbj-zirkus.jpg"
            alt="foto de la banda"
            className="grayscale-[0.9] md:w-[800px] md:h-[800px] object-cover shadow-lg"
          />
        </div>

        {/* Columna de texto */}
        <div className="flex flex-col justify-center items-start text-center md:text-left h-full order-2 md:order-1">
          <h1 className="hidden md:block text-7xl md:text-9xl font-extrabold mb-4 tracking-tight md:flex-auto text-left">
            LOS BABY JAGUARS
          </h1>
          <h2 className="text-4xl md:text-7xl font-semibold  tracking-tight md:flex-auto text-left">
            CUMBIA / LATIN FUNK & PSICODELICO BOOGALOO
          </h2>
          <h3 className="text-xl md:text-4xl font-bold tracking-tight md:flex-auto text-left">
            From Berlin to the world!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
