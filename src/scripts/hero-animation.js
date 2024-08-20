import { gsap } from "gsap";
import SplitType from 'split-type'

const textoHero = new SplitType('.header__hero-heading', { types: 'chars' });


gsap.from('.char', {
    x: 50,               // Desplazar hacia abajo
    opacity: 0,          // Comenzar invisible
    stagger: 0.06,       // Intervalo entre animaciones de caracteres
    duration: 0.6,       // Duración de la animación
    ease: "power3.out"   // Tipo de easing para la animación
})

gsap.from('.btn-hero', {
    y: 100,               
    opacity: 0,          
    stagger: 0.03,      
    duration: 0.6,      
    ease: "power3.out",
    delay: 0.6, 
    
})

