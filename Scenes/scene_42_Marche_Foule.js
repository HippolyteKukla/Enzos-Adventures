import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_42_Marche_Foule";
scene.texte = "scene_42.txt";
scene.BackSoundName="Marche_2";


const nbPlane = 3;
const tabPlaneName = ["background", "bourse", "groupe"];

const tabPosX = [0, -42, 33];
const tabPosY = [0, -42, -6];
const tabPosZ = [0, 0.5, 0.5];
const tabOpacity = [1, 0, 0];


const tabPlaneWidth = [null, 26, 55];
const tabPlaneHeight = [null, 35, 82];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/marche.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: -1 },
  { type: "changerscene", value: -1 },
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
