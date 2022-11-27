let mediaQuery1 = window.matchMedia('(max-width: 1350px)');
let mediaQuery2 = window.matchMedia('(max-width: 768px)');
let mediaQuery3 = window.matchMedia('(max-width: 450px)');
let mediaQuery = 0;

function media() {
   
   if (mediaQuery3.matches) {
      let mediaQuery = 1;
      return mediaQuery;

   } else if(mediaQuery2.matches){
      let mediaQuery = 2;
      return mediaQuery;
   } else {
      let mediaQuery = 3;
      return mediaQuery;
   }
}

media()

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
	});
});

const tabs = [] = document.querySelectorAll(".tab");
const projects = [] = document.querySelectorAll(".project");
const illustration = [] = document.querySelectorAll(".illustration");
const mobile = [] = document.querySelectorAll(".mobile");
const photography = [] = document.querySelectorAll(".photography");
const web = [] = document.querySelectorAll(".webdesign");
const zooms = [] = document.querySelectorAll(".project-zoom");


const popupClose = document.querySelector('.close-popup')
const bodyScroll = document.querySelector('body')

console.log(typeof tabs);

for (var l = 0 ; l < projects.length; l++) {
	projects[l].classList.add('active-projects')
}

for (var i = 0 ; i < tabs.length; i++) {
   tabs[i].addEventListener('click' , function(event){
   		for (var f = 0 ; f < tabs.length; f++) {
   			tabs[f].classList.remove('active-tab')
   		}
   		event.target.classList.add('active-tab');
   		if (event.target.classList.contains('all')){
   			console.log(1);
   			for (var l = 0 ; l < projects.length; l++) {
   				projects[l].classList.add('active-projects')
   			}
   		} else if (event.target.classList.contains('illustration')) {
   			for (var l = 0 ; l < projects.length; l++) {
   				projects[l].classList.remove('active-projects')
   			}
   			for (var l = 0 ; l < illustration.length; l++) {
   				illustration[l].classList.add('active-projects')
   			} 			
   		} else if (event.target.classList.contains('photography')) {
      		for (var l = 0 ; l < projects.length; l++) {
   				projects[l].classList.remove('active-projects')
   			}
   			for (var l = 0 ; l < photography.length; l++) {
   				photography[l].classList.add('active-projects')
   			}   			
   		} else if (event.target.classList.contains('web')) {
      		for (var l = 0 ; l < projects.length; l++) {
   				projects[l].classList.remove('active-projects')
   			}
   			for (var l = 0 ; l < web.length; l++) {
   				web[l].classList.add('active-projects')
   			}   			
   		} else if (event.target.classList.contains('mobile')) {
      		for (var l = 0 ; l < projects.length; l++) {
   				projects[l].classList.remove('active-projects')
   			}
   			for (var l = 0 ; l < mobile.length; l++) {
   				mobile[l].classList.add('active-projects')
   			}   			
   		} else {
   			console.log(1)
   		}
   }); 
}


for (var i = 0 ; i < zooms.length; i++) {
	zooms[i].addEventListener('click', function(event){
		if (event.target.closest('.project')) {
			event.target.closest('.project').classList.add('project-active-popup')
         bodyScroll.classList.add('scroll-off')
         popupClose.classList.add('active-close')
		}
	});
}

popupClose.addEventListener('click', function(event){
   bodyScroll.classList.remove('scroll-off')
   popupClose.classList.remove('active-close')
   for (var l = 0 ; l < projects.length; l++) {
      if (projects[l].classList.contains('project-active-popup')){
         projects[l].classList.remove('project-active-popup')
      }
   }
})

document.addEventListener('keyup', function(e){
	for (var l = 0 ; l < projects.length; l++) {
      if (projects[l].classList.contains('project-active-popup')){
         projects[l].classList.remove('project-active-popup')
      }
   }
})


const playVideo = document.querySelector('.play-video')
const bannerVideo = document.querySelector('.video-banner__video')

playVideo.addEventListener('click', function(event){
   bannerVideo.play()
})


$(document).ready(function(){
   $('.post__slider').slick({
      dots: true,
      slidesToShow: media(),
      dots: false,
   });
});

buttonBurger = document.querySelector(".list-burger")
listBurger = document.querySelector(".menu-wrapper")

buttonBurger.addEventListener('click', function(event){
   if (event.target.closest('.list-burger')) {
      buttonBurger.classList.toggle('list-burger-active')
      listBurger.classList.toggle('menu-wrapper-active')
   }
})

const buttonList = document.querySelectorAll('.button')

for (i of buttonList){
   i.addEventListener('touchstart', function(event){
      if (event.target.closest('.button')) {
         event.target.classList.add('button-active')
      }
   })
   i.addEventListener('touchend', function(event){
      if (event.target.closest('.button')) {
        event.target.classList.remove('button-active')
      }
   })
}

$(document).ready(function() {
   $('.spoiler-open').click(function(event) {
      if ($('.footer__list').hasClass('one')){
         $('.spoiler-open').not($(this)).removeClass('active')
         $('.spoiler-item').not($(this).next()).slideUp(300)
      }
      $(this).toggleClass('active').next().slideToggle(400);
   });
});