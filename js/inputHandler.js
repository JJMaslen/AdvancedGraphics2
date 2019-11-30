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
        planet.position.set(0,yMove,0);
    }

    if (keyCode == 83) // 83 = s
    {
        yMove -= 0.5;
        planet.position.set(0,yMove,0);
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