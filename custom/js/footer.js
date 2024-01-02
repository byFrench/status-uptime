window.onload = function(e){
	// Prepare Edit Footer
	var footer = document.getElementsByTagName("footer")[0];
	let currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentName = document.querySelector("#sapper > nav > div > div > a > div").textContent;
	var currentUrl = window.location.href;

	// Edit...
	footer.innerHTML = `

	<p>${currentYear} &copy; <a href="${currentUrl}" rel="noopener" title="${currentName}'s Website" target="_parent">${currentName}</a>. Powered by Upptime.

	`;
}