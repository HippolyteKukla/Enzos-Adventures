import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_60_Questions_Game";
scene.texte = "scene_60.txt";
scene.BackSoundName = "jingle-qui-veut-gagner-des-millions";
scene.noFleche = true;

const nbPlane = 6;
const tabPlaneName = [
  "background",
  "plane_texture_start",
  "plane_start",
  "plane_question0",
  "plane_question1",
  "plane_num_question",
];

const tabPosX = [0, -6, 0, -35, 35, 0];
const tabPosY = [0, 20, -10, -8, -8, -30];
const tabPosZ = [0, 0.5, 0.7, 0.6, 0.6, -1];

const tabPlaneWidth = [null, null, 20];
const tabPlaneHeight = [null, null, 9.5];

const tabOpacity = [1, 1, 0, 0, 0, 0];

const tabPlaneScale = [1, 1, 5, 0.2, 0.2, 0.45];

const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/questions_game.png" }, //Image

  { type: "texture", path: "Ressources/Images/questions/start_panneau.png" },
  { type: null, value: null },
  {
    type: "texture",
    path: "Ressources/Images/questions/texture_question_00.png",
  },
  {
    type: "texture",
    path: "Ressources/Images/questions/texture_question_01.png",
  },
  {
    type: "texture",
    path: "Ressources/Images/questions/cartes_quizz_1.png",
  },
];

const tabFonction = [
  { type: null, value: null },
  { type: null, value: null },
  {
    type: "fonction",
    func: script.InitQuestionsGame,
    hasArgs: true,
    args: [scene.name],
  },
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

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);
