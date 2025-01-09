import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './index.css'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3); // Adjust these values as needed

const renderer = new THREE.WebGLRenderer(
  { 
    // antialias: true, 
    alpha: true 
  }
);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Better tone mapping for HDR
renderer.outputEncoding = THREE.sRGBEncoding; // Correct color encoding
document.getElementById('canvas').appendChild(renderer.domElement);
// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth motion
controls.dampingFactor = 0.05;
controls.enableZoom = true; // Enable zoom
controls.enablePan = true; // Enable panning

const rgbeLoader = new RGBELoader();
rgbeLoader.load('/limpopo_golf_course_1k.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  // scene.background = texture;
  scene.environment = texture;
});

// const model = {};
const loader = new GLTFLoader();
loader.load(
  './sec.glb', // Path to your model in the public folder
  (gltf) => {
    const model = gltf.scene;
    scene.add(gltf.scene);
    model.position.set(0, 1, 0);
    model.scale.set(1, 1, 1);
    const color = new THREE.Color("#f700a1");

    const texture = new THREE.TextureLoader().load('./pexels-mccutcheon-1191710.jpg' ); 
    // immediately use the texture for material creation 

    // const material = new THREE.MeshBasicMaterial( { color:color} );
    // model.children[0].children[1].material = material;

    renderer.render(scene, camera);
  },
  (xhr) => {
    console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
  },
  (error) => {
    console.error('An error occurred while loading the model:', error);
  }
);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();