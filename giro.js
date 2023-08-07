let imgNormal; // Imagen en su posición normal
let imgDadaVuelta; // Imagen dada vuelta
let imagenActual; // Variable para controlar la imagen que se muestra
let anguloZ = 0; // Ángulo de rotación sobre el eje Z

function preload() {
  // Carga las imágenes antes de iniciar el programa
  imgNormal = loadImage('fondo.jpg');
  imgDadaVuelta = loadImage('geoo.jpg');
}


function setup() {
  createCanvas(400, 400, WEBGL); // Habilita el modo 3D
  imagenActual = imgNormal; // Inicia mostrando la imagen normal por defecto
  
}

function draw() {
  background(170);
  //push();
  noStroke();
  translate(0, 0, 0); // Asegura que la imagen esté en el plano Z = 0 para evitar efectos de perspectiva
  rotateY(anguloZ); // Rota el sistema de coordenadas 3D sobre el eje Z
  if (anguloZ > radians(90) && anguloZ < radians(270) ){
    imagenActual=imgDadaVuelta;
  }else{
      imagenActual=imgNormal;
  }
  texture(imagenActual);
  plane(250);
  //pop();
  
  if(anguloZ > radians(359)){
    anguloZ = radians(0);
  }
  anguloZ += radians(1);
  
  
}


function mouseClicked() {
  // Rota la imagen sobre el eje Z mientras se arrastra el mouse para lograr el efecto de giro gradual
  anguloZ -= radians(10); // Incrementa el ángulo de rotación en 5 grados (conversión a radianes)
}
