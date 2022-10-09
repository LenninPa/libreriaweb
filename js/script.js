let container = document.getElementById('CS_Container');//Contenedor de Categorias
let main = document.getElementById("MCSection");//Contenedor principal

let Close = document.querySelector(".container_Categories_BTTClose");//Boton de cerrar categorias
let Open = document.getElementById("Showbttn");//Para abrir categorias

Open.addEventListener("click", (e)=>{
	container.style.transition = '.5s';
	container.style.visibility = 'visible';
	container.style.opacity = '1';
	container.style.overflow = 'auto';
	container.style.zIndex = '100';
	main.style.opacity = '0';
	console.log(typeof(e))
});

Close.addEventListener("click", ()=>{
	container.style.transition = '.5s';
	container.style.opacity = '0';
	container.style.visibility = 'hidden';
	container.style.overflow = 'hidden';
	container.style.zIndex = '-100';
	main.style.opacity = '100';
});
