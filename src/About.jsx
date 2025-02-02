
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./about.css"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function About(){
    
    let sections = document.querySelectorAll(".huge-statement-wrapper");
    let currentSection = 0;
    let scrolling = false;

    sections.forEach(section => {
        gsap.fromTo(section,
        { opacity: 0, scale: 1 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play reverse play reverse"
            }
        }
        );
    });

    const goToSection = (index) =>{
        if (index < 0 || index >= sections.length || scrolling) return;
        scrolling = true;

        gsap.to(window, {
        duration: 2.5, // Smooth transition
        scrollTo: { y: sections[index], autoKill: false },
        ease: "power4.out",
        onComplete: () => {
            scrolling = false;
        }
        });
    
        currentSection = index;
        console.log(currentSection);
    }

    const handleScroll = (event) => {
        if (scrolling) return;
        // event.preventDefault();

        let direction = event.deltaY > 0 ? 1 : -1;
        goToSection(currentSection + direction);
    }

    const handleKeydown = (e) => {
        // console.log(e.key);
        if (scrolling) return;
        if (e.key === "ArrowDown") goToSection(currentSection + 1);
        if (e.key === "ArrowUp") goToSection(currentSection - 1);
    }

    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("keydown", handleKeydown);

    return (
        <div className="wrapper">
        <section className="section one">Section 1</section>
        <section className="section two">Section 2</section>
        <section className="section three">Section 3</section>
        <section className="section four">Section 4</section>
        <section className="section five">Section 5</section>
    </div>

    )
}

export default About