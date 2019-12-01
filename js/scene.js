// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);
// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
var controls;

renderer.setClearColor(0x000000, 0.5);

// All objects list
var sceneObjects = [];
var spaceShuttleList = [];
var counters = [];
var orbitDistance = [];

var sun;
var planet;
var shuttleModel;

var demo = false;
var moveSun = false;

document.addEventListener('mousemove', mouseMove, false);
document.addEventListener('keydown', keyPress, false);

function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// Model Loader
	var gltfLoader = new THREE.GLTFLoader();

	gltfLoader.load("models/spaceShuttle.glb",function(gltf)
	{
		const root = gltf.scene;
		shuttleModel = root.children[0].clone()
	})
	
	gltfLoader.load("models/sun.glb",function(gltf)
	{
		const root = gltf.scene;
		scene.add(root);
		sun = root;
	})

	gltfLoader.load("models/planet.glb",function(gltf)
	{
		const root = gltf.scene;
		scene.add(root);
		planet = root;
		planet.position.set(0,20,0);
	})

	// texture Loader
	var textureLoader = new THREE.TextureLoader();
	textureLoader.load('images/background.jpg', function(texture)
	{
		scene.background = texture;
	})
	camera.position.z = 150;
	controls = new THREE.OrbitControls(camera,renderer.domElement);
	addLighting();	
	update();
}

function addLighting()
{
	let pointLight = new THREE.PointLight(0xdddddd)
	pointLight.position.set(0, 0, 0)
	scene.add(pointLight)
	
	let ambientLight = new THREE.AmbientLight(0xF2F2F2)
	scene.add(ambientLight)
}

function windowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth,window.innerHeight);
}

var demoNumber = 0;
var sunNumber = 0;
function update()
{
	// render scene
	renderer.render(scene, camera)
	// orbit controls
	controls.update();
	// resize window
	windowResize();

	for(var i = 0; i <spaceShuttleList.length; i++)
	{
		spaceShuttleList[i].counter += spaceShuttleList[i].counterIncrease;
		spaceShuttleList[i].updatePosition(sun.position);
		spaceShuttleList[i].updateRotation();
	}

	if (demo == true)
	{
		demoNumber += 0.01;
		demoShips(demoNumber);
	}

	if (moveSun == true)
	{
		sunNumber += 0.01;
		planet.position.set(sunNumber,sunNumber+yMove,sunNumber);
		sun.position.set(sunNumber,sunNumber,sunNumber);
	}

	// Next update
	requestAnimationFrame(update);
}