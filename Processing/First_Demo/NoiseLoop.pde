public class NoiseLoop {
  
  public float radius, length;
  public int seed;
  
  public NoiseLoop(float length) {
    
    this.seed = int(random(256));
    
    this.length = length;
    this.radius = length / TWO_PI;
    
  }
  
  public float Eval(float time) {
    
    float angle = map(time, 0, 1, 0, TWO_PI);
    
    float x = this.radius * cos(angle);
    float y = this.radius * sin(angle);
    
    noiseSeed(this.seed);
    
    return noise(x, y);
    
  }
  
}
