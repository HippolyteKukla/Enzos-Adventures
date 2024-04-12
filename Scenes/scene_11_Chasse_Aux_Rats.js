import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_11_Chasse_Aux_Rats";
scene.texte = "scene_11.txt";
scene.BackSoundName="Medieval_1";


const nbPlane = 5;
const tabPlaneName = ["background", "rat_gauche", "rat_milieu", "rat_droite", "chat"];

const tabPosX = [0, -25, 15, 55, 8];
const tabPosY = [0, -40, -40 ,-40, -5];
const tabPosZ = [0, 0.5, 0.5, 0.5, -1];
const tabPlaneScale = [1, 0.7, 0.7, 0.7, 2]

const tabOpacity = [1, 1, 1, 1, 0];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/croisement.png" }, //Image
  { type: "texture", path: "Ressources/Images/objects/rat_gauche.png" },
  { type: "texture", path: "Ressources/Images/objects/rat_milieu.png" },
  { type: "texture", path: "Ressources/Images/objects/rat_droite.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 44 },
  { type: "changerscene", value: -1 },
  { type: "changerscene", value: 12 },
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
  tabOpacity,
  tabFonction,
);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
