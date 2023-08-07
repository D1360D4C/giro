let images = []; // Vector para almacenar las imágenes
let posx=[2];
let posxX=[2];
let ro=0;
let d=-0.4;
let nose=0;
let selec=-1;
let miVariable = "Hola Mundo";

function preload() {
  // Carga las imágenes antes de iniciar el programa
  
    images[0]=(loadImage('fondo.jpg'));
    images.push(loadImage('geoo.jpg'));
    images.push(loadImage('fondo.jpg'));
  
}

function setup() {
  createCanvas(650, 400, WEBGL); // Habilita el modo 3D para poder usar rotateY()
  posx[0]=-200;
  posx[1]=20;
  posx[2]=240;
  posxX[0]=25;
  posxX[1]=245;
  posxX[2]=465;
  
}

function draw() {
  background(200);

  for (let i = 0; i < 3; i++) {
    push();
    translate(posx[i] , 0, 0);
    
    if(i==selec){
      
      nose=nose+radians(2);
      if(nose<6.3){
        rotateY(nose); 
      }else{
        nose=0;
        selec=-1
      }
    }
    imageMode(CENTER);
    image(images[i], 0, 0, 200, 200); // Cambia el tamaño de las imágenes según tus necesidades
    pop();
    
    
  }
  document.getElementById("titulo").textContent = selec;
  document.getElementById("titulo4").textContent = nose;
  document.getElementById("titulo2").textContent = mouseY;
  document.getElementById("titulo3").textContent = mouseX;
}

function mouseClicked(){
  if(nose==0){//aca va un if de control por si ya fue seleccionado una carta
  for(let i=0;i<3;i++){
    
    if(mouseY > 100 && mouseY < 300 && mouseX > posxX[i] && mouseX < posxX[i]+200){
      
      selec = i;
      
    }
    
  }
  }
}
