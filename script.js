const swiper = new Swiper('.slides', {
    loop: true,
    grabCursor: true,
    spaceBeetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerVeiw: 1
        },
        620:{
            slidesPerVeiw: 2
        },
        1024:{
            slidesPerVeiw: 3
        },
    }
  });