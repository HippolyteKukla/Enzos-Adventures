import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_52_Portail";
scene.texte = "scene_52.txt";
scene.BackSoundName="Forest";

const nbPlane = 4;
const tabPlaneName = ["background", "oeuf", "fleche_bas", "chat"];

const tabPosX = [0, 65, 0, 22];
const tabPosY = [0, -5, -45, 10];
const tabPosZ = [0, 0.5, 0.5, 0.5];

const tabOpacity = [1, 0, 1, 0];

const tabPlaneScale = [null, null, 0.5, 0.5];

const tabPlaneWidth = [null, 80];
const tabPlaneHeight = [null, 110];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/nid_du dragon.png" },
  { type: null, value: null },
  { type: "texture", path: "Ressources/Images/objects/fleche_bas.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "theEnd", value: 53 },
  { type: "changerscene", value: 56 },
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
