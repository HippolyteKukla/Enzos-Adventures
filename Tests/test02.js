// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Définir la taille désirée pour l'image
const imageWidth = 10; // Largeur de l'image
const imageHeight = 10; // Hauteur de l'image

// Créer la géométrie avec la taille désirée
const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);

// Charger l'image
const loader = new THREE.TextureLoader();
loader.load(
    // Chemin de l'image
    '/ImagesTest/photo_dog.jpg',
    function (texture) {
        // Créer le matériau avec la texture chargée
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Créer le mesh avec la géométrie et le matériau
        const plane = new THREE.Mesh(geometry, material);
        plane.userData.isClickable = true; // Marquer le mesh comme cliquable

        // Ajouter le mesh à la scène
        scene.add(plane);

        // Rendre la tête du chien cliquable
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        document.addEventListener('click', function (event) {
            mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);

            intersects.forEach(intersect => {
              if (intersect.uv.x > 0.35 && intersect.uv.x < 0.65 && intersect.uv.y > 0.35 && intersect.uv.y < 0.65) {
                  
                  console.log("Tête du chien cliquée !");
              }
            });
        }, false);

        document.addEventListener('mousemove', function (event) {
            mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);

            let clickableFound = false;
            intersects.forEach(intersect => {
                if (intersect.object.userData.isClickable) {
                    clickableFound = true;
                }
            });

            if (clickableFound) {
                renderer.domElement.classList.add('clickable');
            } else {
                renderer.domElement.classList.remove('clickable');
            }
        }, false);
    },
    undefined,
    function (error) {
        console.error('Erreur lors du chargement de l\'image', error);
    }
);

// Positionnement de la caméra
camera.position.z = 6.5;

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
