/* ======================================================
   THE WEIGHT OF THE PULPIT
   CONTENTS PAGE JAVASCRIPT
====================================================== */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ==================================================
       MOBILE NAVIGATION
    =================================================== */

    const menuToggle =
      document.querySelector(".menu-toggle");


    const navigation =
      document.querySelector(".site-navigation");


    if (
      menuToggle &&
      navigation
    ) {


      menuToggle.addEventListener(
        "click",
        function () {


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


        }
      );


      navigation
        .querySelectorAll("a")
        .forEach(
          function (link) {


            link.addEventListener(
              "click",
              function () {


                navigation.classList.remove(
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
            );


          }
        );


    }


  }
);