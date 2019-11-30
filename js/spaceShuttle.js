class Shuttle
{
    shuttleObject;
    startPosition;
    orbitDistance;
    counter;

    constructor(object, startPosition)
    {
        this.shuttleObject = object;
        this.startPosition = startPosition;
        this.orbitDistance = distanceFromOrgin(this.startPosition);
        this.counter = 0;    
    }

    updatePosition(orbitObjectPosition)
    {
        var posX = (Math.sin(this.counter)*this.orbitDistance) + orbitObjectPosition.x;
        var posY = (Math.cos(this.counter)*this.orbitDistance) + orbitObjectPosition.y;
        var posZ = 0 + orbitObjectPosition.z;
        this.shuttleObject.position.set(posX,posY,posZ);
        
    }

    updateRotation()
    {
        var rotX = 0;
        var rotY = 0;
        var rotZ = -this.counter;
        this.shuttleObject.rotation.set(rotX,rotY,rotZ);
    }
}