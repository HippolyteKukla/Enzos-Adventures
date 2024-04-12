// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création d'un cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Positionnement de la caméra
camera.position.z = 5;

// Ajout d'un gestionnaire d'événements pour le clic sur le cube
cube.userData.onClick = function() {
    console.log("Cube cliqué !");
};

cube.onClick = function(event) {
    event.stopPropagation();
    if (typeof cube.userData.onClick === 'function') {
        cube.userData.onClick();
    }
};

document.addEventListener('click', function(event) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Coordonnées de la souris normalisées
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    // Mise à jour du rayon
    raycaster.setFromCamera(mouse, camera);

    // Vérification des intersections avec le cube
    const intersects = raycaster.intersectObject(cube);

    // Si le cube est cliqué, appeler la fonction onClick
    if (intersects.length > 0) {
        cube.onClick(event);
    }
}, false);

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();