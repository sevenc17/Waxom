let mediaQuery1 = window.matchMedia('(max-width: 1350px)');
let mediaQuery2 = window.matchMedia('(max-width: 768px)');
let mediaQuery = 0;

function media() {
   
   if (mediaQuery2.matches) {
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


const popup = document.querySelector('.list-projets__popup')

const popupContent = document.querySelector('.list-projets__popup-content')

const popupClose = document.querySelector('.close')

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

popupClose.addEventListener('click', function(event){
   console.log(event.target)
	if (event.target.classList.closest('.close')) {
		console.log(1)
	}
});

for (var i = 0 ; i < zooms.length; i++) {
	zooms[i].addEventListener('click', function(event){
		if (event.target.classList.contains('project-zoom')) {
			d = event.target.getAttribute('value');
			popupContent.innerHTML = `
			<img src="images/img/project-${d}.jpg" alt="">
			<div class="close"></div>
			`;
			popup.classList.add('popup-active')
		}
	});
}

document.addEventListener('keyup', function(e){
	console.log(e.code)
	if (popup.classList.contains('popup-active') & e.code == 'Escape') {
		popup.classList.remove('popup-active');
	}
})

// if (popup.classList.contains('.popup-active')) {
// 	popup.classList.remove('popup-active');
// }

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