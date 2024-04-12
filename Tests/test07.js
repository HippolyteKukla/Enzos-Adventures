import {ChangePath} from "/script.js";
const scene = new THREE.Scene();

export function CreateScene() {
  // Initialisation de la scène, de la caméra et du rendu
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Définir la taille désirée pour l'image
  const imageWidth = 5; // Largeur de l'image
  const imageHeight = 5; // Hauteur de l'image

  // Créer la géométrie avec la taille désirée
  const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  // Positionnement de la caméra
  camera.position.z = 5;

  document.addEventListener('click', function(event) {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      // Coordonnées de la souris normalisées
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

      // Mise à jour du rayon
      raycaster.setFromCamera(mouse, camera);

      // Vérification des intersections avec le cube
      const intersects = raycaster.intersectObject(plane);

      // Si le cube est cliqué, appeler la fonction onClick
      if (intersects.length > 0) {
        ChangePath("00")
      }
  }, false);
  
  // Fonction d'animation
  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }

  animate();
  return scene
}

export function getScene() {
    return scene;
}

export function Scene() {
    return true;
}
