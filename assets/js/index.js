/**
 * Main JS file for cura behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

      var $postContent = $(".post-content");
      $postContent.fitVids();

      $(".menu-button").on("click", function(e){
        e.preventDefault();

        if ($("body").hasClass("nav-closed")) {

          $(this).addClass("nav-close");
          $("body").toggleClass("nav-opened nav-closed");
          $(".nav").removeClass("closed");

        } else {

          $(this).removeClass("nav-close");
          $("body").toggleClass("nav-opened nav-closed");
          $(".nav").addClass("closed");

        }
      });
    });

})(jQuery);
