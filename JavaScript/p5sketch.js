function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    fill(191);
    noStroke();
    ellipseMode(RADIUS);
}
  
function draw()
{
    background(31, 31, 47);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}