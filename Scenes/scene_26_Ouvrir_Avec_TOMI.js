import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_26_Ouvrir_Avec_TOMI";
scene.texte = "scene_26.txt";
scene.BackSoundName="bataille";


const nbPlane = 1;
const tabPlaneName = ["background"]


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/combat_sainteCarotte.png" }
];

const tabFonction = [
  { type: "theEnd", value: 27 },
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
