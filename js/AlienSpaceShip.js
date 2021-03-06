class AlienSpaceShip{
    constructor(x, y, width, height){
        var options={
            friction = 0,
            restitution = 0
        }
        this.image = loadImage("images/AlienSpaceShip.png")
        this.a1 = loadImage("images/Hatchling.png")
        this.a2 = loadImage("images/PrimoGeovishap.png")
        this.a3 = loadImage("images/Azdaha.png")
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
    }
}