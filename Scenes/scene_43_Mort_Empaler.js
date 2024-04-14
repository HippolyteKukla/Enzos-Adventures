import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_43_Mort_Empaler";
scene.texte = "scene_43.txt";
scene.notMain=true;
scene.notLivre = true;
scene.noFleche = true;

const nbPlane = 1;
const tabPlaneName = ["background"];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/mort_pomme_pourrie.png" },
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
  script.PlayAudio("Bois")
}

scene.end = function(){
  script.EndFind(8)
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);