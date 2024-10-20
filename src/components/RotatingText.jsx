import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RotatingText = () => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const element = textWrapperRef.current;
    gsap.to(element, {
      rotateX: 360,  // Full 360 degree rotation
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,  // Smooth scrolling
        markers: false,  // Debug markers, set to true if needed
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="text-wrapper" ref={textWrapperRef}>
        <h1>TRAVIS SCOTT</h1>
        <h1>KENDRICK LAMAR</h1>
        <h1>EVERYTHING ALWAYS</h1>
        <h1>RAUW ALEJANDRO</h1>
        <h1>BABY KEEM</h1>
        <h1>RED BULL</h1>
        <h1>ROSALIA</h1>
      </div>
    </div>
  );
};

export default RotatingText;