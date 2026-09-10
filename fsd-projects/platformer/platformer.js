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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    toggleGrid();

    // TODO 2 - Create Platforms
    
    createPlatform(0, 150, 100, 15, "black");
    createPlatform(100, 150, 15, 50, "black");
    createPlatform(100, 200, 1100, 15, "black");
    createPlatform(1200, 400, 100, 15, "black");
    createPlatform(900, 400, 100, 15, "black");
    createPlatform(600, 400, 100, 15, "black");
    createPlatform(300, 400, 100, 15, "black");
    createPlatform(0, 400, 100, 15, "black");
    createPlatform(100, 620, 1400, 15, "black");

    createPlatform(1380, 300, 30, 15, "red");
    createPlatform(1380, 400, 30, 15, "orange");
    createPlatform(1380, 500, 30, 15, "yellow");


    

    // TODO 3 - Create Collectables

    createCollectable("database", 30, 220, 0, 0);
    createCollectable("database", 1350, 40, 0, 0);
    createCollectable("database", 1280, 690, 0, 0);
    
    // TODO 4 - Create Cannons
    
    createCannon("top", 260, 1000);
    createCannon("top", 560, 1500);
    createCannon("top", 860, 1200);
    createCannon("top", 1160, 1300);
    createCannon("right", 250, 2000);
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
