import * as script from '../script.js';
const scene2 = new THREE.Scene();

// Créer un plane de couleur bleue
const planeGeometry = new THREE.PlaneGeometry(5, 5);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.userData.isClickable = true
scene2.add(plane);
// Ajouter un gestionnaire d'événement de clic au plane
plane.userData.onClick = function() {
  console.log("go to scene2")
  script.changerScene(2); // Changer de scène lorsque le plane est cliqué
};

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);