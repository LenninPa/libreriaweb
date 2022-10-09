let container = document.getElementById('CS_Container');
let close = document.querySelector(".container_Categories_BTTClose")
let main = document.getElementById("MCSection")
function ShowCat(){
	container.style.transition = '.5s';
	container.style.visibility = 'visible';
	container.style.opacity = '1';
	container.style.overflow = 'auto';
	container.style.zIndex = '100';
	main.style.opacity = '0';

	
}

function CloseCat(){
	container.style.transition = '.5s';
	container.style.opacity = '0';
	container.style.visibility = 'hidden';
	container.style.overflow = 'hidden';
	container.style.zIndex = '-100';
	main.style.opacity = '100';

}

close.addEventListener("click", CloseCat);
let newValue = documentElement