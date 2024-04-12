// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Activer la transparence pour la toile
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créer la géométrie de l'image pixelisée
//const imageWidth = 10;
//const imageHeight = 16;

// Charger l'image pixelisée
const loader = new THREE.TextureLoader();
loader.load(
  // Chemin de l'image
  "/ImagesTest/ruelle_assis_sans_genoux.png",
  function (texture) {
    const imageWidth = texture.image.width; // Largeur de l'image
    const imageHeight = texture.image.height; // Hauteur de l'image
    const scale = Math.max(
      imageWidth / window.innerWidth,
      imageHeight / window.innerHeight,
    );
    console.log("scale = " + scale);
    const geometry = new THREE.PlaneGeometry(
      scale * imageWidth,
      scale * imageHeight,
    );
    // Définir le filtre de texture sur "nearest" pour maintenir la netteté des pixels
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    // Créer le matériau avec la texture chargée
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Créer le mesh avec la géométrie et le matériau
    const plane = new THREE.Mesh(geometry, material);

    // Ajouter le mesh à la scène
    scene.add(plane);
  },
  undefined,
  function (error) {
    console.error("Erreur lors du chargement de l'image", error);
  },
);

camera.position.z = 10;

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
