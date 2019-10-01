class noiseLoop
{
    constructor(radius)
    {
        this.radius = radius*1;
        this.centerPos = new Vec2(Math.random()*8192, Math.random()*8192); 
    }

    Sample(percentage)
    {
        let samplePos = Vec2.Add(this.centerPos, Vec2.FromAngle(percentage*Math.PI*2, this.radius))
        return noise(samplePos.x, samplePos.y);
    }
}

//fairly standard 2D vector class copied from my swarm rockets project
class Vec2
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    Magnitude()
    {
        return Vec2.Magnitude(this);
    }
    SquareMagnitude()
    {
        return Vec2.SquareMagnitude(this);
    }
    Angle()
    {
        return Vec2.Angle(this);
    }
    Clone()
    {
        return new Vec2(this.x*1, this.y*1);
    }
    Add(vec)
    {
        this.x = this.x + vec.x;
        this.y = this.y + vec.y;
        return this;
    }
    Subtract(vec)
    {
        this.x = this.x - vec.x;
        this.y = this.y - vec.y;
        return this;
    }
    Scale(scalar)
    {
        this.x = this.x * scalar;
        this.y = this.y * scalar;
        return this;
    }
    Clamp(magnitude)
    {
        if(this.Magnitude() > magnitude)
        {
            let dir = Vec2.Normalise(this);
            this.x = dir.x * magnitude;
            this.y = dir.y * magnitude;
        }
        return this
    }

    static Dot(v1, v2)
    {
        return v1.x*v2.x + v1.y*v2.y;
    }
    static Project(v1, v2)
    {
        return Vec2.Scale(v2, Vec2.Dot(v1, v2)/Vec2.SquareMagnitude(v2));
    }
    static ProjectionMagnitude(v1, v2)
    {
        return Vec2.Dot(v1, Vec2.Normalise(v2));
    }

    static SquareDistance(v1, v2)
    {
        return Vec2.SquareMagnitude(Vec2.Subtract(v2, v1));
    }
    static Distance(v1, v2)
    {
        return Math.sqrt(Vec2.SquareDistance(v1, v2));
    }
    static SquareMagnitude(vec)
    {
        return vec.x*vec.x + vec.y*vec.y;
    }
    static Magnitude(vec)
    {
        return Math.sqrt(Vec2.SquareMagnitude(vec));
    }
    static Normalise(vec)
    {
        let r = vec.Magnitude();
        if(r == 0)
        {
            return new Vec2(0, 0);
        }
        return new Vec2(vec.x/r, vec.y/r);
    }
    static Angle(vec)
    {
        return Math.atan2(vec.y, vec.x);
    }
    static Add(v1, v2)
    {
        return new Vec2(v1.x + v2.x, v1.y + v2.y);
    }
    static Subtract(v1, v2)
    {
        return new Vec2(v1.x - v2.x, v1.y - v2.y);
    }
    static Scale(vec, scalar)
    {
        return new Vec2(vec.x*scalar, vec.y*scalar);
    }
    static FromAngle(angle, magnitude)
    {
        return new Vec2(Math.cos(angle), Math.sin(angle)).Scale(magnitude);
    }
    static Rotated(vec, deltaAngle)
    {
        return Vec2.FromAngle(vec.Angle() + deltaAngle, vec.Magnitude());
    }
    static Lerp(v1, v2, t)
    {
        return Vec2.Add(Vec2.Scale(v1, 1.0-t), Vec2.Scale(v2, t));
    }
    static Random(radius)
    {
        return Vec2.FromAngle(Math.random()*Math.PI*2, radius);
    }
}