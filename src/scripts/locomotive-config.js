import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#app'),
    smooth: true, //desplazamiento activado
    multiplier: 1,
    lerp: 0.1, //suavidad del desplazamiento
});

export function updateScroll() {
    scroll.update();
}