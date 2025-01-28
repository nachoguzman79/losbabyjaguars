import React from "react";

const About = () => {
  return (
    <div className="relative max-w-7xl md:mt-[60px] mt-[20px] md:mx-auto px-2 py-10 md:p-20 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
        {/* Columna de texto */}
        <div className="flex flex-col justify-center items-start text-center md:text-left h-full space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-left text-gray-900">
            BABY JAGUARS BIO
          </h1>

          {/* Descripción general */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Dynamic international combo formed by 7 musicians from countries
            like <span className="font-semibold text-gray-900">Venezuela, Peru, Argentina, Spain, and the UK</span>, based in Berlin. They deliver a colorful experience influenced by <span className="font-semibold text-gray-900">Latin sounds, psychedelia, cumbia, afrobeat, and Latin Funk</span>.
          </p>

          {/* Sección: Presentaciones en vivo */}
          {/* <h2 className="text-2xl md:text-2xl font-semibold text-gray-900">
            Energetic and Powerful Live Shows
          </h2> */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Their live shows feature layers of percussion and wild guitars. In
            2023, they released their debut 4-song EP, including a 7" vinyl
            launched by <span className="font-semibold text-gray-900">Nu-Tone Recordings (USA)</span>. Despite being newly formed, Los Baby Jaguars have quickly become a reference in the groovy, tropical funk scene in Europe.
          </p>

          {/* Sección: Logros y festivales */}
          {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            International Recognition
          </h2> */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The band has shared the stage with renowned groups such as{" "}
            <span className="font-semibold text-gray-900">Los Mirlos</span> and{" "}
            <span className="font-semibold text-gray-900">Frente Cumbiero</span>.
            They’ve performed across <span className="font-semibold text-gray-900">Switzerland, Poland, Germany, and the UK</span>, captivating audiences with their unique blend of <span className="font-semibold text-gray-900">tropical beats, funk-inspired grooves, and experimental melodies.</span>.
          </p>

          {/* Sección: Músicos */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            We are:
          </h3>
          <ul className="text-lg md:text-xl leading-relaxed text-gray-700 list-disc list-inside">
            <li>
              <span className="font-semibold text-gray-900">Guitars:</span>{" "}
              Nacho Guzmán - Emiliano Salvatore
            </li>
            <li>
              <span className="font-semibold text-gray-900">Bass:</span> Victor
              Calvo Díaz
            </li>
            <li>
              <span className="font-semibold text-gray-900">Drums:</span> Barney
              Riley
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Güiro/Vibra slap:
              </span>{" "}
              Bridget Hines
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Congas/Flute/Sax:
              </span>{" "}
              Jabier Garrafa Lobaton
            </li>
            <li>
              <span className="font-semibold text-gray-900">Bongo/Cowbell:</span>{" "}
              Rafael Larrazábal
            </li>
          </ul>
        </div>

        {/* Columna de imagen */}
        <div className="flex justify-center items-center h-full">
          <img
            src="/jaguar-bits.png"
            alt="foto de la banda"
            className="max-w-[1100px] max-h-[1100px] w-auto h-auto object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="relative max-w-7xl md:mt-[60px] mt-[20px] md:mx-auto px-2 py-10 md:p-20 min-h-screen flex flex-col items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
//         {/* Columna de texto */}
//         <div className="flex flex-col justify-center items-start text-center md:text-left h-full">
//           <h1 className="text-7xl md:text-6xl font-extrabold mb-4 tracking-tight text-left text-gray-900">
//             BABY JAGUAR BIO
//           </h1>
//           <p className="text-xl md:text-2xl mb-6 text-left text-gray-700">
//             Dynamic international combo formed by 7 musicians from countries like Venezuela, Peru, Argentina, Spain, and the UK, based in Berlin. They deliver a colorful experience influenced by Latin sounds, psychedelia, cumbia, afrobeat, and Latin Funk.
//           </p>
//           <p className="text-xl md:text-2xl mb-6 text-left text-gray-700">
//             Their energetic and powerful live shows feature layers of percussion and wild guitars. In 2023, they released their debut 4-song EP, including a 7" vinyl launched by Nu-Tone Recordings (USA).
//           </p>
//           <p className="text-xl md:text-2xl mb-6 text-left text-gray-700">
//             Though newly formed, Los Baby Jaguars have quickly become a reference in the groovy, tropical funk scene in Europe, having shared the stage with renowned bands such as Los Mirlos or Frente Cumbiero. They’ve performed in countries and festivals across Switzerland, Poland, Germany, and the UK.
//           </p>
//           <p className="text-xl md:text-2xl mb-6 text-left text-gray-700">
//             Their sound invites listeners on a journey through Peruvian cumbia, with stops in Afrobeat, Latin funk, and psychedelic grooves.
//           </p>
//           <div className="text-xl md:text-2xl mb-6 text-left text-gray-700">
//             <strong>Musicians:</strong>
//             <ul className="list-disc list-inside">
//               <li>Guitars: Nacho Guzmán - Emiliano Salvatore</li>
//               <li>Bass: Victor Calvo Díaz</li>
//               <li>Drums: Barney Riley</li>
//               <li>Güiro/Vibra slap: Bridget Hines</li>
//               <li>Congas/Flute/Sax: Jabier Walter Garrafa Lobaton</li>
//               <li>Bongo/Cowbell: Rafael Larrazábal</li>
//             </ul>
//           </div>
//           <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
//             QUE VA ACÁ?
//           </h3>
//         </div>

//         {/* Columna de imagen */}
//         <div className="flex justify-center items-center h-full">
//           <img
//             src="/jaguar-bits.png"
//             alt="foto de la banda"
//             className="max-w-[1200px] max-h-[1200px] w-auto h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
