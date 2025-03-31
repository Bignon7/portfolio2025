// /**	STYLE SWITCHER
//  *************************************************** **/
// jQuery(document).ready(function() {
// 	"use strict";


// 	// REMOVE # FROM URL
// 	$("a[href='#']").on("click", (function(e) {
// 		e.preventDefault();
// 	}));


// 	const overlay = createTransitionOverlay();
    
//     // Initialiser le thème
//     var cookie = readCookie("theme");
//     var thm = cookie ? cookie : getPreferredThemeStyleSheet() || "dark";
//     setActiveThemeStyleSheet(thm);
    
//     // Déterminer l'état initial de la checkbox
//     var checkbox = document.getElementById('themeSwitcher');
//     if (checkbox) {
//         checkbox.checked = thm === "dark";
        
//         checkbox.addEventListener('change', function() {
//             var newTheme = this.checked ? "dark" : "light";
            
//             // Animation de transition
//             overlay.style.opacity = '0.5';
            
//             setTimeout(function() {
//                 setActiveThemeStyleSheet(newTheme);
//                 overlay.style.opacity = '0';
//             }, 300);
//         });
//     }

// });

// function createCookie(name,value,days) {
// 	if (days) {
// 		var date = new Date();
// 		date.setTime(date.getTime()+(days*24*60*60*1000));
// 		var expires = "; expires="+date.toGMTString();
// 	} else {
// 		expires = "";
// 	}	document.cookie = name+"="+value+expires+";";
// }

// function readCookie(name) {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0;i < ca.length;i++) {
// 		var c = ca[i];

// 		while (c.charAt(0)==' ') {
// 			c = c.substring(1,c.length);
// 		}

// 		if (c.indexOf(nameEQ) == 0) {
// 			return c.substring(nameEQ.length,c.length);
// 		}
// 	}

// 	return null;
// }





// function setActiveThemeStyleSheet(thm) {
//     var i, a;
//     for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
//         if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("thm")) {
//             a.disabled = true;
//             if(a.getAttribute("thm") == thm) { 
//                 a.disabled = false; 
//             }
//         }
//     }
    
//     // Sauvegarde le thème dans un cookie
//     createCookie("theme", thm, 365);
// }

// // Fonction pour obtenir le thème actif
// function getActiveThemeStyleSheet() {
//     var i, a;
//     for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
//         if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("thm") && !a.disabled) { 
//             return a.getAttribute("thm"); 
//         }
//     }
//     return null;
// }

// // Fonction pour obtenir le thème préféré
// function getPreferredThemeStyleSheet() {
//     var i, a;
//     for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
//         if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("thm")) {
//             return a.getAttribute("thm");
//         }
//     }
//     return null;
// }



// function createTransitionOverlay() {
//     let overlay = document.querySelector('.theme-transition');
//     if (!overlay) {
//         overlay = document.createElement('div');
//         overlay.classList.add('theme-transition');
//         overlay.style.position = 'fixed';
//         overlay.style.top = '0';
//         overlay.style.left = '0';
//         overlay.style.width = '100%';
//         overlay.style.height = '100%';
//         overlay.style.backgroundColor = '#121212';
//         overlay.style.opacity = '0';
//         overlay.style.zIndex = '9999';
//         overlay.style.transition = 'opacity 0.3s ease';
//         overlay.style.pointerEvents = 'none';
//         document.body.appendChild(overlay);
//     }
//     return overlay;
// }











// /** ********************************************************************************************************** **/
// /** ********************************************************************************************************** **/
// /** ********************************************************************************************************** **/

// /**
//  @ON LOAD
//  **/
// var switcher_visible = 'false';
// window.onload = function(e) {

// 	// COLOR SCHEME
// 	var cookie = readCookie("theme");
// 	var thm = cookie ? cookie : getPreferredThemeStyleSheet();
// 	setActiveThemeStyleSheet(thm);

// 	// SWITCHER OPEN|CLOSED
// 	if(switcher_visible != 'false') {
// 		jQuery("#showSwitcher").trigger('click');
// 	}
// }























document.addEventListener('DOMContentLoaded', function() {
	const themeSwitcher = document.getElementById('themeSwitcher');
	const themeStyle = document.getElementById('theme-style');
	
	// Check for saved theme preference or use dark as default
	const currentTheme = localStorage.getItem('theme') || 'dark';
	
	// Set the initial theme
	if (currentTheme === 'light') {
	  themeStyle.href = 'css/style-light.css';
	  themeSwitcher.checked = true;
	} else {
	  themeStyle.href = 'css/style.css';
	  themeSwitcher.checked = false;
	}
	
	// Add event listener to the toggle button
	themeSwitcher.addEventListener('change', function() {
	  if (this.checked) {
		themeStyle.href = 'css/style-light.css';
		localStorage.setItem('theme', 'light');
	  } else {
		themeStyle.href = 'css/style.css';
		localStorage.setItem('theme', 'dark');
	  }
	});
  });