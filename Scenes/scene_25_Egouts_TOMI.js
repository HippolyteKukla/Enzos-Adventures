import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_25_Egouts_TOMI";
scene.texte = "scene_25.txt";
scene.BackSoundName="egout";


const nbPlane = 4;
const tabPlaneName = ["background", "fleche", "tomi", "tomi_2"];

const tabPosX = [0, 85, 20, 20];
const tabPosY = [0, -12, -10, -12];
const tabPosZ = [0, 0.5, 0.5, 0.5];
const tabOpacity = [1,1,0, 0];
const tabScale =[1,0.5];


const tabPlaneWidth = [null, null, 40, 65];
const tabPlaneHeight = [null, null, 60, 10];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/egouts_trou_tomi.png" }, { type: 'texture', path: 'Ressources/Images/objects/fleche_droite.png' }
];

const tabFonction = [
  { type: null, value: null },
  { type: 'fonction', func: script.placeTomi, hasArgs: true, args:[1] },
  { type: 'fonction', func: script.placeTomi, hasArgs: true, args:[0] },
  { type: 'fonction', func: script.placeTomi, hasArgs: true, args:[0] },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  tabPlaneWidth,
  tabPlaneHeight,
  tabScale,
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
