import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className=" p-6 bg-green-200/10 relative max-w-7xl md:mt-[80px] md:mx-auto px-1 h-auto flex flex-col items-center justify-center text-center">
      <div className="flex-shrink-0">
          <img
            src="/lbj-1.jpg"
            alt="Los Baby Jaguars"
            className="w-full rounded-lg shadow-xl max-w-[300px] md:max-w-[400px]"
            style={{ filter: "grayscale(80%)" }}
          />
        </div>

        {/* Text on the right */}
        <div className="text-left">
          
          <p className="mt-4 text-xl md:text-2xl ">
            {/* <span className="">+491637563885</span> */}
            <br />

            <a
              href="mailto:losbabyjaguars@gmail.com"
              className="hover:underline"
            >
              losbabyjaguars@gmail.com
            </a>

            <a
              href="https://www.instagram.com/losbabyjaguars/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline mt-4"
            >
              <FaInstagram className="mr-2" size={24} /> LOSBABYJAGUARS
            </a>
          </p>
        </div>
    </div>
  );
};

export default Contact;

