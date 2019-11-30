// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);
// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
var renderer = new THREE.WebGLRenderer({antialias: true});
var controls;

// All objects list
var sceneObjects = [];
var spaceShips = [];
var counters = [];
var orbitDistance = [];

document.addEventListener('mousemove', mouseMove, false);
document.addEventListener('keydown', keyPress, false);

function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// load in Sun
	//modelLoader('models/sun.glb');
	sun = sphereCreator(new THREE.Vector3(0,0,0), 6);

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

var number = 0;
function update()
{
	// render scene
	renderer.render(scene, camera)
	// orbit controls
	controls.update();
	// resize window
	windowResize();

	for(var i = 0; i < spaceShips.length; i++)
	{
		var posX = (Math.sin(counters[i])*orbitDistance[i])+sun.position.x;
		var posY = (Math.cos(counters[i])*orbitDistance[i])+sun.position.y;
		var posZ = 0+sun.position.z;
		
		spaceShips[i].position.set(posX, posY, posZ);
		counters[i] += 0.01;
	}
	number += 0.01;
	sun.position.set(number,0,0);
	// Next update
	requestAnimationFrame(update);
}