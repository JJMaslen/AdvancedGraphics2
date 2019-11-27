function modelLoader()
{

}

function cubeCreator()
{
    // Create cubes
	for(var i = 0; i < 500; i++)
	{
		geometry = new THREE.BoxGeometry(1, 1, 1);
		material = new THREE.MeshLambertMaterial({ color: 0x0000FF});
		
		cube = new THREE.Mesh(geometry, material);
	
		scene.add(cube);
		sceneObjects.push(cube);

		var num = 30;
		var num2 = num/2;
		var x = Math.random()*num;
		var y = Math.random()*num;
		var z = Math.random()*num;
		sceneObjects[i].position.set(x-num2, y-num2, z-num2);
    }
    
    return sceneObjects;
}