import React from 'react';
import videosPageData from './videosPageData'; // Asegúrate de usar la ruta correcta

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Videos Page</h1>
      <p className="text-xl text-gray-700 mb-8">Explora los videos aquí.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
        {videosPageData.map((video, index) => (
          <div key={index} className="flex flex-col items-center px-4 sm:px-6">
            <iframe
              className="max-w-full sm:max-w-[400px] lg:max-w-[330px] w-full"
              height="315"
              src={video.url}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="mt-2 text-center text-lg text-gray-600">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
