const circle = document.querySelector(".circle");

//Following circle logic
document.addEventListener("mousemove", (e) => {
	circle.setAttribute(
		"style",
		`top:${e.pageY - 10}px; left: ${e.pageX - 10}px;`
	);
	// console.log(e.pageX, e.pageY);
});

document.addEventListener("click", (e) => {
	circle.classList.add("expand");
	setTimeout(() => {
		circle.classList.remove("expand");
	}, 500);
});
