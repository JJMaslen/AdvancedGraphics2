// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);
// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
var controls;
// All objects list
var sceneObjects = [];
// Spaceship list
var spaceShips = [];

// Other Stuff
var counter = 0;

document.addEventListener('mousemove', mouseMove, false);
document.addEventListener('keydown', keyPress, false);
function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var pos = new THREE.Vector3(0, 0, 0);

	sun = sphereCreator(pos, 5);
	planet = sphereCreator(pos, 2);
	planet.position.set(20,0,0);
	spaceShips.push(planet);
	camera.position.z = 50;
	controls = new THREE.OrbitControls(camera,renderer.domElement);
	addLighting();	
	update();
}

function addLighting()
{
	let pointLight = new THREE.PointLight(0xdddddd)
	pointLight.position.set(0, 0, 0)
	scene.add(pointLight)
	
	let ambientLight = new THREE.AmbientLight(0x505050)
	scene.add(ambientLight)
}

function windowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth,window.innerHeight);
}

function update()
{
	// render scene
	renderer.render(scene, camera)
	// orbit controls
	controls.update();
	// resize window
	windowResize()

	// Other things
	counter++;
	for (i = 0; i < spaceShips.length; i++)
	{
		var axis1 = (Math.sin(counter/200))*10;
		var axis2 = (Math.cos(counter/200))*10;
		var axis3 = (Math.cos(counter/200))*10;

		spaceShips[i].position.set(sun.position.x+axis1,sun.position.y+axis2, sun.position.z+axis3);
	}

	// Next update
	requestAnimationFrame(update);
}