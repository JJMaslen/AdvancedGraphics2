var ePress = false;
var castPosition;
var yMove = 20;
function mouseMove(event)
{
    castRay(event);
}

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

    if (keyCode == 90)
    {
        moveSun = true;
    }

    if (keyCode == 88)
    {
        moveSun = false;
    }
}

function castRay(event)
{
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    castPosition = raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(camera.position.x,camera.position.y,camera.position.z)));
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