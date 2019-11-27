function mouseClick(event)
{
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(sceneObjects);
    
    for (var i = 0; i < intersects.length; i++)
    {
        console.log(intersects[i]);
        if(intersects.length)
        {
            
        }
    }   
}