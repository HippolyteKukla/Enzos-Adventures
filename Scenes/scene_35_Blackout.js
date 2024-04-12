import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_35_Blackout";
scene.texte = "scene_35.txt";
scene.notMain=true;
scene.notLivre = true;

const nbPlane = 1;
const tabPlaneName = ["background"];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/black_out_tourbillon.png" },
];

const tabFonction = [
  { type: "theEnd", value: 36 },
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


// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
