//video do youtube:
//https://youtu.be/1ZWvqwivwkw?feature=shared

//link do jogo em tela cheia:
//https://editor.p5js.org/felipe.pessoa.711/full/zdv3b91B7

//codigo do p5.js:
//https://editor.p5js.org/felipe.pessoa.711/sketches/zdv3b91B7

// variáveis responsáveis pelo deslocamento da personagem dentro do game:

var x;
var y;
var c = 0;
var xtampaA = 100
var ytampaA = 305
var xtampaB = 200
var ytampaB = 335
var xtampaC = 300
var ytampaC = 305

// variável correspondente à cada tela que o jogo possui:

var pontos = 0;
var tela = 0;
var Npontos = -2;
var botao = 1;
var hit;
var xcursor, ycursor;


// variáveis das imagens utilizadas no código:

var img;
var img1;
var img2;
var man;
var al;
var pf;
var jogo;
var fundo;
var tampa;
var som;
var oponente
var enfeite
var enfeite1
var aviao

function preload(){
  img = loadImage("img.png");
  man = loadImage("Man.png");
  jogo = loadImage("jogo.png");
  img1 = loadImage("caminho.png");
  img2 = loadImage("casa.png"); 
  al = loadImage("aluno.png");
  pf = loadImage("professor.png");
  fundo = loadImage("fundo.png");
  tampa = loadImage("Tampa.png");
  oponente = loadImage('oponente.png')
  enfeite = loadImage('enfeite.png')
  enfeite1 = loadImage('enfeite1.png')
  aviao = loadImage('aviao.png')
  
  soundFormats('mp3')
  som = loadSound('music.mp3')
}
function setup() {
  createCanvas(400, 400);
  hit = false;
  
  xcursor = 140;
  ycursor = 215;
  
  som.loop()
}

//menu do jogo

function draw(){
  background("#EB9145");
  if(tela==0){
    x = 10;
    y = 310;
    image(img, 70, 0, 270, 120);
    image(enfeite1, 0, 231, 100, 100)
    image(enfeite1, 300, 230, 100, 100)
    fill('black')
    text('BASQUETBALL PLAY', 202, 162);
    fill(500, 200, 0);
    text('BASQUETBALL PLAY', 200, 160);
    fill('black')
    rect(140,214, 124, 44, 15);
    rect(140,264, 124, 44, 15);
    rect(140,314,124, 44, 15);
    fill(47, 79, 100);
    rect(140,215, 120, 40, 15);
    rect(140,265, 120, 40, 15);
    rect(140,315,120, 40, 15);
    fill('white');
    textSize(25);
    textAlign(CENTER);
    textSize(24);
    text("Jogar", 200, 242);
    text("Instruções", 200, 292);
    text("Créditos", 200, 342);
  }
  
  //jogo
  
  if(tela == 0){
    pontos = 0
  }
  
  if(tela==1){
    background(img1);
    textSize(15);
    fill('white');
    text("X", 390, 15);
    noStroke()
    
    imageMode(CENTER)
    image(tampa, xtampaA, ytampaA, 30, 20)
    image(tampa, xtampaB, ytampaB, 30, 20)
    image(tampa, xtampaC, ytampaC, 30, 20)
    imageMode(CORNER)
    
    if(c%50==0){
      image(man, x, y, 25, 50);
    }
    if (x<=400 && x>0) {
      if (keyIsDown(RIGHT_ARROW)) {
        x = x + 5; 
      }
      if (keyIsDown(LEFT_ARROW)) {
        x = x - 5;
      }
      if (keyIsDown(UP_ARROW)) {
        y = y - 5;
      }
      if (keyIsDown(DOWN_ARROW)) {
        y = y + 5;
      }
    }
    if(x>=400){
      tela = 4;
      x = 10;
    }
    
    hit = collideRectRect(xtampaA, ytampaA, 10, 10, x, y, 25, 50);
    if(hit){
      tela = 11;
    }
    hit = collideRectRect(xtampaB, ytampaB, 10, 10, x, y, 25, 50);
    if(hit){
      tela = 11;
    }
    hit = collideRectRect(xtampaC, ytampaC, 10, 10, x, y, 25, 50);
    if(hit){
      tela = 11;
    }
    
}
  if(tela==2){
    fill('white');
    textSize(15);
    text("X", 390, 15);
    fill(47, 79, 100);
    rect(10, 100, 380, 150, 15);
    fill('white');
    textAlign(CENTER);
    text("Este jogo tem como objetivo, levar o personagem até"+"\n"+"sua casa para jogar basquete em seu notebook."+"\n"+" Vá até sua casa ultilizando as setas. Após isso"+"\n"+"ultilize o mouse para jogar e acertar na cesta"+"\n"+""+"\n"+"Boa sorte!", 200, 135);
    
    fill('white');
    textSize(15);
    text("X", 390, 15);
    fill(47, 79, 100);
    rect(10, 260, 380, 50, 15);
    fill('white');
    textAlign(CENTER);
    text('Clique ESC ou X no canto superior para voltar',200, 290);
  }
  if(tela==3){  
    fill('white');
    textSize(15);
    text("X", 390, 15);
    fill(47, 79, 100);
    rect(10, 100, 380, 150, 15);
    image(al, 300, 118, 52, 60);
    image(pf, 310, 182, 50, 60);
    fill('white');
    textAlign(CENTER);
    text("Jogo feito pelo Discente:"+"\n"+" Felipe Pessoa de Souza:"+" \n"+"\n"+"Sob a orientação do professor:"+"\n"+"Rummenigge Rudson:", 200, 150);
  }
  if(tela==4){
    background(img2)
    image(aviao, 0, 40, 100, 50)
    image(aviao, 120, 70, 100, 50)
    textSize(15);
    text("X", 390, 15);
    noStroke();
    fill("white");
    image(man, x, y, 25, 50);
    if(x<=400 && x>=10) {
      if(keyIsDown(RIGHT_ARROW)) {
        x = x + 5;
      }
      if(keyIsDown(LEFT_ARROW)) {
        x = x - 5;
      }
      if (keyIsDown(UP_ARROW)) {
        y = y - 5;
      }
      if (keyIsDown(DOWN_ARROW)) {
        y = y + 5;
      }
    }
    
    if(x>400){
      tela = 5;
      x=10;
    }
    if(x<10){
      tela = 1;
      x = 300;
    }
  }
  
  //colisão dos elementos
  
  if(tela==5){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    image(man, 90, 200, 38, 65);
    
    fill('blue');
    circle(202, 130, 1);
    fill('red');
    square(183, 120, 1, 0);
    fill('rgb(239,128,18)');
    circle(mouseX, mouseY, 20);
    
    hit = collideCircleCircle(mouseX, mouseY, 20, 202, 130, 1);
    if(hit){
      tela = 7
      pontos = pontos - Npontos;
      x = x - 320;
    }
    
    hit = collideRectCircle(183, 120, 1, 0, mouseX, mouseY, 20);
    if(hit){
      tela = 8;
      pontos = pontos + Npontos;
      x = x - 150;
    }
}
  
  //tela de resultado
    
  if(tela==7){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    textSize(15);
    fill("rgb(0,0,0)");
    text("X", 390, 15);
    textAlign(CENTER);
    fill('black');
    textSize(25);
    text("PARABÉNS", 201, 201);
    text('Pontos: ' + pontos, 251, 251)
    fill('rgb(32,128,32)');
    textSize(25);
    text("PARABÉNS", 200, 200);
    fill('rgb(33,134,33)');
    text('Pontos: ' + pontos, 250, 250);
    fill(47, 79, 100)
    rect(230,50, 100, 40, 15);
    fill('white')
    textSize(15)
    text('proxima fase', 280, 75)
  }
  
  if(tela==8){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    textSize(15);
    fill("black");
    text("X", 390, 15);
    textAlign(CENTER);
    fill('black');
    textSize(25);
    text("GAME OVER", 201, 201);
    text('Pontos: ' + Npontos, 251, 251)
    fill('rgb(231,23,23)');
    textSize(25);
    text("GAME OVER", 200, 200);
    text('Pontos: ' + Npontos, 250, 250);
  }
  
  if(tela==9){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    fill('black')
    rect(155,152, 100, 40, 15);
    rect(155,202, 100, 40, 15);
    fill(47, 79, 100);
    rect(150,150, 100, 40, 15);
    rect(150,200, 100, 40, 15);
    fill("white");
    textSize(25);
    textAlign(CENTER);
    textSize(25);
    text("Menu", 200, 180);
    text("Jogo", 200, 228);
  }
  
  if(tela==10){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    image(man, 90, 200, 38, 65);
    image(oponente, 100, 170, 100, 100)
    
    fill('blue');
    circle(202, 130, 1);
    fill('red');
    square(183, 120, 1, 0);
    fill('rgb(239,128,18)');
    circle(mouseX, mouseY, 20);
    fill('red')
    square(155, 182, 1, 0)
    
    hit = collideCircleCircle(mouseX, mouseY, 20, 202, 130, 1);
    if(hit){
      tela = 14
      pontos = pontos - Npontos;
      x = x - 320;
    }
    
    hit = collideRectCircle(183, 120, 1, 0, mouseX, mouseY, 20);
    if(hit){
      tela = 17;
      pontos = pontos + Npontos;
      x = x - 150;
    }

    hit = collideRectCircle(155, 182, 1, 0, mouseX, mouseY, 20);
    if(hit){
    tela = 17;
    }
  }
  
    if(tela==11){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    fill('black')
    rect(154,220, 100, 44, 15);
    textSize(15);
    fill("black");
    text("X", 390, 15);
    textAlign(CENTER);
    fill('black');
    textSize(25);
    text("GAME OVER", 201, 201);
    fill('rgb(231,23,23)');
    textSize(25);
    text("GAME OVER", 200, 200);
    fill(47, 79, 100);
    rect(150,220, 100, 40, 15);
    fill('white')
    textSize(20)
    text("Voltar", 200, 246);
  }
    if(tela==13){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    fill('black')
    rect(155,122, 100, 40, 15);
    rect(155,172, 100, 40, 15);
    rect(155,222, 100, 40, 15);
    fill(47, 79, 100);
    rect(150,120, 100, 40, 15);
    rect(150,170, 100, 40, 15);
    rect(150,220, 100, 40, 15);
    fill("white");
    textSize(25);
    textAlign(CENTER);
    textSize(25);
    text("Menu", 200, 150);
    text("Jogo", 200, 198);
    textSize(15)
    fill('rgb(69,214,69)')
    text('Frase secreta', 200, 245)
  }
   if(tela==14){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    textSize(15);
    fill("rgb(0,0,0)");
    text("X", 390, 15);
    textAlign(CENTER);
    fill('black');
    textSize(25);
    text("PARABÉNS", 201, 201);
    text('Pontos: ' + pontos, 251, 251);
    fill('rgb(32,128,32)');
    textSize(25);
    text("PARABÉNS", 200, 200);
    fill('rgb(33,134,33)');
    text('Pontos: ' + pontos, 250, 250);
   }
  
  if(tela==15){
    fill('white');
    textSize(13);
    text("X", 390, 15);
    fill(47, 79, 100);
    rect(10, 100, 380, 150, 15);
    fill('white');
    textAlign(CENTER);
    text("Como explica Newton em sua 3ᵃ lei, a lei de ação e reação" + "\n" + "se houver a ação de arremessar a bola" + "\n" + 'haverá a reação da conversão do ponto no jogo', 200, 150);
  }
  
   if(tela==16){
    fill('white');
    textSize(13);
    text("X", 390, 15);
    fill(47, 79, 100);
    rect(10, 100, 380, 150, 15);
    fill('white');
    textAlign(CENTER);
    text("Como explica Newton em sua 3ᵃ lei, a lei de ação e reação" + "\n" + "Se não houver a ação de arremessar a bola" + "\n" + 'não haverá reação da conversão do ponto no jogo', 200, 150);
  }
   
  if(tela==17){
    background(jogo);
    image(fundo, 74, 110, 253, 168);
    fill('black')
    rect(155,122, 100, 40, 15);
    rect(155,172, 100, 40, 15);
    rect(155,222, 100, 40, 15);
    fill(47, 79, 100);
    rect(150,120, 100, 40, 15);
    rect(150,170, 100, 40, 15);
    rect(150,220, 100, 40, 15);
    fill("white");
    textSize(25);
    textAlign(CENTER);
    textSize(25);
    text("Menu", 200, 150);
    text("Jogo", 200, 198);
    textSize(15)
    fill('rgb(250,74,15)')
    text('Frase secreta', 200, 245)
  }
}

function keyPressed(){
  if(tela == 0){
    if(keyIsDown(DOWN_ARROW)){
      botao++;
    }
    if(keyIsDown(UP_ARROW)){
      botao--;
    }
  }
  if(keyIsDown(ESCAPE)){
    tela = 0;
  }
  
  if(keyCode === UP_ARROW){
    if(ycursor === 265){
      ycursor = 215;
    }else if(ycursor === 315){
      ycursor = 265;
    }
  }else if(keyCode === DOWN_ARROW){
    if(ycursor === 215){
      ycursor = 265;
    }else if(ycursor === 265){
      ycursor = 315;
    }
  }else if(keyCode === ENTER){
    if(ycursor === 215){
      tela = 4;
    }else if(ycursor === 265){
      tela = 2;
    }else if(ycursor === 315){
      tela = 3;
    }
  }
}

function mouseClicked(){
  
//localização de teclas
  
    if(tela==0&&mouseX>140&&mouseX<250&&mouseY>215&&mouseY<255){
    tela = 1;
    }
    if(tela==0&&mouseX>140&&mouseX<250&&mouseY>265&&mouseY<305){
    tela = 2;
    }
    if(tela==0&&mouseX>140&&mouseX<250&&mouseY>315&&mouseY<355){
    tela = 3;
    }
    if(tela==9&&mouseX>150&&mouseX<250&&mouseY>150&&mouseY<200){
    tela = 0;
    }
    if(tela==9&&mouseX>150&&mouseX<250&&mouseY>200&&mouseY<220){
    tela = 5;
    }
    if(tela==7&&mouseX>230&&mouseX<360&&mouseY>50&&mouseY<230){
    tela = 10;
    }
    if(tela==11&&mouseX>150&&mouseX<250&&mouseY>220&&mouseY<255){
    tela = 0;
    }
    if(tela==13&&mouseX>150&&mouseX<250&&mouseY>120&&mouseY<140){
    tela = 0;
    }
    if(tela==13&&mouseX>150&&mouseX<250&&mouseY>150&&mouseY<200){
    tela = 5;
    }
    if(tela==13&&mouseX>150&&mouseX<250&&mouseY>220&&mouseY<240){
    tela = 15;
    } 
    if(tela==17&&mouseX>150&&mouseX<250&&mouseY>120&&mouseY<140){
    tela = 0;
    }
    if(tela==17&&mouseX>150&&mouseX<250&&mouseY>150&&mouseY<200){
    tela = 5;
    }
    if(tela==17&&mouseX>150&&mouseX<250&&mouseY>220&&mouseY<240){
    tela = 16;
    } 
  
  //localização do X

    if(tela==1&&mouseX>=380&&mouseY<=15){
      tela = 0;
    }
    if(tela==2&&mouseX>=380&&mouseY<=15){
      tela = 0;
    }
    if(tela==3&&mouseX>=380&&mouseY<=15){
      tela = 0;
    }
    if(tela==4&&mouseX>=380&&mouseY<=15){
      tela = 0;
    }
    if(tela==6&&mouseX>=380&&mouseY<=15){
      tela = 0;
    }
    if(tela==11&&mouseX>=380&&mouseY<=15){
      tela = 0;
    }
    if(tela==7&&mouseX>=380&&mouseY<=15){
      tela = 9;
    }
    if(tela==8&&mouseX>=380&&mouseY<=15){
      tela = 9;
    }
    if(tela==15&&mouseX>=380&&mouseY<=15){
      tela = 9;
    }
    if(tela==14&&mouseX>=380&&mouseY<=15){
      tela = 13;
    }
    if(tela==16&&mouseX>=380&&mouseY<=15){
      tela = 9;
    }
}