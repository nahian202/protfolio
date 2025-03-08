const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      searchToggle = document.querySelector(".searchToggle");

    searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
    })



   new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop:true,

      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
