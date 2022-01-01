let mySpawn = new spawn("egg", 1, 1,); //bit of a bodge

function setup() { 
  createCanvas(480, 640);
  frameRate(2*speed);
}

function preload() {
  bg = loadImage('BaseAssets/UI/PNG/bg.png');
  button1 = loadImage('BaseAssets/UI/PNG/button1.png');
  button2 = loadImage('BaseAssets/UI/PNG/button2.png');
  button3 = loadImage('BaseAssets/UI/PNG/button3.png');
  button4 = loadImage('BaseAssets/UI/PNG/button4.png');
  button1pressed = loadImage('BaseAssets/UI/PNG/button1pressed.png');
  button2pressed = loadImage('BaseAssets/UI/PNG/button2pressed.png');
  button3pressed = loadImage('BaseAssets/UI/PNG/button3pressed.png');
  button4pressed = loadImage('BaseAssets/UI/PNG/button4pressed.png');
  dot = loadImage('BaseAssets/UI/PNG/dot.png');
  screen = loadImage('BaseAssets/UI/PNG/screen.png');
  help = loadImage('BaseAssets/UI/PNG/help.png');
  helpverbose = loadImage('BaseAssets/UI/PNG/helpverbose.png');
  squarebrace = loadImage('BaseAssets/UI/PNG/squarebrace.png');
  leftarrow = loadImage('BaseAssets/UI/PNG/leftarrow.png');
  go = loadImage('BaseAssets/UI/PNG/go.png');
  rightarrow = loadImage('BaseAssets/UI/PNG/rightarrow.png');
  u = loadImage('BaseAssets/UI/PNG/u.png');
  i = loadImage('BaseAssets/UI/PNG/i.png');
  o = loadImage('BaseAssets/UI/PNG/o.png');
  ill = loadImage('BaseAssets/UI/PNG/ill.png');
  dead = loadImage('BaseAssets/UI/PNG/fail.png');
  poo = loadImage('BaseAssets/UI/PNG/caca.png');
  upressed = loadImage('BaseAssets/UI/PNG/upressed.png');
  ipressed = loadImage('BaseAssets/UI/PNG/ipressed.png');
  opressed = loadImage('BaseAssets/UI/PNG/opressed.png');
  spacemenu = loadImage('BaseAssets/UI/PNG/spacemenu.png');
  smpressed = loadImage('BaseAssets/UI/PNG/spacemenu1-pressed.png');
  hungrymtr = loadImage('BaseAssets/UI/PNG/hungrymtr.png');
  happymtr = loadImage('BaseAssets/UI/PNG/happymtr.png');
  eggidle = loadImage('BaseAssets/Spawn/Egg/idle.png');
  eggeat0 = loadImage('BaseAssets/Spawn/Egg/eat1.png');
  eggeat1 = loadImage('BaseAssets/Spawn/Egg/eat3.png');
  eggeat2 = loadImage('BaseAssets/Spawn/Egg/eat2.png');
  typeup = loadSound('BaseAssets/UI/OGG/typeup.ogg');
  typedown = loadSound('BaseAssets/UI/OGG/typedown.ogg');
  menuup = loadSound('BaseAssets/UI/OGG/menuup.ogg');
  menudown = loadSound('BaseAssets/UI/OGG/menudown.ogg');
  healsuccess = loadSound('BaseAssets/UI/OGG/healsuccess.ogg');
  healfail = loadSound('BaseAssets/UI/OGG/healfail.ogg');
  deadsound = loadSound('BaseAssets/UI/WAV/dead.wav');
  eat = loadSound('BaseAssets/UI/WAV/eat.wav');
  game = loadSound('BaseAssets/UI/WAV/game.wav');
}

function draw() {
  background('#f0f0f0');
  background(bg);

  switch (mode) {
    case "home":
      drawhome();
      drawglobal();
      mySpawn.decVals();
      break
    case "help":
      drawhelp();
      drawglobal();
      break
    case "helpv":
      drawhelpv();
      break
  }

  if (ukey == true && ikey == true && okey == true) {
    mode = "home";
    currentselect = 0;
    //put anything that should be reset when changing to home
  }

  console.log(currentframe);
  currentframe ++;
}