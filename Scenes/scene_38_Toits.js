import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_38_Toits";
scene.texte = "scene_38.txt";
scene.BackSoundName="Orage";


const nbPlane = 3;
const tabPlaneName = ["background", "echelle", "girouette"];

const tabPosX = [0, 3, -48];
const tabPosY = [0, -32, 18];
const tabPosZ = [0, 0.5, 0.5];


const tabOpacity = [1, 0, 0];

const tabPlaneWidth = [null, 25, 25];
const tabPlaneHeight = [null, 35, 60];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/toit.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 39 },
  { type: "changerscene", value: 40 }
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
