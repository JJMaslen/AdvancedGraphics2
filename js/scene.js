// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);
// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
var controls;

// All objects list
var sceneObjects = [];
var shuttle;

document.addEventListener('mousemove', mouseMove, false);
document.addEventListener('keydown', keyPress, false);
function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// load in Sun
	//sun = modelLoader('models/sun.glb');
	var pos = new THREE.Vector3(0,0,0);
	planet = sphereCreator(pos,1);

	shuttle = modelLoader('models/spaceShip.glb');

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
	
	let ambientLight = new THREE.AmbientLight(0xFFFFFF)
	scene.add(ambientLight)
}

function windowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth,window.innerHeight);
}

var counter = 0;
function update()
{
	// render scene
	renderer.render(scene, camera)
	// orbit controls
	controls.update();
	// resize window
	windowResize()

	counter += 0.01;
	if (counter > 11111111111116.28318)
	{
		counter = 0;
	}
	//shuttle.position = THREE.Vector3(counter, 0,0);
	shuttle.position.set(30,0,0);
	planet.position.set(counter,counter,0);
	//planet.position.set(Math.sin(counter)*5,Math.cos(counter)*5,0);
	// Next update
	requestAnimationFrame(update);
}