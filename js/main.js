//This is a self-invoking
//also called sn IIFE
//also called a module

(()	=> {
	console.log("some message - from JavaScript");

	let theButton = document.querySelector("#myButton"),
		theHeading = document.querySelector('h1'),
		allSVGs = document.querySelectorAll(".svg");

	// this function changes the heading text
	function changeText() {
	theHeading.textContent = "Hello there";
}

function logoSVG() {
	console.log(this.id);
}

theButton.addEventListener("click", changeText);


allSVGs.forEach(item => item.addEventListener('click', logoSVG));


})();