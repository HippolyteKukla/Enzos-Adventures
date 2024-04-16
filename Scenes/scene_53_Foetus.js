import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_53_Foetus";
scene.texte = "scene_53.txt";
scene.notMain = true;
scene.notLivre = false;

const nbPlane = 2;
const tabPlaneName = ["background", "foetus"];

const tabPosX = [0, -10];
const tabPosY = [0, -5];
const tabPosZ = [0, 0.5];

const tabOpacity = [1, 0];


const tabPlaneWidth = [null, 160];
const tabPlaneHeight = [null, 110];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/foetus_dragon.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: "changerscene", value: 55 },
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

scene.actualisation = function () {
  script.PlayAudio("Egg")
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
