/* ======================================================
   THE WEIGHT OF THE PULPIT
   CHAPTER ONE JAVASCRIPT
   ====================================================== */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ==================================================
       MOBILE NAVIGATION
    ================================================== */

    const menuToggle =
      document.querySelector(
        ".menu-toggle"
      );


    const navigation =
      document.querySelector(
        ".site-navigation"
      );


    if (
      menuToggle &&
      navigation
    ) {


      menuToggle.addEventListener(
        "click",
        function () {


          const isOpen =
            navigation.classList.toggle(
              "active"
            );


          menuToggle.classList.toggle(
            "active",
            isOpen
          );


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


        }
      );


    }


    /* ==================================================
       CLOSE MOBILE MENU AFTER LINK SELECTION
    ================================================== */

    const navigationLinks =
      document.querySelectorAll(
        ".site-navigation a"
      );


    navigationLinks.forEach(
      function (link) {


        link.addEventListener(
          "click",
          function () {


            if (
              navigation &&
              navigation.classList.contains(
                "active"
              )
            ) {


              navigation.classList.remove(
                "active"
              );


              menuToggle.classList.remove(
                "active"
              );


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
        );


      }
    );


  }
);