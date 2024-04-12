import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_7_Manger_Index";;
scene.texte = "scene_7.txt";
scene.BackSoundName="Croquer_doigt";

const nbPlane = 4;
const tabPlaneName = ["background", "chat", "fleche_haut","click_main"];

const tabPosX = [0, 12, 0, -85];
const tabPosY = [0, -70, 0 , -35];
const tabPosZ = [0, -1, 0.5, 1.2];
const tabPlaneScale = [1.33, 10, 0.5];
const tabOpacity = [1, 0, 1, 0];
const tabPlaneWidth = [null, null, null, 42];
const tabPlaneHeight = [null, null, null, 48];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/ruelle_assis.png" }, //Image
  { type: null, value: null },
  { type: "texture", path: "Ressources/Images/objects/fleche_haut.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: null, value: null },
  { type: "changerscene", value: 11 },
  { type: "theEnd", value: 8 },
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

scene.actualisation = function () {
  script.changementMain(2)
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
