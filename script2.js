var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colorValue = document.querySelector("h3");
var body = document.getElementById("gradient");


function colorGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	colorValue.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorGradient);

color2.addEventListener("input", colorGradient);
