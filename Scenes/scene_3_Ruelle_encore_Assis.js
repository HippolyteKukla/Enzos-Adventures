import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_3_Ruelle_encore_Assis";
scene.texte = "scene_3.txt";
scene.BackSoundName="Medieval_1";

const nbPlane = 5;
const tabPlaneName = ["background", "chat", "fleche_haut", "genoux","click_main"];

const tabPosX = [0, 75, 0, -5, -85];
const tabPosY = [0, 15, 0 ,-49, -35];
const tabPosZ = [0, -1, 0.5, 0.5, 1.2];
const tabPlaneScale = [1.33, 3, 0.5];
const tabOpacity = [1, 0, 1, 0, 0];
const tabPlaneWidth = [null, null, null, 100, 42];
const tabPlaneHeight = [null, null, null, 28, 48];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/ruelle_assis.png" }, //Image
  { type: null, value: null },
  { type: "texture", path: "Ressources/Images/objects/fleche_haut.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: null, value: null },
  { type: "changerscene", value: 9 },
  { type: "changerscene", value: 4 },
  { type: "changerscene", value: 6 },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  tabPlaneWidth,
  tabPlaneHeight,
  tabPlaneScale,
  tabPosX,
  tabPosY,
  tabPosZ,
  tabTextureOrColor,
  undefined,
  tabOpacity,
  tabFonction,
);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
