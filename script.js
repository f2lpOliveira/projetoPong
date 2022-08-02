let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let movimentaXBolinha = 5;
let movimentaYBolinha = 5;

function setup(){
	createCanvas(600, 400);
}
function draw(){
	background(0);
	bolinha();
	//movimentaBolinha();
	condicaoBolinha();
	rect(5, 150, 10, 90);
}
function bolinha(){
	circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
	xBolinha += movimentaXBolinha;
	yBolinha += movimentaYBolinha;
}
function condicaoBolinha(){
	if(xBolinha + raio > width || xBolinha - raio < 0){
		movimentaXBolinha *= -1;
	}
	if(yBolinha + raio > height || yBolinha - raio < 0){
		movimentaYBolinha *= -1;
	}
}