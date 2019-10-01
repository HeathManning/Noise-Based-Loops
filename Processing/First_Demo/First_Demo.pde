int loopFrames = 512;
float loopProgress = 0;

NoiseLoop noise1, noise2;

void setup() {
  size(512, 512);
  ellipseMode(RADIUS);
  fill(255);
  noStroke();
  
  noise1 = new NoiseLoop(16);
  noise2 = new NoiseLoop(16);
}

void draw() {
  loopProgress = float(frameCount % loopFrames) / float(loopFrames);
  
  background(0);
  
  ellipse(width * noise1.Eval(loopProgress), height * noise2.Eval(loopProgress), 16, 16);
}
