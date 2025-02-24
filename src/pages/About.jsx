

import React from "react";

const About = () => {
  return (
    <div className="  relative max-w-6xl md:mt-[80px] mt-[0px] md:mx-auto px-2 py-2 flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        <div className="flex justify-center items-center w-full">
          <img
            src="/lbj-1.jpg"
            alt="foto de la banda"
            className="max-w-[350px] max-h-[500px] w-auto h-auto object-contain  md:max-w-[900px]"
            style={{ filter: "grayscale(80%)" }}
          />
        </div>

        {/* Texto abajo */}
        <div className=" p-4 md:p-8 flex flex-col justify-center items-start text-left w-full space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold  text-center md:text-left ">
            LOS BABY JAGUARS
          </h1>

          {/* Descripción general */}
          <p className="text-lg md:text-lg leading-relaxed ">
            Dynamic international combo formed by 7 musicians from countries
            such us <span className="font-semibold text-gray-900">Venezuela, Peru, Argentina, Spain, and the UK</span>, based in Berlin. They deliver a colorful experience influenced by <span className="font-semibold text-gray-900">Latin sounds, psychedelia, cumbia, afrobeat, and Latin Funk</span>.
          </p>

          {/* Sección: Presentaciones en vivo */}
          <p className="text-lg md:text-xl leading-relaxed ">
             In
            2023, they released their debut 4-song EP, including a 7" vinyl
            launched by <span className="font-semibold text-gray-900">Nu-Tone Recordings (USA)</span>. Despite being newly formed, Los Baby Jaguars have quickly become a reference in the groovy, tropical funk scene in Europe. Their live shows are a dynamic fusion of vibrant percussion and electrifying guitars, creating an irresistible energy that keeps the crowd moving. Each performance is a celebration of catchy melodies and captivating lyrics, ensuring an unforgettable, high-energy experience.
          </p>

          {/* Sección: Logros y festivales */}
          <p className="text-lg md:text-xl leading-relaxed ">
            The band has shared the stage with renowned groups such as{" "}
            <span className="font-semibold text-gray-900">Los Mirlos</span> and{" "}
            <span className="font-semibold text-gray-900">Frente Cumbiero</span>.
            They’ve performed across <span className="font-semibold ">Switzerland, Poland, Germany, and the UK</span>, captivating audiences with their unique blend of <span className="font-semibold text-gray-900">tropical beats, funk-inspired grooves, and experimental melodies.</span>
          </p>
          <p className="text-lg md:text-xl leading-relaxed ">Currently, the band is gearing up to release their highly anticipated first LP, featuring 10 original songs, set to drop in 2025.</p>

          {/* Sección: Músicos */}
          {/* <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
            We are:
          </h3> */}
          <ul className="text-lg md:text-xl leading-relaxed  list-disc list-inside">
            <li>
              <span className="font-semibold ">Guitars:</span>{" "}
              Nacho Guzmán - Emiliano Salvatore
            </li>
            <li>
              <span className="font-semibold ">Bass:</span> Victor
              Calvo Díaz
            </li>
            <li>
              <span className="font-semibold ">Drums:</span> Barney
              Riley
            </li>
            <li>
              <span className="font-semibold ">
                Güiro/Vibra slap:
              </span>{" "}
              Bridget Hines
            </li>
            <li>
              <span className="font-semibold ">
                Congas/Flute/Sax:
              </span>{" "}
              Jabier Garrafa Lobaton
            </li>
            <li>
              <span className="font-semibold ">Bongo/Timbales:</span>{" "}
              Rafael Larrazábal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
