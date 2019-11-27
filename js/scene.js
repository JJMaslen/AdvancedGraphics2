// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);

// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
var sceneObjects = [];

// Mouse position tracking
const mouse = {x : 0, y : 0};
document.addEventListener('mousemove', mouseClick, false);

function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	sceneObjects = cubeCreator();
	camera.position.z = 50;
	
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

function windowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth,window.innerHeight);
}

var rot = 0;

function update()
{
	renderer.render(scene, camera)
	console.log(mouse);
	rot += 0.005;
	for(var i = 0; i < 500; i++)
	{
		sceneObjects[i].rotation.set(rot, rot, rot);
	}
	
	windowResize()
	requestAnimationFrame(update);
}