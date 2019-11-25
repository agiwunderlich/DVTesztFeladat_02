/* $(window).scroll(function() {    
    let scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".indexPage").addClass("scrolled1");
    }
    else if (scroll >= 20) {
        $(".indexPage").addClass("scrolled2");
    } else {
        $(".indexPage").removeClass("scrolled1");
        $(".indexPage").removeClass("scrolled2");
    }
}); */

/* $(document).ready(function() {
  $(".scrollspy").scrollSpy();
}); */

/* $('[data-spy="scroll"]').on("activate.bs.scrollspy", function() {
  $("div.point").addClass("active");
}); */



$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let body = document.body
    let html = document.documentElement;

    /* 2771 */

    let height = (Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight))/4;

    if (height >= scroll >= 0) {
        $("#point1").addClass("active");
    } else {
        $("#point1").removeClass("active");
    }

    if (scroll >= height) {
        $("#point2").addClass("active");
    } else {
        $("#point2").removeClass("active");
    }

    if (scroll >= 2*height) {
        $("#point3").addClass("active");
    } else {
        $("#point3").removeClass("active");
    }

    if (scroll >= 3*height) {
        $("#point3").addClass("active");
    } else {
        $("#point3").removeClass("active");
    }

})
