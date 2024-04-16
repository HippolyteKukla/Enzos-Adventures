import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_30_Bebe_Cigogne";
scene.texte = "scene_30.txt";
scene.BackSoundName="Baby";


const nbPlane = 2;
const tabPlaneName = ["background", "bebe"]

const tabPosX = [0, -9];
const tabPosY = [0, -30];
const tabPosZ = [0, 0.5];
const tabOpacity = [1,0];
const tabScale =[0.2];


const tabPlaneWidth = [null, 45];
const tabPlaneHeight = [null, 56];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/bebe_cigogne.png" }
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 31 },
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
