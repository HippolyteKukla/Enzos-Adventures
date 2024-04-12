import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_29_Attaquer_Roi";
scene.texte = "scene_29.txt";
scene.notMain = true;


const nbPlane = 1;
const tabPlaneName = ["background"]

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/roi_coupDePoing.png" }
];

const tabFonction = [
  { type: "changerscene", value: 30 },
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
