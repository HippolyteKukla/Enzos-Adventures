import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_34_Cuillere";
scene.texte = "scene_34.txt";

const nbPlane = 1;
const tabPlaneName = ["background"];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/cuillere.png" },
];

const tabFonction = [
  { type: "changerscene", value: 35 },
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
