import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_61_Questions_Victoire";
scene.texte = "scene_61.txt";
scene.BackSoundName = null;
scene.noFleche = true;

const nbPlane = 2;
const tabPlaneName = [
  "background",
  "plane_texture_start",
];

const tabPosX = [0, 2];
const tabPosY = [0, 30];
const tabPosZ = [0, 0.5];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/questions_game.png" }, //Image

  { type: "texture", path: "Ressources/Images/questions/victoire.png" },
];

const tabFonction = [
  { type: 'changerscene', value: 46 },
  { type: 'changerscene', value: 46 }
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
  undefined,
  tabPosX,
  tabPosY,
  tabPosZ,
  tabTextureOrColor,
  undefined,
  undefined,
  tabFonction,
);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
