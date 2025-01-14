//main
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

//keysPressed
let keysDown = {};
addEventListener("keydown", function (event) {
  keysDown[event.keyCode] = true;
});
addEventListener("keyup", function (event) {
  delete keysDown[event.keyCode];
});

//Add a music
let music = new Audio();
music.src = "sound/music.mp3";

//Win game
function winGame() {
  ctx.fillStyle = "black";
  ctx.globalAlpha = 0.8;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  ctx.font = "36px monospace";
  ctx.textAlign = "center";
  ctx.fillText("YOY WIN!", canvas.width / 2, canvas.height / 2);
}

//Game Over
function gameOver() {
  ctx.fillStyle = "black";
  ctx.globalAlpha = 0.8;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  ctx.font = "36px monospace";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
}

//create player
let player = {
  x: 20,
  y: -440,
  spawnx: 20,
  spawny: -440,
  xv: 0,
  yv: 0,
  w: 32,
  h: 32,
};

//ground object
let ground = [];
let level = 0;
let createLevel = () => {
  if (level == 8) {
    ground = [
      //1 platform main
      {
        x: 0,
        y: 475,
        h: 83,
        w: 1039,
      },
      //2 platform
      {
        x: 0,
        y: 100,
        w: 50,
        h: 400,
      },
      //3 platform
      {
        x: 50,
        y: 130,
        w: 50,
        h: 350,
      },
      //4 platform
      {
        x: 100,
        y: 170,
        w: 50,
        h: 305,
      },
      //5 platform
      {
        x: 150,
        y: 210,
        w: 50,
        h: 265,
      },
      //6 platform
      {
        x: 200,
        y: 250,
        w: 50,
        h: 225,
      },
      //7 platform
      {
        x: 250,
        y: 290,
        w: 50,
        h: 185,
      },
      //8 platform
      {
        x: 300,
        y: 330,
        w: 50,
        h: 145,
      },
      //9 platform
      {
        x: 350,
        y: 370,
        w: 50,
        h: 105,
      },
      //10 platform
      {
        x: 400,
        y: 410,
        w: 50,
        h: 65,
      },
      //11 platform
      {
        x: 450,
        y: 440,
        w: 50,
        h: 35,
      },
      //12 wall
      {
        x: 1030,
        y: 0,
        w: 20,
        h: 430,
      },
    ];
  }
  if (level == 7) {
    ground = [
      //1 platform main
      {
        x: 0,
        y: 475,
        h: 83,
        w: 350,
      },
      //2 platform
      {
        x: 350,
        y: 518,
        w: 340,
        h: 40,
      },
      //3 platform
      {
        x: 689,
        y: 280,
        w: 350,
        h: 278,
      },
      //4 platform ...
      {
        x: 445,
        y: 400,
        w: 50,
        h: 20,
      },
      //5 platform ...
      {
        x: 580,
        y: 320,
        w: 50,
        h: 20,
      },
      //6 platform
      {
        x: 1009,
        y: 100,
        w: 30,
        h: 250,
      },
      //7 platform
      {
        x: 880,
        y: 220,
        w: 30,
        h: 15,
      },
      //8 platform
      {
        x: 780,
        y: 160,
        w: 30,
        h: 15,
      },
      //9 platform
      {
        x: 900,
        y: 110,
        w: 30,
        h: 15,
      },
    ];
  }
  if (level == 6) {
    ground = [
      //1 platform
      {
        x: 0,
        y: 125,
        h: 433,
        w: 50,
      },
      //2 platform
      {
        x: 50,
        y: 125,
        h: 50,
        w: 840,
      },
      //3 up platform
      {
        x: 0,
        y: 0,
        h: 10,
        w: 1039,
      },
      //4  platform
      {
        x: 850,
        y: 175,
        h: 60,
        w: 40,
      },
      //5  platform
      {
        x: 889,
        y: 320,
        h: 40,
        w: 140,
      },
      //6 wall
      {
        x: 1029,
        y: 10,
        h: 350,
        w: 10,
      },
      //7  platform
      {
        x: 120,
        y: 320,
        h: 40,
        w: 769,
      },
      //8  platform mini
      {
        x: 760,
        y: 250,
        h: 70,
        w: 50,
      },
      //9  platform
      {
        x: 620,
        y: 250,
        h: 70,
        w: 50,
      },
      //10  platform
      {
        x: 480,
        y: 250,
        h: 70,
        w: 50,
      },
      //11  platform
      {
        x: 340,
        y: 250,
        h: 70,
        w: 50,
      },
      //12  platform
      {
        x: 200,
        y: 250,
        h: 70,
        w: 50,
      },
      //13  platform mini 2
      {
        x: 50,
        y: 430,
        h: 128,
        w: 50,
      },
      //14  platform
      {
        x: 150,
        y: 430,
        h: 128,
        w: 50,
      },
      //15  platform
      {
        x: 250,
        y: 430,
        h: 128,
        w: 50,
      },
      //16  platform
      {
        x: 350,
        y: 430,
        h: 128,
        w: 50,
      },
      //17  platform
      {
        x: 450,
        y: 430,
        h: 128,
        w: 50,
      },
      //18  platform
      {
        x: 550,
        y: 430,
        h: 128,
        w: 50,
      },
      //19  platform
      {
        x: 650,
        y: 430,
        h: 128,
        w: 50,
      },
      //20  platform
      {
        x: 750,
        y: 430,
        h: 128,
        w: 50,
      },
      //21  platform
      {
        x: 850,
        y: 430,
        h: 128,
        w: 50,
      },
      //22  platform
      {
        x: 950,
        y: 430,
        h: 128,
        w: 89,
      },
    ];
  }
  if (level == 5) {
    ground = [
      //1 platform
      {
        x: 0,
        y: 450,
        h: 109,
        w: 55,
      },
      //2 platform
      {
        x: 160,
        y: 450,
        h: 109,
        w: 40,
      },
      //3 platform
      {
        x: 320,
        y: 450,
        h: 109,
        w: 40,
      },
      //4 platform
      {
        x: 480,
        y: 450,
        h: 109,
        w: 40,
      },
      //5 platform
      {
        x: 640,
        y: 450,
        h: 109,
        w: 40,
      },
      //6 platform
      {
        x: 800,
        y: 450,
        h: 109,
        w: 40,
      },
      //7 up platform
      {
        x: 0,
        y: 0,
        h: 270,
        w: 800,
      },
      //8 platform
      {
        x: 765,
        y: 270,
        h: 60,
        w: 35,
      },
      //9 platform
      {
        x: 969,
        y: 125,
        h: 433,
        w: 70,
      },
      //10 platform
      {
        x: 929,
        y: 390,
        h: 10,
        w: 40,
      },
      //11 platform
      {
        x: 800,
        y: 320,
        h: 10,
        w: 40,
      },
      //12 platform
      {
        x: 929,
        y: 240,
        h: 10,
        w: 40,
      },
      //13 platform
      {
        x: 800,
        y: 160,
        h: 10,
        w: 44,
      },
      //14 up platform
      {
        x: 800,
        y: 0,
        h: 10,
        w: 239,
      },
    ];
  }
  if (level == 4) {
    ground = [
      //1 platform
      {
        x: 0,
        y: 320,
        h: 239,
        w: 50,
      },
      //2 platform
      {
        x: 100,
        y: 450,
        h: 109,
        w: 40,
      },
      //3 platform
      {
        x: 260,
        y: 410,
        h: 149,
        w: 40,
      },
      //4 platform
      {
        x: 410,
        y: 370,
        h: 188,
        w: 40,
      },
      //5 platform
      {
        x: 560,
        y: 330,
        h: 228,
        w: 40,
      },
      //6 platform
      {
        x: 710,
        y: 370,
        h: 188,
        w: 40,
      },
      //7 platform
      {
        x: 870,
        y: 410,
        h: 149,
        w: 40,
      },
      //8 platform
      {
        x: 999,
        y: 450,
        h: 109,
        w: 40,
      },
      //9 up platform
      {
        x: 0,
        y: 0,
        h: 240,
        w: 1039,
      },
    ];
  }
  if (level == 3) {
    ground = [
      //1 platform
      {
        x: 0,
        y: 320,
        h: 239,
        w: 80,
      },
      //2 platform little
      {
        x: 180,
        y: 260,
        h: 15,
        w: 30,
      },
      //3 platform little
      {
        x: 330,
        y: 220,
        h: 15,
        w: 30,
      },
      //4 platform little
      {
        x: 490,
        y: 210,
        h: 15,
        w: 30,
      },
      //5 platform little
      {
        x: 645,
        y: 180,
        h: 15,
        w: 30,
      },
      //6 platform little
      {
        x: 790,
        y: 250,
        h: 15,
        w: 30,
      },
      //7 platform
      {
        x: 959,
        y: 320,
        h: 239,
        w: 80,
      },
    ];
  }
  if (level == 2) {
    ground = [
      //1 platform
      {
        x: 0,
        y: 180,
        h: 379,
        w: 115,
      },
      //2 platform
      {
        x: 170,
        y: 180,
        h: 250,
        w: 115,
      },
      //3 platform
      {
        x: 340,
        y: 180,
        h: 250,
        w: 115,
      },
      //4 platform
      {
        x: 510,
        y: 180,
        h: 250,
        w: 115,
      },
      //5 platform little
      {
        x: 720,
        y: 440,
        h: 15,
        w: 35,
      },
      //6 platform little
      {
        x: 875,
        y: 408,
        h: 15,
        w: 35,
      },
      //7 platform
      {
        x: 954,
        y: 0,
        h: 245,
        w: 85,
      },
      //8 platform
      {
        x: 954,
        y: 320,
        h: 239,
        w: 85,
      },
    ];
  }
  if (level == 1) {
    ground = [
      //1 platform main
      {
        x: 0,
        y: 475,
        h: 83,
        w: 1039,
      },
      //2 platform
      {
        x: 390,
        y: 410,
        h: 20,
        w: 80,
      },
      //3 platform
      {
        x: 510,
        y: 325,
        h: 20,
        w: 80,
      },
      //4 platform
      {
        x: 380,
        y: 240,
        h: 20,
        w: 80,
      },
      //5 platform
      {
        x: 200,
        y: 200,
        h: 20,
        w: 80,
      },
      //6 platform
      {
        x: 700,
        y: 340,
        h: 20,
        w: 80,
      },
      //7 platform
      {
        x: 720,
        y: 210,
        h: 20,
        w: 80,
      },
      //8 platform
      {
        x: 525,
        y: 153,
        h: 20,
        w: 80,
      },
      //9 big platform
      {
        x: 919,
        y: 180,
        h: 295,
        w: 120,
      },
    ];
  }
  if (level == 0) {
    ground = [
      {
        x: 0,
        y: 475,
        w: 1039,
        h: 83,
      },
    ];
  }
};

//collision for gg player
let colliding = (object) => {
  if (
    player.x + player.w >= object.x &&
    player.x <= object.x + object.w &&
    -player.y + player.h >= object.y &&
    -player.y <= object.y + object.h
  ) {
    return true;
  }
  return false;
};

//update, physics, collision detection
let physics = 0;
let onground = 0;
let update = () => {
  physics += 1;

  //gravity
  player.yv -= 1;
  player.y += player.yv;
  for (let i = 0; i < ground.length; i++) {
    if (player.yv < 0) {
      while (colliding(ground[i])) {
        player.y += 1;
        player.yv = 0;
        onground = physics;
      }
    } else {
      while (colliding(ground[i])) {
        player.y -= 1;
        player.yv = 0;
      }
    }
  }

  //jump
  for (let i = 0; i < ground.length; i++) {
    if (onground > physics - 3 && 38 in keysDown) {
      player.yv = 12;
    }
  }

  //movement (left/right)
  if (13 in keysDown) {
    localStorage.clear();
  }
  if (39 in keysDown) {
    player.xv = 5;
  }
  if (37 in keysDown) {
    player.xv = -5;
  }
  player.xv *= 0.8;
  player.x += player.xv;
  for (let i = 0; i < ground.length; i++) {
    if (colliding(ground[i])) {
      player.x -= player.xv;
      player.xv = 0;
    }
  }
  if (player.x < 1) {
    player.x = 1;
  }

  let reset = () => {
    player.y = player.spawny;
    player.x = player.spawnx;
    player.xv = 0;
    player.yv = 0;
  };

  //Die in lava, Helth bar and localbd
  if (player.y < -490 + Math.cos(physics * 0.1) * 15) {
    lives--;
    reset();
  } else if (lives == 0) {
    gameOver();
    reset();
  } else if (level > BestLevel) {
    localStorage.setItem("lvl", level);
    localStorage.setItem("timer", minute + ":" + seconds + "." + milesec);
  }

  //End game
  if (level == 9) {
    winGame();
    reset();
  }

  //Next level
  if (player.x > 1039) {
    level += 1;
    reset();
  }
};

//Record
let BestLevel = localStorage.getItem("lvl");
let BestTime = localStorage.getItem("timer");

//Time
let minute = 0;
let seconds = 0;
let milesec = 0;
function time() {
  if (level > 0) {
    if (milesec >= 90) {
      milesec = 0;
      seconds += 1;
    } else if (seconds >= 60) {
      milesec = 0;
      seconds = 0;
      minute += 1;
    } else if (lives == 0) {
      time.reset;
    } else milesec += 1;
  }
}

//Healthbar
let lives = 3;

//Render
function draw() {
  //Draw background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //Main text
  if (level == 0) {
    ctx.fillStyle = "black";
    ctx.font = "40px Boldness"; //Montserrat,Boldness,Slot
    ctx.fillText("ICE CUBE", 520, 230);
    ctx.fillText("Made by: Dinur", 520, 279);
  } else if (level == 1) {
    ctx.fillStyle = "black";
    ctx.font = "35px Montserrat";
    ctx.fillText("Enjoy the game", 520, 100);
  } else if (level == 8) {
    ctx.fillStyle = "black";
    ctx.font = "40px Montserrat";
    ctx.fillText("Thanks for your attention!", 520, 100);
  }

  //Draw player
  ctx.fillStyle = "#00FFFF"; //#6495ED надо еще подобрать
  ctx.fillRect(player.x, 0 - player.y, player.w, player.h);

  //Draw lava
  ctx.fillStyle = "coral";
  ctx.fillRect(0, 490, 1040, Math.cos(physics * 0.1) * 15);
  ctx.fillRect(0, 490, 1040, 69);

  //Draw ground
  ctx.fillStyle = "#95dbff";
  for (let i = 0; i < ground.length; i++) {
    ctx.fillRect(ground[i].x, ground[i].y, ground[i].w, ground[i].h);
  }

  //Lives
  if (level > 0) {
    ctx.fillStyle = "black";
    ctx.font = "32px Montserrat";
    ctx.fillText("Lives:" + lives + ";", 60, 35);
  }

  //level
  if (level > 0) {
    ctx.fillStyle = "black";
    ctx.font = "32px Montserrat";
    ctx.fillText("Level:" + level + ";", 175, 35);
  }

  //Timer
  if (level > 0) {
    ctx.fillStyle = "black";
    ctx.font = "32px Montserrat";
    ctx.fillText("Time:", 275, 35);
    ctx.fillText(minute + ":", 335, 35);
    ctx.fillText(seconds + ".", 373, 35);
    ctx.fillText(milesec, 415, 35);
  }

  //Record
  ctx.fillStyle = "black";
  ctx.font = "32px Montserrat";
  ctx.fillText("Record:", 710, 35);
  ctx.fillText("BL:" + BestLevel + ";", 830, 35);
  ctx.fillText("BT:" + BestTime, 950, 35);
}

//Game loop
let loop = () => {
  music.play();
  time();
  winGame();
  gameOver();
  createLevel();
  draw();
  update();
  requestAnimationFrame(loop);
};
loop();
