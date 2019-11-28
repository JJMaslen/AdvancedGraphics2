
var ePress = false;

function mouseMove(event)
{
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var castPosition;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    castPosition = raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(camera.position.x,camera.position.y,camera.position.z)));
    
    if (ePress == true)
    {
        cubeCreator(castPosition);
        ePress = false;
    }

}

function keyPress(event)
{
    var keyCode = event.which;
    ePress = true;
}