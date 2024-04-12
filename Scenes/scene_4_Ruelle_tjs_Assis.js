import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_4_Ruelle_tjs_Assis";;
scene.texte = "scene_4.txt";
scene.BackSoundName="Ronflement";
scene.notMain=true;

const nbPlane = 4;
const tabPlaneName = ["background", "chat", "fleche_haut", "genoux"];

const tabPosX = [0, 70, 0, -5];
const tabPosY = [0, -70, 0 ,-49];
const tabPosZ = [0, -1, 0.5, 0.5];
const tabPlaneScale = [1.33, 8.5, 0.5];
const tabOpacity = [1, 0, 1, 0];
const tabPlaneWidth = [null, null, null, 100];
const tabPlaneHeight = [null, null, null, 28]


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/ruelle_assis.png" }, //Image
  { type: null, value: null },
  { type: "texture", path: "Ressources/Images/objects/fleche_haut.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: null, value: null },
  { type: "changerscene", value: 9 },
  { type: "theEnd", value: 5 },
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
