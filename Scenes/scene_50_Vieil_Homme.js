import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_50_Vieil_Homme";
scene.texte = "scene_50.txt";
scene.BackSoundName="Respiration";

const nbPlane = 3;
const tabPlaneName = ["background", "vieux"];

const tabPosX = [0, -35];
const tabPosY = [0, -15];
const tabPosZ = [0, 0.5];

const tabOpacity = [1, 0];

const tabPlaneWidth = [null, 25];
const tabPlaneHeight = [null, 50];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/vieu_prison.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 51 },
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
