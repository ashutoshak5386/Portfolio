import React, { useEffect, useRef } from 'react';
import { backgroundd } from '../../assets';
import Typewriter from 'typewriter-effect/dist/core';

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true, // Set to true to loop the typing animation
      delay: 75,   // Time delay between each character
    });
  
    typewriter
      .typeString("Hi, I am Ashutosh")
      .pauseFor(2000) // Pause for 2 seconds after typing the first line
      .deleteAll()    // Delete the first line
      .typeString("I am a Web Developer")
      .pauseFor(2000) // Pause for 2 seconds after typing the second line
      .deleteAll()    // Delete the second line
      .typeString("and a DevOps geek")
      .pauseFor(2000) // Pause for 2 seconds after typing the third line
      .deleteAll()    // Delete the third line
      .typeString("Love to learn new things")
      .pauseFor(2000) // Pause for 2 seconds after typing the fourth line
      .deleteAll()    // Delete the fourth line
      .start();
  
    return () => {
      typewriter.stop();
    };
  }, []);
   // Empty dependency array to run effect only once on mount

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundd})` }}>
      <div ref={typewriterRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"></div>
    </div>
  );
};

export default Hero;
