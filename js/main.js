const swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const validacion = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log(form)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa todos los campos.',
        });
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa un email válido.',
        });
        return false;
    }
    Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado!',
        text: 'Tus consulta ha sido enviada exitosamente.',
    });
    form.submit();
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.direction').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.btn.btn-dark.desp').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const modalElement = this.closest('.modal');
        const modal = bootstrap.Modal.getInstance(modalElement);

        if (modal) {
            modal.hide();
            modalElement.addEventListener('hidden.bs.modal', () => {

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, { once: true });
        }
    });
});
