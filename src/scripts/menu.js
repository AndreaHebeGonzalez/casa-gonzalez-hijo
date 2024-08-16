document.addEventListener('DOMContentLoaded', () => {
    const iconoAbrir = document.querySelector('.header__menu-abrir'),
    menuBox = document.querySelector('.header__menu-contenido'),
    menuCerrar = document.querySelector('.header__menu-cerrar'),
    listaBtns = document.querySelectorAll('.nav__btn-abrir');

    const menuToggle = (desplegar) => {
        menuBox.style.transform = desplegar ? 'translateX(0)' : 'translateX(100%)';
    }

    iconoAbrir.addEventListener('click', () => menuToggle(true));
    menuCerrar.addEventListener('click', () => menuToggle(false));


    const modificarAlto = (submenuHeight, ulPadre) => {
        while(ulPadre) {
            ulPadre.style.height = `${ulPadre.clientHeight + submenuHeight}px`;
            let liContenedor = ulPadre.parentElement;
            ulPadre = liContenedor.closest('.nav__submenu');
        };
    }

    const menuMobile = (btn) => {
        console.log('entre a funcion menuMobile')
        const submenu = btn.nextElementSibling;
        const liPadre = btn.parentElement;
        let ulPadre = liPadre.closest('.nav__submenu');

        let height = submenu.scrollHeight;

        if(!btn.classList.contains('arrow')) {
            btn.classList.add('arrow');
            submenu.style.height = `${height}px`;
            if(ulPadre) modificarAlto(height, ulPadre);
        } else {
            btn.classList.remove('arrow');
            submenu.style.height = '0px';
            if(ulPadre) modificarAlto(-height, ulPadre);
        };
    };

    const recorrer = (submenu, liHermano, anterior) => {
        while(liHermano) {
            const ulHijos = liHermano.querySelectorAll('.nav__submenu');
            if(ulHijos.length > 0) {
                ulHijos.forEach(ulHijo => ulHijo.style.display = 'none');
            } else {
                liHermano.addEventListener('mouseover', () => {
                    submenu.style.display = 'none';
                });
            };
            liHermano = anterior ? liHermano.previousElementSibling:liHermano.nextElementSibling; 
        };
    }

    const menuDesktop = (btn) => {
        const submenu = btn.nextElementSibling,
        liPadre = btn.parentElement;
        let hermanoAnteriorLi = liPadre.previousElementSibling,
        hermanoPosteriorLi = liPadre.nextElementSibling;
        
        submenu.style.display = 'block';
        submenu.querySelectorAll('.nav__submenu').forEach(ulHijo => ulHijo.style.display = 'none');
        
        recorrer(submenu, hermanoAnteriorLi, true); 
        recorrer(submenu, hermanoPosteriorLi, false); 
    };



    if (window.matchMedia("(min-width: 1280px)").matches) {
        console.log('desktop')
        listaBtns.forEach(btn => btn.addEventListener('mouseover', () => menuDesktop(btn)));

        let cerrarMenuTimeout;

        menuBox.addEventListener('mouseleave', () => {
            cerrarMenuTimeout = setTimeout(() => {
                menuBox.querySelectorAll('.nav__submenu').forEach(ulHijo => ulHijo.style.display = 'none');
            }, 300); 
        });

        menuBox.addEventListener('mouseenter', () => {
            clearTimeout(cerrarMenuTimeout);
        });

    } else {
        console.log('mobile')
        listaBtns.forEach(btn => btn.addEventListener('click', () => menuMobile(btn)));
    };
});





