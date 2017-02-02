var x;
x=$(document);
x.ready(mouse);
var imagen1;
imagen1="<img src='";
var medidas="' height='478vw' width='1112vw'/>";
var imagencam="<img src='";
var imagensal="<img src='./imgs/galaxiapri.jpg' height='478vw' width='1112vw'/> ";

function mouse() {
	
	var uno;
	uno=$("#im1");
	uno.click(function() {
				mostrar("./imgs/g1.jpg");
						});
	uno.mouseover(function() {
				cambiar("./imgs/g1.jpg");
						});
	uno.mouseout(salir);

	var dos;
	dos=$("#im2");
	dos.click(function() {
				mostrar("./imgs/g2.jpg");
						});
	dos.mouseover(function() {
				cambiar("./imgs/g2.jpg");
						});
	dos.mouseout(salir);

	var tres;
	tres=$("#im3");
	tres.click(function() {
				mostrar("./imgs/g3.jpg");
						});
	tres.mouseover(function() {
				cambiar("./imgs/g3.jpg");
						});
	tres.mouseout(salir);

	var cuatro;
	cuatro=$("#im4");
	cuatro.click(function() {
				mostrar("./imgs/g4.jpg");
						});
	cuatro.mouseover(function() {
				cambiar("./imgs/g4.jpg");
						});
	cuatro.mouseout(salir);

	var cinco;
	cinco=$("#im5");
	cinco.click(function() {
				mostrar("./imgs/g5.jpg");
						});
	cinco.mouseover(function() {
				cambiar("./imgs/g5.jpg");
						});
	cinco.mouseout(salir);

	var seis;
	seis=$("#im6");
	seis.click(function() {
				mostrar("./imgs/g6.jpg");
						});
	seis.mouseover(function() {
				cambiar("./imgs/g6.jpg");
						});
	seis.mouseout(salir);

	var siete;
	siete=$("#im7");
	siete.click(function() {
				mostrar("./imgs/g7.jpg");
						});
	siete.mouseover(function() {
				cambiar("./imgs/g7.jpg");
						});
	siete.mouseout(salir);
} 

function mostrar(imagen){
	imagen1 +=imagen;
	imagen1 +=medidas;
	var x;
	x=$("#con2");
	x.html(imagen1);
	imagensal=imagen1;
	imagen1="<img src='";
}

function cambiar(imagen){
	imagencam +=imagen;
	imagencam +=medidas;
	var x;
	x=$("#con2");
	x.html(imagencam);
	imagencam="<img src='";
}

function salir(){
	var m;
	m=$("#con2");
	m.html(imagensal);
}