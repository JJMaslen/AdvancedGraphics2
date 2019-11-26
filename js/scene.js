// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);

// Create a new Three.JS scene
var scene = new THREE.Scene();

// Create a perspective camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer (with antialiasing)
var renderer = new THREE.WebGLRenderer({antialias: true});

var sceneObjects = [];

function initScene()
{
	// Set the renderer size to the dimensions of the window
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Add the canvas to the page
	document.body.appendChild(renderer.domElement);
	// Create cubes

	for(var i = 0; i < 500; i++)
	{
		geometry = new THREE.BoxGeometry(1, 1, 1);
		material = new THREE.MeshLambertMaterial({ color: 0x0000FF});
		
		// Create a mesh from this geometry and material
		cube = new THREE.Mesh(geometry, material);
	
		// Add the cube to the scene
		scene.add(cube);
		sceneObjects.push(cube);
		var num = 30;
		var num2 = num/2;
		var x = Math.random()*num;
		var y = Math.random()*num;
		var z = Math.random()*num;
		sceneObjects[i].position.set(x-num2, y-num2, z-num2);
	}

	// Set camera position
	camera.position.z = 50;
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

var rot = 0;
function update()
{
	renderer.render(scene, camera);
	rot += 0.005;
	for(var i = 0; i < 500; i++)
	{
		sceneObjects[i].rotation.set(rot, rot, rot);
	}
	
	requestAnimationFrame(update);
}