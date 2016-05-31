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

      // Menu & menu button animation
      $(".menu-button").on("click", function(e){
        e.preventDefault();

        if ($("body").hasClass("nav-closed")) {

          $(this).addClass("nav-close");
          $("body").toggleClass("nav-opened nav-closed");
          $("body > .nav").removeClass("closed");

        } else {

          $(this).removeClass("nav-close");
          $("body").toggleClass("nav-opened nav-closed");
          $("body > .nav").addClass("closed");

        }
      });

      // Sticky navs
      var $tagAside = $(".tag-aside");
      var $tagAsideSibling = $tagAside.next(".tag-content");

      var $aboutMenu = $(".about-content .menu-box");

      var $postAside = $(".post-template .content > aside");

      var headerHeight = $("nav.main-nav").height();
      var aboutHeight = $(".author-profile").height();
      var postHeight = $(".post-heading").height();

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        // Post lists / tag page
        if (scroll >= headerHeight) {
          $tagAside.addClass("fixed");
          $tagAsideSibling.addClass("fixed");
        } else {
          $tagAside.removeClass("fixed");
          $tagAsideSibling.removeClass("fixed");
        }

        // About page
        if (scroll >= aboutHeight+headerHeight+80) {
          $aboutMenu.addClass("fixed");
        } else {
          $aboutMenu.removeClass("fixed");
        }

        // Post page
        if (scroll >= postHeight+headerHeight+80) {
          $postAside.addClass("fixed");
        } else {
          $postAside.removeClass("fixed");
        }
      });
    });

})(jQuery);
