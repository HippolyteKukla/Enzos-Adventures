import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_63_Questions_Game_Over";
scene.texte = "scene_63.txt";
scene.BackSoundName = null ;
scene.noFleche = true;

const nbPlane = 4;
const tabPlaneName = [
  "background",
  "plane_texture_Game_Over",
  "plane_restart_quizz",
  "plane_restart_game",
];

const tabPosX = [0, 2, -35, 35];
const tabPosY = [0, 55, -30, -30];
const tabPosZ = [0, 0.5, 0.6, 0.6];

const tabPlaneScale = [1, 1, 0.05, 0.05];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/questions_game.png" }, //Image

  { type: "texture", path: "Ressources/Images/questions/game_over.png" },
  {
    type: "texture",
    path: "Ressources/Images/objects/texture_pilule_rouge.png",
  },
  {
    type: "texture",
    path: "Ressources/Images/objects/texture_pilule_bleue.png",
  },
];

const tabFonction = [
  { type: null, value: null },
  { type: null, value: null },
  { type: 'changerscene', value: 60 },
  { type: 'changerscene', value: 1 }
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
