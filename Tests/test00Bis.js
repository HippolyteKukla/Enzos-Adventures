

// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Définir la taille désirée pour l'image
const imageWidth = 5; // Largeur de l'image
const imageHeight = 5; // Hauteur de l'image

// Créer la géométrie avec la taille désirée
const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff0});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Positionnement de la caméra
camera.position.z = 5;

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

function getScene() {
    return scene;
}
