import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_32_Ouvrir_Sans_TOMI";
scene.texte = "scene_32.txt";
scene.BackSoundName="egout";


const nbPlane = 2;
const tabPlaneName = ["background", "fleche"];

const tabPosX = [0, 85];
const tabPosY = [0, -12];
const tabPosZ = [0, 0.5];


const tabTextureOrColor = [
  { type: "texture", path: "Ressources/Images/background/egouts_trou_tomi.png" }, { type: 'texture', path: 'Ressources/Images/objects/fleche_droite.png' }
];

const tabFonction = [
  { type: null, value: null },
  { type: 'changerscene', value : 28 },
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(
  scene,
  nbPlane,
  tabPlaneName,
  undefined,
  undefined,
  undefined,
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
