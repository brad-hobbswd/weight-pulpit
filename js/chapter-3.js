/* ======================================================
   THE WEIGHT OF THE PULPIT
   CHAPTER THREE JAVASCRIPT
   ====================================================== */


document.addEventListener("DOMContentLoaded", function () {


  /* ====================================================
     MOBILE NAVIGATION
  ==================================================== */

  const menuToggle = document.querySelector(".menu-toggle");

  const navigation = document.querySelector(".site-navigation");


  if (menuToggle && navigation) {


    menuToggle.addEventListener("click", function () {


      const isOpen =
        navigation.classList.toggle("active");


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


  }


  /* ====================================================
     CLOSE MOBILE MENU AFTER NAVIGATION
  ==================================================== */

  const navigationLinks =
    document.querySelectorAll(
      ".site-navigation a"
    );


  navigationLinks.forEach(function (link) {


    link.addEventListener("click", function () {


      if (
        window.innerWidth <= 800 &&
        navigation
      ) {


        navigation.classList.remove("active");


        if (menuToggle) {


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );


          menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
          );


        }


      }


    });


  });


  /* ====================================================
     CLOSE MENU WHEN SCREEN RETURNS TO DESKTOP
  ==================================================== */

  window.addEventListener("resize", function () {


    if (
      window.innerWidth > 800 &&
      navigation &&
      menuToggle
    ) {


      navigation.classList.remove("active");


      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );


      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );


    }


  });


});