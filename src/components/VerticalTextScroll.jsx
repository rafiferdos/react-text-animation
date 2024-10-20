import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VerticalTextScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useEffect(() => {
    const textItems = gsap.utils.toArray('.text-item');
    const spacing = 0.2; // Control the spacing between items
    const overlap = Math.ceil(1 / spacing);
    const loopDuration = textItems.length * spacing;

    if (textItems.length === 0) {
      console.error('No text items found. Check the class name or DOM structure.');
      return;
    }

    const tl = gsap.timeline({
      repeat: -1,
      paused: false, // Make sure it's not paused
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${textItems.length * 100}`, // Adjust this value as needed
        scrub: true,
        pin: true,
      }
    });

    textItems.forEach((item, index) => {
      const position = index * spacing;

      tl.fromTo(item, {
        yPercent: 100 * (index + overlap),
        opacity: 0,
        scale: 0.8
      }, {
        yPercent: -100 * (textItems.length + overlap),
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power1.inOut'
      }, position);
    });

    // Slow down the time for debugging if needed
    tl.timeScale(0.5);
  }, []);

  return (
    <div ref={containerRef} className="gallery">
      <ul className="text-items">
        {[
          'LINKIN PARK',
          'PESO PLUMA',
          'KENDRICK LAMAR',
          'EVERYTHING ALWAYS',
          'RAUW ALEJANDRO',
          'TRAVIS SCOTT',
          'BABY KEEM',
          'MORE ARTISTS'
        ].map((text, index) => (
          <li key={index} className="text-item">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalTextScroll;
