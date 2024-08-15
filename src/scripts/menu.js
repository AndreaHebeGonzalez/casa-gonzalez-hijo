document.addEventListener('DOMContentLoaded', () => {
    const abrir = document.querySelector('.header__menu-abrir'),
    menuBox = document.querySelector('.header__menu-contenido'),
    menu = document.querySelector('.nav'),
    menuCerrar = document.querySelector('.header__menu-cerrar'),
    listaBtns = document.querySelectorAll('.nav__btn-abrir');

    abrir.addEventListener('click', () => {
        menuBox.style.transform = "translateX(0)";
    });

    menuCerrar.addEventListener('click', () => {
        menuBox.style.transform = "translateX(100%)";
    });

    /* Despliegue de submenu - mobile */

    function manejarEvento(btn) {
        if (window.innerWidth <= 1280) { // Ajusta el valor según el breakpoint deseado
            clickMobile(btn);
        } /* else {
            logicaDesktop();
        } */
    }

    function modificarAlto(submenuHeight, ulPadre) {
        while(ulPadre) {
            ulPadre.style.height = `${ulPadre.clientHeight + submenuHeight}px`;
            let liPadre = ulPadre.parentElement;
            ulPadre = liPadre.closest('.nav__submenu');
        };
    };

    function clickMobile(btn) {
        let height = 0;
        const submenu = btn.nextElementSibling;
        const submenuPadre = btn.parentElement;
        let ulPadre = submenuPadre.closest('.nav__submenu');
        if(!btn.classList.contains('arrow')) {
            btn.classList.add('arrow');
            submenu.style.height = `${submenu.scrollHeight}px`;
            if(ulPadre) {
                modificarAlto(submenu.scrollHeight, ulPadre)
            };
            return;
        };
        btn.classList.remove('arrow');
        submenu.style.height = `${height}px`;
        if(ulPadre) {
            modificarAlto(-submenu.scrollHeight, ulPadre)
        };
    };

    function clickDesktop() {
        
    }

    listaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            manejarEvento(btn);
        }); 
    });
});



