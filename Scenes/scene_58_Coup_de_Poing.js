import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_58_Coup_de_Poing";
scene.texte = "scene_58.txt";
scene.notMain = true;

const nbPlane = 1;
const tabPlaneName = ["background"];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/poing_garde_prison.png" },
];

const tabFonction = [
  { type: "changerscene", value: 59 },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  tabTextureOrColor,
  undefined,
  undefined,
  tabFonction,
);

scene.actualisation = function () {
  script.PlayAudio("Coup")
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
