var ePress = false;
var castPosition;
var yMove = 20;

function keyPress(event)
{
    var keyCode = event.which;
    if (keyCode == 69) // 69 = e
    {
        var ship = new Shuttle(shuttleModel.clone(),planet.position)
        spaceShuttleList.push(ship);
        scene.add(ship.shuttleObject);
    }

    if (keyCode == 87) // 87 = w
    {
        yMove += 0.5;
        planet.position.set(sunNumber,sunNumber+yMove,sunNumber);
    }

    if (keyCode == 83) // 83 = s
    {
        yMove -= 0.5;
        planet.position.set(sunNumber,sunNumber+yMove,sunNumber);
    }

    if (keyCode == 82) // 82 = r
    {
        demo = true;
    }

    if (keyCode == 84) // 84 = t
    {
        demo = false;
    }

    if (keyCode == 90) // 90 = z
    {
        moveSun = true;
    }

    if (keyCode == 88) // 88 = x
    {
        moveSun = false;
    }
}

function demoShips(number)
{
    if (spaceShuttleList.length > 500)
    {
        demo = false;
    }

    probability = Math.random();
    position = Math.random();

    spawn = new THREE.Vector3(0,0,0);
    spawn.y = (position*100)+20;
    if (probability > 0.5)
    {
        var ship = new Shuttle(shuttleModel.clone(),spawn);
        spaceShuttleList.push(ship);
        scene.add(ship.shuttleObject);
    }
}