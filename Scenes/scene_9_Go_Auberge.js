import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_9_Go_Auberge";
scene.texte = "scene_9.txt";
scene.BackSoundName="Medieval_1";


const nbPlane = 4;
const tabPlaneName = ["background", "chat", "rat", "auberge"];

const tabPosX = [0, 78, -37, 27];
const tabPosY = [0, 9, -25 ,26];
const tabPosZ = [0, -1, 0.5, 0.5];
const tabPlaneScale = [0.1, 2.5, 0.6];
const tabOpacity = [1, 0, 1, 0];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/commencement.png" }, //Image
  { type: null, value: null },
  { type: "texture", path: "Ressources/Images/objects/rat_gauche.png" }
];

const tabFonction = [
  { type: null, value: null },
  { type: null, value: null },
  { type: "changerscene", value: 11 },
  { type: "changerscene", value: 10 },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
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
