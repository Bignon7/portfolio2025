/**	STYLE SWITCHER
 *************************************************** **/
jQuery(document).ready(function() {
	"use strict";


	// REMOVE # FROM URL
	$("a[href='#']").on("click", (function(e) {
		e.preventDefault();
	}));



})






















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