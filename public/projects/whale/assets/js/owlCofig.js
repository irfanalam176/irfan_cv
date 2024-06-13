// owl
const left='<img src="./left.png" alt="" >'
const right='<img src="./right.png" alt="" >'
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav:true,
      navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
      margin:20,
      center:true,
      loop:true,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          992:{
              items:1
          },
          1000:{
              items:5
          }
      }
    });
    
  });