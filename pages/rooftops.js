var container = document.getElementById("container");
var p1 = document.getElementById("first");
var p2 = document.getElementById("second");

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener("scroll", function () {
	console.log(window.scrollY);
	if (window.scrollY < 850) {
		p1.style.marginRight = -1600 + window.scrollY * 2 + "px";
		p1.style.opacity = (window.scrollY * this.window.scrollY) / (850 * 850);
	}
	if (window.scrollY < 1520) {
		p2.style.marginLeft = -3000 + window.scrollY * 2 + "px";
		p2.style.opacity =
			((window.scrollY - 800) * (window.scrollY - 800)) / (720 * 720);
	}
});
