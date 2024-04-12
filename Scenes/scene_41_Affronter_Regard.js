import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_41_Affronter_Regard";
scene.texte = "scene_41.txt";
scene.BackSoundName="Medieval_1";


const nbPlane = 3;
const tabPlaneName = ["background", "fleche", "plonger"];

const tabPosX = [0, -55, 37];
const tabPosY = [0, 0, -20];
const tabPosZ = [0, 0.5, 0.5];
const tabPlaneScale = [1, 0.5];
const tabOpacity = [1, 1, 0];


const tabPlaneWidth = [null, null, 76];
const tabPlaneHeight = [null, null, 80];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/debarrasOUruelle.png" }, //Image
  { type: "texture", path: "Ressources/Images/objects/fleche_gauche.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 42 },
  { type: "changerscene", value: 14 },
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
