import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Container from 'react-bootstrap/Container';
import './App.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const sectionsRef = useRef([]);
  const [scrolling, setScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  // ScrollTrigger.defaults({
  //   toggleActions: "restart pause resume pause",
  //   scroller: ".container-fluid",
  // });
  
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  const goToSection = (index) => {
    if (index < 0 || index >= sectionsRef.current.length || scrolling) return;
    setScrolling(true);

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: sectionsRef.current[index], autoKill: false },
      ease: 'power4.out',
      onComplete: () => setScrolling(false),
    });

    setCurrentSection(index);
  };

  const handleKeydown = (e) => {
    if (scrolling) return;
    if (e.key === 'ArrowDown') goToSection(currentSection + 1);
    if (e.key === 'ArrowUp') goToSection(currentSection - 1);
  };

  const handleScroll = (e) => {
    console.log(e);
    if (scrolling) return;
    let direction = e.deltaY > 0 ? 1 : -1;
    goToSection(currentSection + direction);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, scrolling]);

  return (
    <Container fluid className="px-0">
      {["", "bg-dark", "bg-danger", "bg-success"].map((bgClass, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`huge-statement-wrapper ${bgClass}`}
        >
          <div className="huge-statement">
            <div className="content-wrapper">
              <h1 className={`huge-text ${bgClass ? 'text-white' : ''}`}>
                Co-create your lighting solution with us
              </h1>
            </div>
          </div>
        </section>
      ))}
    </Container>
  );
}

export default App;
