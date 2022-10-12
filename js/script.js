let container = document.getElementById('CS_Container');//Contenedor de Categorias
let containerprducts = document.getElementById('Cproducts');//Contenedor de Productos
let main = document.getElementById("MCSection");//Contenedor principal
let Close = document.querySelector(".container_Categories_BTTClose");//Boton de cerrar categorias
let Open = document.getElementById("ShowBttn");//Para abrir categorias

Open.addEventListener("click", ()=>{
	container.style.transition = '.7s';
	container.style.translate = '0% ';
	container.style.overflow = 'auto';
	container.style.zIndex = '100';
	container.style.opacity = '1';
	container.style.animationTimingFunction = 'cubic-bezier(.66,1.09,1,.39)';
	containerprducts.style.height = '80vh'
	containerprducts.style.overflow = 'hidden'
});

Close.addEventListener("click", ()=>{
	container.style.transition = '.7s';
	container.style.translate = '-100% ';
	container.style.opacity = '0';
	container.style.animationTimingFunction = 'cubic-bezier(.66,1.09,1,.39)';
	containerprducts.style.overflow = 'auto'
	containerprducts.style.height = '100%'

});
