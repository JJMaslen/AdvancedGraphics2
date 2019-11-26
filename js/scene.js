// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);

// Create a new Three.JS scene
var scene = new THREE.Scene();

// Create a perspective camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer (with antialiasing)
var renderer = new THREE.WebGLRenderer({antialias: true});

function initScene()
{
	// Set the renderer size to the dimensions of the window
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Add the canvas to the page
	document.body.appendChild(renderer.domElement);
	// Create cubes
	
	for(var x = 0; x < 10; x++)
	{
			number = 1;
	}
	// Create a solid-colour material
	var material = new THREE.MeshLambertMaterial({ color: 0x00ff00});
	// Create a mesh from this geometry and material
	var cube = new THREE.Mesh(geometry, material);
	
	// Add the cube to the scene
	scene.add(cube);

	// Set camera position
	camera.position.z = 5;
	// initalise lighting
	addLighting();
	
	update();
}

function addLighting()
{
	let pointLight = new THREE.PointLight(0xdddddd)
	pointLight.position.set(-5, -3, 3)
	scene.add(pointLight)
	
	let ambientLight = new THREE.AmbientLight(0x505050)
	scene.add(ambientLight)
}

function update()
{
	renderer.render(scene, camera);
	
	cube.rotation.y += 0.05;
	
	requestAnimationFrame(update);
}