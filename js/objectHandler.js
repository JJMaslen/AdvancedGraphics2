function modelLoader(filePath)
{
	var loader = new THREE.GLTFLoader();

	loader.load(filePath, function(gltf) {
		scene.add(gltf.scene);

	}, undefined, function (error){
		console.error(error);
	} );
}

function cubeCreator(spawnPos)
{
	geometry = new THREE.CubeGeometry(1, 1, 1);
	material = new THREE.MeshLambertMaterial({ color: 0x0000FF});
	
	cube = new THREE.Mesh(geometry, material);

	cube.position.set(spawnPos.x,spawnPos.y,spawnPos.z);
	scene.add(cube);
	sceneObjects.push(cube);
	return cube;
}

function sphereCreator(spawnPos, size)
{
	geometry = new THREE.SphereGeometry(size, 15, 15);
	material = new THREE.MeshLambertMaterial({ color: 0x0000FF});
	
	sphere = new THREE.Mesh(geometry, material);

	sphere.position.set(spawnPos.x,spawnPos.y,spawnPos.z);
	scene.add(sphere);
	sceneObjects.push(sphere);
	return sphere;
}

function spawnSpaceShip()
{

}