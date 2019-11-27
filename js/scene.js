// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);
// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
var sceneObjects = [];
var controls;

document.addEventListener('mousemove', mouseMove, false);
document.addEventListener('keydown', keyPress, false);
function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var pos = new THREE.Vector3(0, 0, 0);
	sphereCreator(pos);

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
	renderer.render(scene, camera)
	controls.update();
	windowResize()
	requestAnimationFrame(update);
}