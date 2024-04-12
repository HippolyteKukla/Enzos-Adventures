import * as script from '../script.js';
const scene1 = new THREE.Scene();

// Créer un plane de couleur rouge
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.userData.isClickable = true
scene1.add(plane);
// Ajouter un gestionnaire d'événement de clic au plane
plane.userData.onClick = function() {
  console.log("go to scene1")
  script.changerScene(1); // Changer de scène lorsque le plane est cliqué
};

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);