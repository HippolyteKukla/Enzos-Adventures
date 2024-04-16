import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_12_Rat_Droite";
scene.texte = "scene_12.txt";
scene.BackSoundName="Medieval_1";
scene.notMain = true;


const nbPlane = 3;
const tabPlaneName = ["background", "silence", "plonger"];

const tabPosX = [0, -41, 40];
const tabPosY = [0, 23, -22];
const tabPosZ = [0, 0.5, 0.5];
const tabScale = [1, 0.6, 0.6];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/ruseOUforce.png" }, //Image
  { type: "texture", path: "Ressources/Images/objects/logo_silence.png" },
  { type: "texture", path: "Ressources/Images/objects/logo_plongeons.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 13 },
  { type: "changerscene", value: 43 },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
  tabScale,
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
