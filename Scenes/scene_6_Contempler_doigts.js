import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_6_Contempler_doigts";
scene.texte = "scene_6.txt";
scene.BackSoundName="Medieval_1";
scene.notMain = true;

const nbPlane = 2;
const tabPlaneName = ["background", "fleche_droite"];

const tabPosX = [0, 105];
const tabPosY = [0, -10];
const tabPosZ = [0, 0.5];
const tabPlaneScale = [1.33, 0.7];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/main_zoom.png" },
  { type: "texture", path: "Ressources/Images/objects/fleche_droite.png" },
];

const tabFonction = [
  { type: "changerscene", value: 7 },
  { type: "changerscene", value: 4 }
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
  tabPlaneScale,
  tabPosX,
  tabPosY,
  tabPosZ,
  tabTextureOrColor,
  undefined,
  undefined,
  tabFonction,
);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
