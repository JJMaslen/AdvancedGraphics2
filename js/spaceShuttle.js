class Shuttle
{
    shuttleObject;
    startPosition;
    orbitDistance;
    rotation = new THREE.Vector3();
    counter;

    constructor(object, startPosition)
    {
        this.shuttleObject = object;
        this.startPosition = startPosition;
        this.rotation = this.shuttleObject.rotation;
        this.orbitDistance = distanceFromOrgin(this.startPosition);
        this.counter = 0;    
    }

    move(orbitObjectPosition)
    {
        var posX = (Math.sin(this.counter)*this.orbitDistance) + orbitObjectPosition.x;
        var posY = (Math.cos(this.counter)*this.orbitDistance) + orbitObjectPosition.y;
        var posZ = 0 + orbitObjectPosition.z;
        this.shuttleObject.position.set(posX,posY,posZ);
    }
}