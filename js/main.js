$(document).ready(function () {
  let write = $(".write");
  let writeDimension = write[0].getBoundingClientRect();
  write.css("position", "fixed");
  write.css("top", writeDimension.top);
  write.css("left", writeDimension.left);
  console.log(writeDimension);
  $(".watch-video-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  });
  $(".stat-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       dots: false,
    //     },
    //   },
    // ],
  });
  $("#photo_stories .photo-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
  // $(".stat-slider").on("afterChange", function (event, slick, currentSlide) {
  //   $(".content").hide();
  //   $(".content[data-id=" + (currentSlide + 1) + "]").show();
  // });

  $("#side_news .side-news-toggle").on("click", function () {
    $("#side_news .side-news").toggleClass("show");
    $("#side_news .out-toggle").toggleClass("show");
  });
  //sidebar
  $(".dismiss, .overlay").on("click", function () {
    $(".sidebar").removeClass("active");
    $(".overlay").removeClass("active");
  });

  $(".open-menu").on("click", function (e) {
    e.preventDefault();
    $(".sidebar").addClass("active");
    $(".overlay").addClass("active");
    // close opened sub-menus
    $(".collapse.show").toggleClass("show");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
  $(".sidebar").hover(
    function () {
      $(window).scroll().disable();
      $(this).scroll().enable();
    },
    function () {
      $(window).scroll().enable();
    }
  );
});
$(document).scroll(function () {
  checkNavSticky();
});

$(document).ready(function () {
  checkNavSticky();
});

function checkNavSticky() {
  let $topSection = $("#farsight_logo");
  $("#farsight_nav .navbar-brand .logo-primary ").toggleClass(
    "show",
    $(this).scrollTop() > $topSection.height() + 100
  );
  $("#farsight_nav ").toggleClass(
    "nav-shadow",
    $(this).scrollTop() > $topSection.height() + 100
  );
  // if( $(this).scrollTop() > $topSection.height() + 100){
  //   $('#farsight_nav .navbar-brand ').toggleClass("show");$('#farsight_nav').toggleClass('nav-shadow');
  // }
}
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//slick for stat
$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".slider-nav-thumbnails",
});

$(".side-news-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  autoplay: true,
});
$(".full-img").on("click", function (e) {
  e.preventDefault();
  let source = $(this).attr("source");
  let img = $("." + source).attr("src");
  $(".custom-overlay").attr("src", img);
  $(".overlay-img").toggleClass("show");
});
$(".overlay-close").on("click", function (e) {
  e.preventDefault();
  $(".overlay-img").toggleClass("show");
});

//wavy line
var canvas,
  ctx,
  p = function (x, y) {
    return { x: x, y: y };
  };

// drawing
$(function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  ctx.lineCap = "round";
  ctx.lineWidth = 4;

  ctx.strokeStyle = "rgba(50,30,120,0.5)";
  ctx.beginPath();
  ctx.wavy(p(80, 120), p(350, 120), 8, 12, 4);
  ctx.stroke();
});

CanvasRenderingContext2D.prototype.wavy = function (
  from,
  to,
  frequency,
  amplitude,
  step,
  negative
) {
  var cx = 0,
    cy = 0,
    fx = from.x,
    fy = from.y,
    tx = to.x,
    ty = to.y,
    i = 0,
    waveOffsetLength = 0,
    ang = Math.atan2(ty - fy, tx - fx),
    distance = Math.sqrt((fx - tx) * (fx - tx) + (fy - ty) * (fy - ty)),
    a = amplitude * (!negative ? 1 : -1),
    f = Math.PI * frequency;

  for (i; i <= distance; i += step) {
    waveOffsetLength = Math.sin((i / distance) * f) * a;
    cx =
      from.x +
      Math.cos(ang) * i +
      Math.cos(ang - Math.PI / 2) * waveOffsetLength;
    cy =
      from.y +
      Math.sin(ang) * i +
      Math.sin(ang - Math.PI / 2) * waveOffsetLength;
    i > 0 ? this.lineTo(cx, cy) : this.moveTo(cx, cy);
  }
};
