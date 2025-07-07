$(document).ready(function () {
  $(".site-header-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    // meanExpand: ['<i class="fal fa-plus"></i>'],
  });
});
$(".ham-btn").on("click", function () {
  $(".menu-mobile-container").addClass("open");
  $(".body-overlay").addClass("opened");
});

$(".mobile__close-btn").on("click", function () {
  $(".menu-mobile-container").removeClass("open");
  $(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
  $(".menu-mobile-container").removeClass("open");
  $(".cart-container").removeClass("open");
  $(this).removeClass("opened");
  $("body").removeClass("sidebar-open");
});

$(".cart-btn").on("click", function () {
  $(".cart-container").addClass("open");
  $(".body-overlay").addClass("opened");
});

$(".cart-close").on("click", function () {
  $(".cart-container").removeClass("open");
  $(".body-overlay").removeClass("opened");
});

$("#search-icon").on("click", function () {
  $(".search-box-form").addClass("open");
});

$(".close-search").on("click", function () {
  $(".search-box-form").removeClass("open");
});

$(document).mouseup(function (e) {
  var container = $(".search-box-form");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("open");
  }
});

$(function () {
  "use strict";

  /* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

  function noScroll() {
    window.scrollTo(0, 0);
  }
  var open = false,
    navDark = $(".topnav.dark"),
    logoChan = $(".topnav.dark .logo img");

  $(".navbar_hamburger").on("click", function () {
    open = !open;

    $(".menu-header-container").toggleClass("open");

    if (open) {
      $(".menu-header-container").animate({ left: 0 });

      $(".navbar_hamburger").addClass("open");

      navDark.addClass("navlit");
      logoChan.attr("src", "img/logo-light.png");

      // window.addEventListener('scroll', noScroll);
    } else {
      $(".menu-header-container").delay(300).animate({ left: "-100%" });

      $(".navbar_hamburger").removeClass("open");

      $(".menu-header-container .menu-links .main-menu .sub-menu").slideUp();

      $(".menu-header-container .menu-links .main-menu .dmenu").removeClass(
        "dopen"
      );

      navDark.removeClass("navlit");
      logoChan.attr("src", "img/logo-dark.png");

      window.removeEventListener("scroll", noScroll);
    }
  });

  $(".menu-header-container .menu-links .main-menu > li").on(
    "mouseenter",
    function () {
      $(this).removeClass("hoverd").siblings().addClass("hoverd");
    }
  );

  $(".menu-header-container .menu-links .main-menu > li").on(
    "mouseleave",
    function () {
      $(this).removeClass("hoverd").siblings().removeClass("hoverd");
    }
  );

  $(".main-menu > li .dmenu").on("click", function () {
    $(this)
      .parent()
      .parent()
      .find(".sub-menu")
      .toggleClass("sub-open")
      .slideToggle();
    $(this).toggleClass("dopen");
  });

  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password-input");

  // togglePassword.addEventListener('click', function (e) {
  //     // toggle the type attribute
  //     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  //     password.setAttribute('type', type);
  //     // toggle the eye slash icon
  //     this.classList.toggle('fa-eye-slash');
  // });
});

$(document).ready(function () {
  var heightHeight = $(".site-header").height();

  $(".no-banner").css("margin-top", heightHeight);
  // var header = $('.site-header').height()

  if ($(window).width() < 992) {
    // var header = $('.site-header').height()
    // console.log(header)
    $(".product-content").stick_in_parent({
      offset_top: heightHeight,
    });
    $(".box-title").stick_in_parent({
      offset_top: heightHeight,
      parent: $(".detail-product-container"),
      // bottoming: false
    });
  } else {
    $(".product-content").stick_in_parent({
      offset_top: heightHeight,
      // inner_scrolling: false
    });
    $(".box-title").stick_in_parent({
      offset_top: heightHeight,
      parent: $(".detail-product-container"),
      // bottoming: false
      // inner_scrolling: false
    });
  }

  if ($(window).width() < 768) {
    var swiperProductItem = new Swiper(".swiper-product-detail", {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1500,
      loop: false,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // on: {
      //     init: function () {
      //         autoplayStop();
      //     },
      // }
    });
  }
});
window.isMobile = function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $("body").addClass("disable-cursor");
    return true;
  } else {
    if ($(window).width() <= 1024) {
      $("body").addClass("disable-cursor");
      return true;
    }
  }
  return false;
};

window.ScrollEffects = function () {
  gsap.defaults({ overwrite: "auto" });
  gsap.registerPlugin(ScrollTrigger, Flip);
  gsap.config({ nullTargetWarn: false });

  var lastScrollTop = 0;
  var st = $(this).scrollTop();
  console.log(st);
  if (st > lastScrollTop) {
    $(".site-header").addClass("scroll-down");
    $(".site-header").removeClass("scroll-up");
    $(".site-header").addClass("has-scroll");
  } else {
    $(".site-header").removeClass("scroll-down");
    $(".site-header").addClass("scroll-up");
  }
  if (st < 30) {
    $(".site-header").removeClass("scroll-down");
    $(".site-header").removeClass("scroll-up");
    $(".site-header").removeClass("has-scroll");
  }
  lastScrollTop = st;

  let enableSmoothScrollMobile = true;
  if (isMobile()) {
    if (!enableSmoothScrollMobile) {
      document.body.classList.remove("smooth-scroll");
    }
  }
  if (document.body.classList.contains("smooth-scroll")) {
    const ScrollArea = document.querySelector("#content-scroll");
    class EdgeEasingPlugin extends Scrollbar.ScrollbarPlugin {
      constructor() {
        super(...arguments);
        this._remainMomentum = {
          x: 0,
          y: 0,
        };
      }
      transformDelta(delta) {
        const { limit, offset } = this.scrollbar;
        const x = this._remainMomentum.x + delta.x;
        const y = this._remainMomentum.y + delta.y;
        // clamps momentum within [-offset, limit - offset]
        this.scrollbar.setMomentum(
          Math.max(-offset.x, Math.min(x, limit.x - offset.x)),
          Math.max(-offset.y, Math.min(y, limit.y - offset.y))
        );
        return { x: 0, y: 0 };
      }
      onRender(remainMomentum) {
        Object.assign(this._remainMomentum, remainMomentum);
      }
    }

    EdgeEasingPlugin.pluginName = "edgeEasing";
    Scrollbar.use(EdgeEasingPlugin);

    // Config

    if (!isMobile()) {
      var ScrollbarOptions = {
        damping: 0.1,
        renderByPixel: true,
        continuousScrolling: true,
        syncCallbacks: true,
      };
    }

    if (isMobile()) {
      var ScrollbarOptions = {
        damping: 0.2,
        renderByPixel: true,
        continuousScrolling: true,
        syncCallbacks: true,
      };
    }

    // Initialise
    var scrollbar = Scrollbar.init(ScrollArea /*ScrollbarOptions*/);

    ScrollTrigger.scrollerProxy("#content-scroll", {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
    });

    scrollbar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: ScrollArea });
  } // End Smooth Scroll
  const showAnim = gsap
    .from(".site-header", {
      yPercent: -100,
      paused: true,
      duration: 0.1,
    })
    .progress(1);

  const hH = $(".site-header").height();
  const productContent = gsap
    .from(".box-title", {
      y: -hH,
      paused: true,
      duration: 0.3,
    })
    .progress(1);

  ScrollTrigger.create({
    trigger: ".site-header",
    start: 50,
    end: "max",
    toggleClass: {
      className: "scroll-menu",
      targets: ".site-header",
    },
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
  ScrollTrigger.create({
    trigger: ".site-header",
    start: 50,
    end: "max",

    onUpdate: (self) => {
      self.direction === -1 ? productContent.play() : productContent.reverse();
    },
  });

  $(".has-mask-fill").each(function () {
    var words = $(this).text();
    var total = words;
    $(this).empty();
    $(this).append($("<span /> ").text(words));
  });

  $(".has-mask-fill.block-title").each(function () {
    var words = $(this).text().split(" ");
    var total = words.length;
    $(this).empty();
    for (index = 0; index < total; index++) {
      $(this).append($("<span /> ").text(words[index]));
    }
  });

  var hasMaskFill = gsap.utils.toArray(".has-mask-fill");
  hasMaskFill.forEach(function (hMaskFill) {
    var spanFillMask = hMaskFill.querySelectorAll("span");
    gsap.to(spanFillMask, {
      scrollTrigger: {
        trigger: hMaskFill,
        start: "top 85%",
        end: () => `+=${hMaskFill.offsetHeight * 2}`,
        scrub: 1,
      },
      duration: 1,
      backgroundSize: "200% 100%",
      stagger: 0.5,
      ease: Linear.easeNone,
    });
  });

  // Clipped Image
  gsap.utils
    .toArray(".clipped-image-wrapper")
    .forEach((clippedImageWrapper) => {
      const clippedImagePin =
        clippedImageWrapper.querySelector(".clipped-image-pin");
      const clippedImage = clippedImageWrapper.querySelector(".clipped-image");
      const clippedImageGradient = clippedImageWrapper.querySelector(
        ".clipped-image-gradient"
      );
      const clippedImageContent = clippedImageWrapper.querySelector(
        ".clipped-image-content"
      );

      gsap.set(clippedImageContent, {
        paddingTop: window.innerHeight / 2 + clippedImageContent.offsetHeight,
      });

      gsap.set(clippedImageGradient, {
        backgroundColor: clippedImageGradient
          .closest(".content-row ")
          .getAttribute("data-bgcolor"),
      });

      function setClippedImageWrapperProperties() {
        gsap.set(clippedImageContent, { paddingTop: "" });
        gsap.set(clippedImageGradient, { height: window.innerHeight * 0.3 });
        gsap.set(clippedImage, { height: window.innerHeight });
        gsap.set(clippedImageContent, {
          paddingTop: window.innerHeight / 2 + clippedImageContent.offsetHeight,
        });
        gsap.set(clippedImageWrapper, {
          height: window.innerHeight + clippedImageContent.offsetHeight,
        });
      }

      imagesLoaded("body", function () {
        setClippedImageWrapperProperties();
      });

      window.addEventListener("resize", setClippedImageWrapperProperties);

      gsap.to(clippedImageGradient, {
        scrollTrigger: {
          trigger: clippedImagePin,
          start: function () {
            const startPin = 0;
            return "top +=" + startPin;
          },
          end: function () {
            const endPin = clippedImageContent.offsetHeight;
            return "+=" + endPin;
          },
          scrub: true,
        },
        opacity: 1,
        y: 1,
      });

      var clippedImageAnimation = gsap.to(clippedImage, {
        clipPath: "inset(0% 0% 0%)",
        scale: 1,
        duration: 1,
        ease: "Linear.easeNone",
      });

      var clippedImageScene = ScrollTrigger.create({
        trigger: clippedImagePin,
        start: function () {
          const startPin = 0;
          return "top +=" + startPin;
        },
        end: function () {
          const endPin = clippedImageContent.offsetHeight;
          return "+=" + endPin;
        },
        animation: clippedImageAnimation,
        scrub: 1,
        pin: true,
        pinSpacing: false,
      });
    });

  var hasParallax = gsap.utils.toArray(".has-parallax");
  hasParallax.forEach(function (hParallax) {
    var bgImage = hParallax.querySelector("img");
    var bgVideo = hParallax.querySelector("video");
    var parallax = gsap.fromTo(
      [bgImage, bgVideo],
      { y: "-20%", scale: 1.15 },
      { y: "20%", scale: 1, duration: 1, ease: Linear.easeNone }
    );
    var parallaxScene = ScrollTrigger.create({
      trigger: hParallax,
      start: "top 100%",
      end: () => `+=${hParallax.offsetHeight + window.innerHeight}`,
      animation: parallax,
      scrub: true,
    });
  });

  var hasAnimation = gsap.utils.toArray(".has-animation");
  hasAnimation.forEach(function (hAnimation) {
    var delayValue = parseInt(hAnimation.getAttribute("data-delay")) || 0;
    gsap.to(hAnimation, {
      scrollTrigger: {
        trigger: hAnimation,
        start: "top 95%",
        // scrub: 1,
        onEnter: function () {
          hAnimation.classList.add("animated");
        },
        toggleActions: "play none none reset",
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: Power2.easeOut,
      delay: delayValue / 1000,
    });
  });
  // Pinned Sections
  if (window.innerWidth > 479) {
    var pinnedSection = gsap.utils.toArray(".pinned-element");
    pinnedSection.forEach(function (pinElement) {
      var parentNode = pinElement.parentNode;
      var scrollingElement = parentNode.querySelector(".scrolling-element");

      var pinnedScene = ScrollTrigger.create({
        trigger: pinElement,
        //start: "top top-=-50px",
        start: function () {
          const startPin = (window.innerHeight - pinElement.offsetHeight) / 2;
          return "top +=" + startPin;
        },
        end: () =>
          `+=${scrollingElement.offsetHeight - pinElement.offsetHeight}`,
        pin: pinElement,
      });
    });
  }

  // Slowed Pin Section
  gsap.utils.toArray(".slowed-pin").forEach((slowedPin) => {
    const slowedText = slowedPin.querySelector(".slowed-text");
    const slowedTextWrapper = slowedPin.querySelector(".slowed-text-wrapper");
    const slowedImagesWrapper = slowedPin.querySelector(".slowed-images");
    const slowedImages = slowedPin.querySelectorAll(".slowed-image img");

    gsap.to(slowedText, {
      scrollTrigger: {
        trigger: slowedText,
        scrub: true,
        pin: true,
        start: "top top",
        end: function () {
          const durationHeight =
            slowedImagesWrapper.offsetHeight - window.innerHeight;
          return "+=" + durationHeight;
        },
      },
      y: window.innerHeight - slowedText.offsetHeight,
    });

    gsap.from(slowedTextWrapper, {
      scrollTrigger: {
        trigger: slowedText,
        scrub: true,
        start: "top top",
        end: function () {
          const durationHeight =
            slowedImagesWrapper.offsetHeight - window.innerHeight;
          return "+=" + durationHeight;
        },
      },
      y: 100,
    });

    slowedImages.forEach((sImage) => {
      gsap.to(sImage, {
        scrollTrigger: {
          trigger: sImage,
          scrub: true,
          start: "top 100%",
        },
        scale: 1,
        y: 0,
      });
    });
  });
  // Back To Top
  $("#backtotop").on("click", function () {
    if ($("body").hasClass("smooth-scroll")) {
      gsap.to(scrollbar, {
        duration: 1.5,
        scrollTop: 0,
        delay: 0.1,
        ease: Power4.easeInOut,
      });
      gsap.to("#ball", {
        duration: 0.3,
        borderWidth: "4px",
        scale: 0.5,
        borderColor: "#999999",
        delay: 0.15,
      });
    } else {
      $("html,body").animate({ scrollTop: 0 }, 800);
      gsap.to("#ball", {
        duration: 0.3,
        borderWidth: "4px",
        scale: 0.5,
        borderColor: "#999999",
        delay: 0.15,
      });
    }
  });

  $(".anim-fadein").each(function () {
    let tl_FadeIn = gsap.timeline({
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        markers: false,
      },
    });

    tl_FadeIn.from(
      this,
      {
        duration: 2.5,
        autoAlpha: 0,
        opacity: 0,
        ease: Expo.easeOut,
        clearProps: "all",
      },
      "+=0.3"
    );
  });

  $(".anim-fadeinup").each(function () {
    let tl_FadeInUp = gsap.timeline({
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        markers: false,
      },
    });

    tl_FadeInUp.from(
      this,
      {
        duration: 2.5,
        autoAlpha: 0,
        y: 100,
        ease: Expo.easeOut,
        clearProps: "all",
      },
      "+=0.3"
    );
  });
  $(".anim-zoomin").each(function () {
    // Add wrap <div>.
    $(this).wrap('<div class="anim-zoomin-wrap"></div>');

    // Add overflow hidden.
    $(".anim-zoomin-wrap").css({
      overflow: "hidden",
    });

    var $this = $(this);
    var $asiWrap = $this.parents(".anim-zoomin-wrap");

    let tl_ZoomIn = gsap.timeline({
      scrollTrigger: {
        trigger: $asiWrap,
        start: "top 90%",
        markers: false,
        onEnter: () => animZoomInRefresh(),
      },
    });
    tl_ZoomIn.from($this, {
      duration: 1.5,
      autoAlpha: 0,
      scale: 1.2,
      ease: Power2.easeOut,
      clearProps: "all",
    });

    // Refresh start/end positions on enter.
    function animZoomInRefresh() {
      ScrollTrigger.refresh();
    }
  });

  // fade in-up
  $(".anim-fadeinup").each(function () {
    let tl_FadeInUp = gsap.timeline({
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        markers: false,
      },
    });

    tl_FadeInUp.from(
      this,
      {
        duration: 1.5,
        autoAlpha: 0,
        y: 30,
        ease: Power2.easeOut,
        clearProps: "all",
      },
      "+=0.2"
    );
  });

  // skew in-up
  $(".anim-skewinup").each(function () {
    let tl_SkewInUp = gsap.timeline({
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        markers: false,
      },
    });

    tl_SkewInUp.from(
      this,
      {
        duration: 2,
        skewY: 5,
        transformOrigin: "left top",
        autoAlpha: 0,
        y: 100,
        ease: Expo.easeOut,
        clearProps: "all",
      },
      "+=0.3"
    );
  });

  // stretch in-up
  $(".anim-stretchinup").each(function () {
    let tl_StretchInUp = gsap.timeline({
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        markers: false,
      },
    });

    tl_StretchInUp.from(
      this,
      {
        duration: 2,
        autoAlpha: 0,
        y: 100,
        scaleY: 1.4,
        transformOrigin: "top",
        ease: Expo.easeOut,
        clearProps: "all",
      },
      "+=0.2"
    );
  });
};

var ScrollEffects = window.ScrollEffects;

window.Core = function () {
  if (!isMobile() && !$("body").hasClass("disable-cursor")) {
    var mouse = { x: 0, y: 0 };
    var pos = { x: 0, y: 0 };
    var ratio = 0.65;
    var active = false;
    var ball = document.getElementById("ball");
    var ballloader = document.getElementById("ball-loader");
    var offsetX = 40;

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      scale: 0.5,
      borderWidth: "4px",
    });

    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      mouse.x = e.pageX;
      mouse.y = e.pageY - scrollTop;
    }

    gsap.ticker.add(updatePosition);

    function updatePosition() {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

        gsap.to(ball, { duration: 0.4, x: pos.x, y: pos.y });
      }
    }

    $(".sticky.left").mouseenter(function (e) {
      var rcBounds = $(this)[0].getBoundingClientRect();
      var positionX = rcBounds.left - offsetX;
      var positionY = rcBounds.top + rcBounds.height / 2;
      gsap.to(ball, {
        duration: 0.5,
        x: positionX,
        y: positionY,
        scale: 0.9,
        borderWidth: "2px",
      });
      gsap.ticker.remove(updatePosition);
    });

    $(".sticky.right").mouseenter(function (e) {
      var rcBounds = $(this)[0].getBoundingClientRect();
      var positionX = rcBounds.right + offsetX;
      var positionY = rcBounds.top + rcBounds.height / 2;
      gsap.to(ball, {
        duration: 0.5,
        x: positionX,
        y: positionY,
        scale: 0.9,
        borderWidth: "2px",
      });
      gsap.ticker.remove(updatePosition);
    });

    $("#main .sticky.left").mouseenter(function (e) {
      var rcBounds = $(this)[0].getBoundingClientRect();
      var positionX = rcBounds.left - offsetX + 10;
      var positionY = rcBounds.top + rcBounds.height / 2;
      gsap.to(ball, {
        duration: 0.5,
        x: positionX,
        y: positionY,
        scale: 0.7,
        opacity: 0.6,
        borderWidth: "6px",
        borderColor: "#999999",
      });
      gsap.ticker.remove(updatePosition);
    });

    $("#main .sticky.right").mouseenter(function (e) {
      var rcBounds = $(this)[0].getBoundingClientRect();
      var positionX = rcBounds.right + offsetX - 10;
      var positionY = rcBounds.top + rcBounds.height / 2;
      gsap.to(ball, {
        duration: 0.5,
        x: positionX,
        y: positionY,
        scale: 0.7,
        opacity: 0.6,
        borderWidth: "6px",
        borderColor: "#999999",
      });
      gsap.ticker.remove(updatePosition);
    });

    $(".clapat-button .sticky.left").mouseenter(function (e) {
      var rcBounds = $(this)[0].getBoundingClientRect();
      var positionX = rcBounds.left + 22;
      var positionY = rcBounds.top + rcBounds.height / 2;
      gsap.to(ball, {
        duration: 0.5,
        x: positionX,
        y: positionY,
        scale: 0.4,
        opacity: 1,
        borderWidth: "6px",
        borderColor: "#000",
      });
      gsap.ticker.remove(updatePosition);
    });

    $(".clapat-button .sticky.right").mouseenter(function (e) {
      var rcBounds = $(this)[0].getBoundingClientRect();
      var positionX = rcBounds.right - 22;
      var positionY = rcBounds.top + rcBounds.height / 2;
      gsap.to(ball, {
        duration: 0.5,
        x: positionX,
        y: positionY,
        scale: 0.4,
        opacity: 1,
        borderWidth: "6px",
        borderColor: "#000",
      });
      gsap.ticker.remove(updatePosition);
    });

    $(".sticky").mouseleave(function (e) {
      gsap.to(ball, {
        duration: 0.2,
        scale: 0.5,
        borderWidth: "4px",
        borderColor: "#999999",
        opacity: 1,
      });
      gsap.ticker.add(updatePosition);
    });

    $(".parallax-wrap").mouseenter(function (e) {
      gsap.to(this, { duration: 0.3, scale: 2 });
      gsap.to(ball, {
        duration: 0.3,
        scale: 0.9,
        borderWidth: "2px",
        opacity: 1,
      });
      gsap.to($(this).children(), { duration: 0.3, scale: 0.5 });
      active = true;
    });

    $("#main .parallax-wrap.icon-wrap").mouseenter(function (e) {
      gsap.to(ball, {
        duration: 0.3,
        scale: 0.7,
        borderWidth: "6px",
        opacity: 0.6,
        borderColor: "#999",
      });
    });

    $(".clapat-button .parallax-wrap.icon-wrap").mouseenter(function (e) {
      gsap.to(ball, {
        duration: 0.05,
        scale: 0.4,
        borderWidth: "0px",
        opacity: 1,
        borderColor: "#000",
      });
    });

    $(".parallax-wrap.bigger").mouseenter(function (e) {
      gsap.to(ball, {
        duration: 0.3,
        scale: 1.35,
        borderWidth: "2px",
        opacity: 1,
      });
    });

    $(".parallax-wrap").mouseleave(function (e) {
      gsap.to(this, { duration: 0.3, scale: 1 });
      gsap.to(ball, {
        duration: 0.3,
        scale: 0.5,
        borderWidth: "4px",
        opacity: 1,
        borderColor: "#999999",
      });
      gsap.to($(this).children(), { duration: 0.3, scale: 1, x: 0, y: 0 });
      active = false;
    });

    $(".sticky").mouseenter(function (e) {
      gsap.to(ball, {
        duration: 0.5,
        borderColor: $("body").data("primary-color"),
      });
    });
    $("#main .sticky").mouseenter(function (e) {
      gsap.to(ball, { duration: 0.5, borderColor: "#999" });
    });
    $(".clapat-button .sticky").mouseenter(function (e) {
      if ($("#page-content").hasClass("light-content")) {
        gsap.to(ball, { duration: 0.5, borderColor: "#000" });
      } else {
        gsap.to(ball, { duration: 0.5, borderColor: "#fff" });
      }
    });
    $(".parallax-wrap").mouseenter(function (e) {
      gsap.to(ball, {
        duration: 0.3,
        borderColor: $("body").data("primary-color"),
      });
    });
    $(".clapat-button .parallax-wrap").mouseenter(function (e) {
      if ($("#page-content").hasClass("light-content")) {
        gsap.to(ball, { duration: 0.05, borderColor: "#000" });
      } else {
        gsap.to(ball, { duration: 0.05, borderColor: "#fff" });
      }
    });
    $(".parallax-wrap.bigger").mouseenter(function (e) {
      gsap.to(ball, {
        duration: 0.3,
        borderColor: $("body").data("primary-color"),
      });
    });
    $("#main .parallax-wrap.icon-wrap").mouseenter(function (e) {
      gsap.to(ball, { duration: 0.3, borderColor: "#999" });
    });

    $(".parallax-wrap").mousemove(function (e) {
      parallaxCursor(e, this, 2);
      callParallax(e, this);
    });

    function callParallax(e, parent) {
      parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
    }

    function parallaxIt(e, parent, target, movement) {
      var boundingRect = parent.getBoundingClientRect();
      var relX = e.pageX - boundingRect.left;
      var relY = e.pageY - boundingRect.top;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y:
          ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.height) *
          movement,
        ease: Power2.easeOut,
      });
    }

    function parallaxCursor(e, parent, movement) {
      var rect = parent.getBoundingClientRect();
      var relX = e.pageX - rect.left;
      var relY = e.pageY - rect.top;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      pos.y =
        rect.top +
        rect.height / 2 +
        (relY - rect.height / 2 - scrollTop) / movement;
      gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
    }

    $(".hide-ballm,.btn-site-k").mouseenter(function (e) {
      gsap.to("#ball", {
        duration: 0.2,
        borderWidth: "1px",
        scale: 1,
        opacity: 0,
      });
    });

    $(".hide-ballm,.btn-site-k").mouseleave(function (e) {
      gsap.to("#ball", {
        duration: 0.3,
        borderWidth: "4px",
        scale: 0.5,
        opacity: 1,
      });
    });

    $(".link, .button, .site-header a").mouseenter(function (e) {
      gsap.to("#ball", {
        duration: 0.2,
        borderWidth: "0px",
        scale: 1.5,
        backgroundColor: "rgba(153, 153, 153, 1)",
        opacity: 0.15,
      });
      gsap.to("#ball-loader", {
        duration: 0.2,
        borderWidth: "2px",
        top: 4,
        left: 4,
      });
    });

    $(".link, .button, .site-header a").mouseleave(function (e) {
      gsap.to("#ball", {
        duration: 0.3,
        borderWidth: "4px",
        scale: 0.5,
        backgroundColor: "rgba(153, 153, 153, 0)",
        opacity: 1,
      });
      gsap.to("#ball-loader", {
        duration: 0.2,
        borderWidth: "4px",
        top: 0,
        left: 0,
      });
    });

    //Blog Hover Effects
    $(
      "#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a"
    ).mouseenter(function (e) {
      gsap.to("#ball", {
        duration: 0.2,
        borderWidth: "1px",
        scale: 1,
        opacity: 0,
      });
    });

    $(
      "#blog-page-nav .page-numbers li a, .post-page-numbers, #post-content a, #post-form a, #post-comments a, .wp-block-search__button, .clapat-sidebar-widget a"
    ).mouseleave(function (e) {
      gsap.to("#ball", {
        duration: 0.3,
        borderWidth: "4px",
        scale: 0.5,
        opacity: 1,
      });
    });
  }
};

var ScrollEffects = window.ScrollEffects;
var isMobile = window.isMobile;
var Core = window.Core;

function PageLoad() {
  function initOnFirstLoad() {
    imagesLoaded("body", function () {
      gsap.set($("#main"), { opacity: 0 });
      gsap.to("#preload .logo", 0.25, {
        delay: 0.5,
        opacity: 0,
        onComplete: function () {
          gsap.to("#preload .logo", {
            zIndex: -1,
          });
        },
      });
      gsap.to("#preload .counter", 0.25, {
        delay: 0.5,
        opacity: 0,
        onComplete: function () {
          gsap.to("#preload .counter", {
            zIndex: -1,
          });
        },
      });
      gsap.to(".bar", 1.5, {
        delay: 0.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
        onComplete: function () {
          // gsap.set($(".site-header"), {top: '-100%', opacity: 0});

          gsap.set($(".home-banner-section .content h3 span"), {
            y: 120,
            opacity: 0,
          });
          gsap.set($(".home-banner-section .content h1 span"), {
            y: 100,
            opacity: 0,
          });
          gsap.set($(".home-banner-section .content p span"), {
            y: 80,
            opacity: 0,
          });
          gsap.set($(".home-banner-section .content p .line"), { x: -100 });
          gsap.set($(".home-banner-section .content .el-1"), { opacity: 0 });
          gsap.set($(".home-banner-section .el-1"), { opacity: 0 });
          gsap.set($(".home-banner-section .el-2"), { opacity: 0 });
          gsap.set($(".home-banner-section .el-3"), { opacity: 0 });
          gsap.set($(".home-banner-section .el-4"), { opacity: 0 });
          gsap.set($(".home-banner-section .content .__btn"), {
            y: 80,
            opacity: 0,
          });

          gsap.set($(".home-banner-section .img-box .thumb-img-1"), {
            scale: 0.2,
            opacity: 0,
          });
          gsap.set($(".home-banner-section .img-box .thumb-img-2"), {
            scale: 0.2,
            opacity: 0,
          });
          gsap.set($(".home-banner-section .img-box .thumb-img-3"), {
            opacity: 0,
          });

          // gsap.to($(".site-header"), {duration: 0.4, top: "0%", opacity: 1, stagger:0.1, delay:0, ease: 'linear'});
          gsap.to(
            $("#main"),
            {
              duration: 0.4,
              opacity: 1,
              stagger: 0.1,
              delay: 0,
              ease: "linear",
            },
            "-=0.6"
          );
          gsap.to($(".home-banner-section .content .caption-timeline span"), {
            duration: 0.7,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function () {},
          });
          gsap.to($(".home-banner-section .content .el-1"), {
            duration: 0.7,
            opacity: 1,
            stagger: 0.2,
            delay: 0,
            ease: Power3.easeOut,
            onComplete: function () {},
          });
          gsap.to($(".home-banner-section .content .__btn"), {
            duration: 0.7,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            delay: 0.4,
            ease: Power3.easeOut,
            onComplete: function () {},
          });

          gsap.to($(".home-banner-section .content p .line"), {
            duration: 1,
            x: 0,
            stagger: 0.2,
            delay: 0.4,
            ease: Power3.easeOut,
          });

          gsap.to($(".home-banner-section .img-box .thumb-img-1"), {
            duration: 1.5,
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            delay: 0.6,
            ease: Power3.easeOut,
            onComplete: function () {},
          });
          gsap.to($(".home-banner-section .img-box .thumb-img-2"), {
            duration: 1.5,
            scale: 1,
            opacity: 1,
            stagger: 0.3,
            delay: 0.8,
            ease: Power3.easeOut,
            onComplete: function () {},
          });

          gsap.to($(".home-banner-section .img-box .thumb-img-3"), {
            duration: 1,
            opacity: 1,
            stagger: 0.1,
            delay: 0.4,
            ease: Power3.easeOut,
            onComplete: function () {
              // gsap.to($(".home-banner-section .img-box .thumb-img-3 .img"), {
              //     duration: 1.5,
              //     scale: 1,
              //     rotate: '-6deg',
              //     opacity: 1,
              //     stagger: 0.1,
              //     delay: 0,
              //     ease: "back.inOut(1.7)"
              // });
            },
          });

          gsap.to($(".home-banner-section .el-1"), {
            duration: 1.5,
            opacity: 1,
            stagger: 0.2,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function () {},
          });

          gsap.to($(".home-banner-section .el-2"), {
            duration: 1.5,
            opacity: 1,
            stagger: 0.2,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function () {},
          });
          gsap.to($(".home-banner-section .el-3"), {
            duration: 1.5,
            opacity: 1,
            stagger: 0.2,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function () {},
          });
          gsap.to($(".home-banner-section .el-4"), {
            duration: 1.5,
            opacity: 1,
            stagger: 0.2,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function () {},
          });

          $("body").addClass("header-visible");
        },
      });
      gsap.to(".overlay", 1.5, {
        delay: 1,
        zIndex: -1,
      });
      gsap.to("#preload", 1.6, {
        delay: 1.5,
        zIndex: -1,
      });
    });
  }

  if (!$("body").hasClass("no-loading")) {
    var height = 0,
      perfData = window.performance.timing,
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = ((EstimatedTime / 100) % 500) * 10;

    // Loadbar Animation
    $(".loadbar").animate(
      {
        height: height + "%",
      },
      time
    );

    // // Percentage Increment Animation
    var PercentageID = $("#precent"),
      start = 0,
      end = 100,
      durataion = time + 0;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {
      var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);

      var timer = setInterval(function () {
        current += increment;
        $(obj).text(current);
        //obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    // Fading Out Loadbar on Finised
    setTimeout(function () {
      initOnFirstLoad();
    }, time);
  } else {
    initOnFirstLoad();
  }
}

function PageLoadActions() {
  if ($(".subpage-banner").length) {
    if ($(".subpage-banner").hasClass("has-img")) {
      $("body").addClass("header-light");
    }
  }
}

$(document).ready(function () {
  PageLoad();
  PageLoadActions();
  ScrollEffects();
  Core();
});

$(".space-top").css("padding-top", $(".site-header").height());




$(document).ready(function () {
  $(".select2-box").each(function () {
    var $this = $(this);
    $(".select2-js", this).select2({
      minimumResultsForSearch: Infinity,
      dropdownParent: $this,
    });
  });
});

$(".product-filter-button button").on("click", function () {
  $("body").toggleClass("sidebar-open");
  $(".body-overlay").toggleClass("opened");
});
$(".sidebar-modal-close-btn").on("click", function () {
  $("body").removeClass("sidebar-open");
  $(".body-overlay").removeClass("opened");
});

// Filter widget toggle
if ($(".sidebar-modal-widget").length) {
  $(".sidebar-modal-widget").each(function () {
    var $this = $(this);

    if ($this.hasClass("hidden")) {
      $this.find(".sidebar-modal-content-inner").hide();
      $this.addClass("hidden");
    }

    $this.find(".sidebar-modal-caret").on("click", function () {
      $this.toggleClass("hidden");
      $this.find(".sidebar-modal-content-inner").slideToggle();
    });
  });
}


if ($(".product-slide").length) {
  $(".product-slide").each(function () {
    var swiperProduct = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 2000,
      watchSlidesProgress: true,
      // loop: true,
      // autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      // },

      breakpoints: {
        992: {
          slidesPerView: 3.7,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },

      pagination: {
        el: $(this).find(".product-pagination")[0],
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },

      navigation: {
        nextEl: $(this).find(".product-btn-next")[0],
        prevEl: $(this).find(".product-btn-prev")[0],
      },
    });
  });
}

if ($(".home-collection-section").length) {
  $(".collection-slide").each(function () {
    var swiperCollection = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 2000,
      watchSlidesProgress: true,
      // loop: true,
      // autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      // },

      breakpoints: {
        992: {
          slidesPerView: "auto",
          spaceBetween: 100,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },

      pagination: {
        el: $(this).find(".collection-pagination")[0],
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },

      navigation: {
        nextEl: $(this).find(".collection-btn-next")[0],
        prevEl: $(this).find(".collection-btn-prev")[0],
      },
    });
  });
}

if ($(".home-product-slide-section").length) {
  $(".furniture-slide").each(function () {
    var swiperFurniture = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 2000,
      watchSlidesProgress: true,
      // loop: true,
      // effect: "fade",
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },

      pagination: {
        el: $(this).find(".furniture-pagination")[0],
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },

      navigation: {
        nextEl: $(this).find(".furniture-button-next")[0],
        prevEl: $(this).find(".furniture-button-prev")[0],
      },
    });
  });
}

if ($(".team-section").length) {
  $(".team-slide").each(function () {
    var swiperTeam = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      watchSlidesProgress: true,
      // loop: true,
      // autoplay: {
      //     delay: 6000,
      //     disableOnInteraction: false,
      // },

      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },

      pagination: {
        el: $(this).find(".team-pagination")[0],
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },

      navigation: {
        nextEl: $(this).find(".team-nav-next")[0],
        prevEl: $(this).find(".team-nav-prev")[0],
      },
    });
  });
}

if ($(".testimonial-section").length) {
  $(".testimonial-slide").each(function () {
    var swiperTestimonial = new Swiper(".testimonial-slide", {
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 2000,

      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".testimonial-slide .swiper-button-next",
        prevEl: ".testimonial-slide .swiper-button-prev",
      },
      pagination: {
        el: ".testimonial-slide .swiper-pagination",
        clickable: true,
      },
    });
  });
}

$(".qtybutton").on("click", function () {
  var $qtyButton = $(this);
  var oldValue = $qtyButton.parent().find("input").val();
  if ($qtyButton.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    if (oldValue > 1) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }
  $qtyButton.parent().find("input").val(newVal);
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
