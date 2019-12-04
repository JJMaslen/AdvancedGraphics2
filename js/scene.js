// When the window is loaded fully, call initScene
window.addEventListener("load", initScene);
// Main vars to set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
var controls;

var shaders = ShaderLoader.getShaders("shaders/vertex.vert","shaders/fragment.frag");
// All objects list
var sceneObjects = [];
var spaceShuttleList = [];

// Objects in scene
var sun;
var planet;
var shuttleModel;

// Demo variables
var demo = false;
var moveSun = false;

document.addEventListener('keydown', keyPress, false);

var uniforms = {
	texture1: { type: "t", value: THREE.ImageUtils.loadTexture( "models/textures/noiseTexture.png" ) }
}

shaderMaterial = new THREE.ShaderMaterial(
{
	uniforms: uniforms,
	vertexShader:shaders.vertex,
	fragmentShader:shaders.fragment
});

demoShader = false;
function initScene()
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// Model Loader
	var gltfLoader = new THREE.GLTFLoader();

	gltfLoader.load("models/spaceShuttle.glb",function(gltf)
	{
		if (demoShader == true)
		{
			gltf.scene.traverse(function (child){
				if (child.isMesh){
					child.material = shaderMaterial;
				}
			})
		}
		const root = gltf.scene;
		shuttleModel = root.children[0].clone()
	})
	
	gltfLoader.load("models/sun.glb",function(gltf)
	{
		const root = gltf.scene;
		sun = root;
		scene.add(sun);
	})

	gltfLoader.load("models/planet.glb",function(gltf)
	{
		gltf.scene.traverse(function (child){
			if (child.isMesh){
				child.material = shaderMaterial;
			}
		})
		const root = gltf.scene;
		planet = root;
		planet.position.set(0,20,0);
		scene.add(root);
	})

	// load in background image
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
	let pointLight = new THREE.PointLight(0xdddddd, 30)
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