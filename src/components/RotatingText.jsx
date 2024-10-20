import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RotatingText = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text) => {
      gsap.fromTo(text, 
        { opacity: 0, scale: 0.8 }, 
        { 
          opacity: 1, 
          scale: 1, 
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            markers: false,  // Set to true for debugging
          }
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className="text-container">
      <h1 ref={addToRefs} className="scroll-text">TRAVIS SCOTT</h1>
      <h1 ref={addToRefs} className="scroll-text">KENDRICK LAMAR</h1>
      <h1 ref={addToRefs} className="scroll-text">RAUW ALEJANDRO</h1>
      <h1 ref={addToRefs} className="scroll-text">BABY KEEM</h1>
    </div>
  );
};

export default RotatingText;