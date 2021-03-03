const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//toggle tav
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach((link, index) => {
			if (link.getElementsByClassName.animation) {
				link.getElementsByClassName.animation = '';
			} else {
				link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 1.5
				}s`;
			}
		});

		//burger animation
		burger.classList.toggle('toggle');
	});

	nav.addEventListener('click', () => {
		nav.classList.remove('nav-active');

		//burger animation
		burger.classList.toggle('toggle');
	});
};

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementsByName("nav").style.backgroundColor =
//     }
// }

navSlide();

// const navSlide = () => {
// 	const burger = document.querySelector('.burger');
// 	const nav = document.querySelector('.nav-links');
// 	const navLinks = document.querySelectorAll('.nav-links a');

// 	burger.addEventListener('click', () => {
// 		//togle nav
// 		nav.classList.toggle('nav-active');

// 		//animate links
// 		navLinks.forEach((link, index) => {
// 			if (link.style.animation) {
// 				link.style.animation = '';
// 			} else {
// 				link.style.animation = `navLinkFade 0.5s ease forwards ${
// 					index / 7 + 0.3
// 				}s`;
// 			}
// 		});

// 		//burger animation
// 		burger.classList.toggle('toggle');

// 		// $('nav-active').on('click', function () {
// 		// 	$('#menu').hide();
// 		// 	$('#menu-icon').removeClass('active');
// 		// });
// 	});

// 	nav.addEventListener('click', () => {
// 		nav.classList.remove('nav-active');

// 		//burger animation
// 		burger.classList.toggle('toggle');
// 	});
// };

// navSlide();
