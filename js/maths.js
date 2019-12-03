function distanceFromOrgin(position)
{
    x1 = position.x;
    y1 = position.y;
    z1 = position.z;

    x2 = sun.position.x;
    y2 = sun.position.y;
    z2 = sun.position.z;

    distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2) + Math.pow(z2-z1,2));
    return distance;
}