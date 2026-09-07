/* ==========================================================
   THE WEIGHT OF THE PULPIT

   INTRODUCTION PAGE JAVASCRIPT

   Author: Bradley Hobbs
   ========================================================== */


document.addEventListener("DOMContentLoaded", function () {


  /* ========================================================
     MOBILE NAVIGATION
  ======================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-navigation");


  if (menuToggle && navigation) {


    menuToggle.addEventListener("click", function () {


      const isOpen = navigation.classList.toggle("navigation-open");


      menuToggle.classList.toggle("menu-open");


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );


    });


    /* Close navigation after selecting a link */

    const navigationLinks =
      navigation.querySelectorAll("a");


    navigationLinks.forEach(function (link) {


      link.addEventListener("click", function () {


        navigation.classList.remove(
          "navigation-open"
        );


        menuToggle.classList.remove(
          "menu-open"
        );


        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );


        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );


      });


    });


  }


  /* ========================================================
     READING PROGRESS
  ======================================================== */

  const progressBar =
    document.querySelector(".reading-progress-bar");


  if (progressBar) {


    window.addEventListener("scroll", function () {


      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;


      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


      const scrollPercent =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;


      progressBar.style.width =
        scrollPercent + "%";


    });


  }


  /* ========================================================
     SMOOTH SCROLL LINKS
  ======================================================== */

  const anchorLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  anchorLinks.forEach(function (link) {


    link.addEventListener(
      "click",
      function (event) {


        const targetId =
          this.getAttribute("href");


        if (
          targetId &&
          targetId !== "#"
        ) {


          const target =
            document.querySelector(
              targetId
            );


          if (target) {


            event.preventDefault();


            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });


          }


        }


      }
    );


  });


});