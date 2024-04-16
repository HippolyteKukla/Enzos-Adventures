import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_23_Ruse_Ou_Force";
scene.texte = "scene_23.txt";
scene.BackSoundName="Trone";
scene.notMain = true;


const nbPlane = 3;
const tabPlaneName = ["background", "ruse", "force"];

const tabPosX = [0, -41.5, 39.5];
const tabPosY = [0, 23, -22];
const tabPosZ = [0, 0.5, 0.5];
const tabOpacity = [1,0,0];


const tabPlaneWidth = [null, 44, 44];
const tabPlaneHeight = [null, 62, 62];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/ruseOUforce.png" }, //Image
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 25 },
  {type: "changerscene", value: 24 }
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  tabPlaneWidth,
  tabPlaneHeight,
  undefined,
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
