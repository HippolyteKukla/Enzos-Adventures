import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_67_Mort_Heureux";;
scene.texte = "scene_67.txt";
scene.notMain=true;
scene.notLivre = true;

const nbPlane = 1;
const tabPlaneName = ["background"];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/mort_heureux_roi.png" },
];

const tabFonction = [
  { type: "theEnd", value: 1 },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  tabTextureOrColor,
  undefined,
  undefined,
  tabFonction,
);

scene.actualisation = function () {
  script.PlayAudio("monter_sur_le_trone")
}

scene.end = function(){
  script.EndFind(15)
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
