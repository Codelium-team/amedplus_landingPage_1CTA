/* const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 20,


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
    }
}); */

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop:true,
    /* centeredSlides: true, */
    
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
       /*  slidesPerView: 3,  */
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  const validacon = (event) => {
    event.preventDefault();
  
    const form = event.target;
    console.log(form)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
  
    if (!name || !email || !subject || !message) {
      alert('Por favor, completa todos los campos.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduce un email válido.');
      return false;
    }

    form.submit();
  };