import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#app'),
    smooth: true, 
    multiplier: 1,
    lerp: 0.06, //suavidad del desplazamiento
});

export function updateScroll() {
    scroll.update();
}