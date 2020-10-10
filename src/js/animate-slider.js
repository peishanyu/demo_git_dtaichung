var transition = {
  section: {
    show: "slideInLeft",
    hide: "slideOutRight",
    delayShow: "delay0s"
  },
  h4: {
    show: "fadeInDown",
    hide: "fadeOutUp",
    delayShow: "delay1s"
  },
  p: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay1s"
  },
  footer: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay2s"
  } 
}

$(function(){
  // animate slider
  $(".anim-slider").animateSlider({
    autoplay: true,
    interval: 10000,
    animations: {
      0: transition,
      1: transition
    }
  });
});