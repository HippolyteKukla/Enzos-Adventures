// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création du loader pour charger le fichier glTF
const loader = new THREE.GLTFLoader();

// Chargement du modèle glTF
loader.load(
    // URL du fichier glTF
    '/Images/objects/champifion.gltf',
    // Fonction de chargement
    function (gltf) {
        // Ajout du modèle chargé à la scène
        scene.add(gltf.scene);
    },
    // Fonction appelée lorsqu'il y a une erreur de chargement
    function (xhr) {
        console.error('Erreur de chargement', xhr);
    }
);

// Positionnement de la caméra
camera.position.z = 5;

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();