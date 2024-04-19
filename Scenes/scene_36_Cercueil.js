import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_36_Cercueil";
scene.texte = "scene_36.txt";
scene.notMain = true;
scene.notLivre = true;

const nbPlane = 2;
const tabPlaneName = ["background", "corde"];

const tabPosX = [0, 16];
const tabPosY = [0, 25];
const tabPosZ = [0, 0.5];

const tabOpacity = [1, 0];

const tabPlaneWidth = [null, 12];
const tabPlaneHeight = [null, 58];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/cercueil.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "fonction", func: script.Timer, hasArgs: false },
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
