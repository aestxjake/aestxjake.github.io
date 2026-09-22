$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(84, 114, 59)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    toggleGrid();

    // TODO 2 - Create Platforms 
 
    createPlatform(400, 550, 30, 200, "brown");
    createPlatform(310, 590, 200, 30, "darkgreen");
    createPlatform(320, 570, 180, 30, "darkgreen");
    createPlatform(330, 540, 160, 30, "darkgreen");
    createPlatform(340, 510, 140, 30, "darkgreen");
    createPlatform(350, 480, 120, 30, "darkgreen");
    createPlatform(360, 450, 100, 30, "darkgreen");
    createPlatform(370, 420, 80, 30, "darkgreen");
    createPlatform(380, 390, 60, 30, "darkgreen");

    createPlatform(0, 610, 20, 15, "darkgreen");
    createPlatform(0, 510, 20, 15, "darkgreen");
    createPlatform(0, 410, 20, 15, "darkgreen");
    createPlatform(0, 310, 20, 15, "darkgreen");

    createPlatform(530, 650, 80, 15, "darkgreen");
    createPlatform(730, 550, 80, 15, "darkgreen");
    createPlatform(930, 450, 800, 15, "darkgreen");

    createPlatform(100, 300, 200, 20, "white", -50, 1270, 4, 200, 200, 0);
    createPlatform(120, 280, 160, 20, "white", -30, 1290, 4, 180, 180, 0);

    createPlatform(100, 300, 20, 180, "darkgreen", 310, 310, 0, 610, 800, 3);
    
    // TODO 3 - Create Collectables

    createCollectable("diamond", 388, 350);
    createCollectable("steve", 40, 40);
    createCollectable("database", 355, 700);
    createCollectable("max", 1340, 40);
    createCollectable("kennedi", 1300, 410, );
   
    // TODO 4 - Create Cannons
    
    createCannon("top", 475, 1900, 15, 30, 275, 600, 2);
    createCannon("right", 790, 2400);
    createCannon("right", 480, 2000, 30, 15, 450, 700, 2);

    
    // EXTRA CHALLENGES - BAD PLATFORMS
 
    createBadPlatform(1000, 120, 10, 70, "yellow");
    createBadPlatform(600, 120, 10, 70, "yellow");
    createBadPlatform(550, 220, 1000, 5, "white");

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
