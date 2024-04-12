import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_51_Baguette";
scene.texte = "scene_51.txt";

const nbPlane = 3;
const tabPlaneName = ["background", "droite", "gauche"];

const tabPosX = [0, 18, -8];
const tabPosY = [0, -43, -43];
const tabPosZ = [0, 0.5, 0.5];

const tabPlaneScale = [null, 0.5, 0.5];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/baguette_zoom.png" }, //Image
  { type: "texture", path: "Ressources/Images/objects/fleche_droite.png" },
  { type: "texture", path: "Ressources/Images/objects/fleche_gauche.png" },
];

const tabFonction = [
  { type: null, value: null },
  { type: 'fonction', func: script.lancerSort, hasArgs: true, args:[1] },
  { type: 'fonction', func: script.lancerSort, hasArgs: true, args:[0] },
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

scene.actualisation = function () {
  script.getLastScene().getObjectByName("Main").position.z = -1
  script.PlayAudio("Magic")
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
