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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(0, 194, 42)"); // bottom wall
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

    // TODO 3 - Create Collectables

    createCollectable("database", 388, 350);
    
    // TODO 4 - Create Cannons
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
