function modelLoader(filePath)
{
	var loader = new THREE.GLTFLoader();

	loader.load(filePath, function(gltf) {
		const root = gltf.scene;
		scene.add(root);
		sceneObjects.push(root);
		return root;
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

	spaceShips.push(sphere);
	counters.push(0);
	orbitDistance.push(distanceFromOrgin(spawnPos));
	return sphere;
}

function shuttleCreator()
{
	model = modelLoader('models/spaceShip.glb');
	var object = new THREE.Object3D();
	object.add(model);
	scene.add(object);
	sceneObjects.push(object);
	return object;
}