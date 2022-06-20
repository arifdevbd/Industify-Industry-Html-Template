            /* scroll top */
            const toTop = document.querySelector(".scroll-top");

            window.addEventListener("scroll",() => {
              if (window.pageYOffset > 200) {
                toTop.classList.add("active")
              } else {
                toTop.classList.remove("active");
              }
            })

    /* Banner area */
    $('.slider').slick({
        autoplay: false
     });

       //service
       $('.chooseArea').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      })

      $('.all-partner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

  });
        /* Client feedback */
        $('.client-say').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
  
        });

