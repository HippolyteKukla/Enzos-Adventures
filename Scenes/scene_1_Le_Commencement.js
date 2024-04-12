import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_1_Le_Commencement";
scene.texte = "scene_1.txt";
scene.BackSoundName="Medieval_1";


const nbPlane = 6;
const tabPlaneName = ["background", "rester", "auberge", "foret1", "foret2"];

const tabPosX = [0, 14, 27, 15, 30];
const tabPosY = [0, -25 ,26, 2, -5];
const tabPosZ = [0, 0.5, 0.5, 0.4, 0.4];
const tabPlaneScale = [0.1];
const tabOpacity = [1];
const tabPlaneWidth = [null, 18, 38, 25, 25];
const tabPlaneHeight = [null, 29, 15, 17, 16]


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/commencement.png" }, //Image
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 2 },
  { type: "changerscene", value: 9 },
  { type: "changerscene", value: -1 },
  { type: "changerscene", value: -1 }
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
  false,
  tabOpacity,
  tabFonction,
);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
