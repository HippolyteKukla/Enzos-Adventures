import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_21_Trone";
scene.texte = "scene_21.txt";
scene.BackSoundName="Trone";
scene.notMain = true;


const nbPlane = 3;
const tabPlaneName = ["background", "carotte", "roi"];

const tabPosX = [0, -70, 70];
const tabPosY = [0, 10, 10];
const tabPosZ = [0, 0.5, 0.5];
const tabPlaneScale = [1, 0.4, 0.4];
const tabOpacity = [1, 1, 1];


const tabPlaneWidth = [null, null, 76];
const tabPlaneHeight = [null, null, 80];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/trone.png" }, //Image
  {type: "texture", path: "Ressources/Images/objects/logo_carotte.png" },
  {type: "texture", path: "Ressources/Images/objects/logo_couronne.png" },
];

const tabFonction = [
  { type: null, value: null },
  {type: "theEnd", value: 22 },
  { type: "changerscene", value: 23 },
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
