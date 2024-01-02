window.onload = function(e){
	// Prepare Edit Footer
	var footer = document.querySelector("#sapper > footer.svelte-jbr799");
	let currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentName = document.querySelector("#sapper > nav > div > div > a > div").textContent;
	var currentUrl = window.location.href;

	// Edit...
	footer.innerHTML = `

	<span>
		<p>
			${currentYear} &copy; 
			<a href="${currentUrl}" rel="noopener" title="${currentName}'s Website" target="_self">
				${currentName}
			</a>. Powered by Upptime.
		</p>
	</span>

	`;
}