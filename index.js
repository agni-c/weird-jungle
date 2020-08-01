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

// Moving eyes

const eyeBalls = document.getElementsByClassName("ball");
document.addEventListener("mousemove", (e) => {
	let x = (e.clientX * 100) / window.innerWidth + "%";
	let y = (e.clientY * 100) / window.innerHeight + "%";
	console.log(eyeBalls.length);

	for (let i = 0; i < eyeBalls.length; i++) {
		eyeBalls[i].style.left = x;
		eyeBalls[i].style.top = y;
		eyeBalls[i].style.transform = `translate(-${x},-${y})`;
	}
});
