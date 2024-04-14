import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_22_Mort_Allergie";
scene.texte = "scene_22.txt";
scene.BackSoundName="Respiration";
scene.notMain=true;
scene.notLivre = true;
scene.noFleche = true;

const nbPlane = 1;
const tabPlaneName = ["background"];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/mort_allergie.png" },
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

scene.end = function(){
  script.EndFind(3)
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);