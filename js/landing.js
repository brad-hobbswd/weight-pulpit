/* =========================================================
   THE WEIGHT OF THE PULPIT
   LANDING PAGE JAVASCRIPT

   Author: Bradley Hobbs
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-navigation");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      navigation.classList.toggle("navigation-open");

      menuToggle.classList.toggle("menu-open");

    });

  }


  /* =======================================================
     CLOSE MOBILE MENU AFTER CLICKING A LINK
     ======================================================= */

  const navigationLinks = document.querySelectorAll(
    ".site-navigation a"
  );

  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if (navigation && menuToggle) {

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

      }

    });

  });


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  const header = document.querySelector(
    ".site-header"
  );

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 40) {

        header.classList.add(
          "header-scrolled"
        );

      } else {

        header.classList.remove(
          "header-scrolled"
        );

      }

    });

  }


  /* =======================================================
     FADE CONTENT INTO VIEW
     ======================================================= */

  const animatedElements = document.querySelectorAll(
    ".intro-content, .book-introduction, .landing-section, .site-footer"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.15
      }
    );


    animatedElements.forEach((element) => {

      element.classList.add(
        "fade-in-section"
      );

      observer.observe(
        element
      );

    });

  } else {

    animatedElements.forEach((element) => {

      element.classList.add(
        "is-visible"
      );

    });

  }

});
