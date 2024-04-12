import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_20_Sainte_Carotte";
scene.texte = "scene_20.txt";
scene.BackSoundName="Trone";
scene.notMain = true;


const nbPlane = 3;
const tabPlaneName = ["background", "tomi", "esclave"];

const tabPosX = [0, -75, 75];
const tabPosY = [0, -33, -32];
const tabPosZ = [0, 0.5, 0.5];
const tabOpacity = [1, 0, 0];


const tabPlaneWidth = [null, 42, 40];
const tabPlaneHeight = [null, 53, 55];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/trone+offrandes.png" }, //Image
];

const tabFonction = [
  { type: null, value: null },
  {type: 'fonction', func: script.findTomi, hasArgs: true, args:[21] },
  { type: "changerscene", value: 21 },
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
