// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Activer la transparence pour la toile
//scene.background = new THREE.Color(0x000000); // Noir
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
loader.load(
    // Chemin de l'image
    '/ImagesTests/ruelle_assis.png',
    function (texture) {
        const imageWidth = texture.image.width; // Largeur de l'image
        const imageHeight = texture.image.height; // Hauteur de l'image
        const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);

        // Définir le filtre de texture sur "nearest" pour maintenir la netteté des pixels
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;

        // Créer le matériau avec la texture chargée
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Créer le mesh avec la géométrie et le matériau
        const plane = new THREE.Mesh(geometry, material);

        // Ajouter le mesh à la scène
        scene.add(plane);

        // Positionner la caméra pour que le plane remplisse l'écran
        const aspectRatio = window.innerWidth / window.innerHeight;
        const fieldOfView = 75;
        const distance = Math.max(imageWidth, imageHeight) / 2 / Math.tan(THREE.MathUtils.degToRad(fieldOfView / 2));
        camera.position.set(0, 0, distance*0.55);

        // Mettre à jour le champ de vision de la caméra et le renderer
        camera.aspect = aspectRatio;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

      // Ajouter un effet de contour uniquement au cube
      const outlineEffect = new THREE.OutlineEffect(renderer);
      outlineEffect.edgeStrength = 3; // Force du contour
      outlineEffect.edgeGlow = 0.5; // Lueur du contour
      outlineEffect.edgeThickness = 10; // Épaisseur du contour
      outlineEffect.visibleEdgeColor.set(0x000000); // Couleur du contour
      THREE.OutlineEffect.add(plane, outlineEffect)
      
    },
    undefined,
    function (error) {
        console.error('Erreur lors du chargement de l\'image', error);
    }
);

window.addEventListener('resize', function () {
  // Positionner la caméra pour que le plane remplisse l'écran
  const aspectRatio = window.innerWidth / window.innerHeight;

  // Mettre à jour le champ de vision de la caméra et le renderer
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
