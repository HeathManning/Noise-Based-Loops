var particles = [];
var loopDuration = 5.0;
var time = 0;
var lastTime = 0;
var elapsedTime = 0;
var loopTime = 0;
var center = new Vec2(window.innerWidth/2, window.innerHeight/2);

function setup()
{
    for(let i = 0; i < 256; i++)
    {
        particles.push(new TestParticle());
    }

    createCanvas(window.innerWidth, window.innerHeight);
    fill(191);
    noStroke();
    ellipseMode(RADIUS);
}
  
function draw()
{
    time = lastTime + 1/60;
    elapsedTime = elapsedTime + time - lastTime;
    lastTime = time*1;
    loopTime = (elapsedTime % loopDuration) / loopDuration;
    background(0);
    translate(center.x, center.y);

    for(let i = 0; i < particles.length; i++)
    {
        //particles[i].Draw(loopTime);
        push();
        stroke(191);
        strokeWeight(1);
        //line(particles[(i+1)%particles.length].position.x, particles[(i+1)%particles.length].position.y, particles[i].position.x, particles[i].position.y);
        pop();
        particles[i].Draw(loopTime);
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    center = new Vec2(window.innerWidth/2, window.innerHeight/2);
}