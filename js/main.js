(() => {
	console.log ('fired!');

	let Icon = document.querySelector ('.icons 1')
	let Icons = document.querySelectorAll ('icons 1')

	function logMe() {

		console.log('clicked on an image');
	}

	Icon.addEventListener ("click", logMe)

	Icons.forEach(icon => icon.addEventListener("click", logMe)