/* ======================================================
   THE WEIGHT OF THE PULPIT
   EPILOGUE PAGE JAVASCRIPT
====================================================== */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ==================================================
       MOBILE NAVIGATION
    ================================================== */

    const menuToggle =
      document.querySelector(".menu-toggle");


    const navigation =
      document.querySelector(".site-navigation");


    if (menuToggle && navigation) {


      menuToggle.addEventListener(
        "click",
        function () {


          navigation.classList.toggle("active");


          const isExpanded =
            menuToggle.getAttribute(
              "aria-expanded"
            ) === "true";


          menuToggle.setAttribute(
            "aria-expanded",
            String(!isExpanded)
          );


        }
      );


    }


    /* ==================================================
       CLOSE MOBILE MENU AFTER NAVIGATION
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


            navigation.classList.remove(
              "active"
            );


            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );


          }
        );


      }
    );


  }
);
