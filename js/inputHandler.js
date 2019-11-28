var ePress = false;
var castPosition;

function mouseMove(event)
{
    castRay(event);
}

function keyPress(event)
{
    var keyCode = event.which;

    if (keyCode == 69) // 69 = e
    {
        var object = sphereCreator(castPosition, 2);
        spaceShips.push(object);
        
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