import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_46_Mur_Effrite";
scene.texte = "scene_46.txt";
scene.BackSoundName = "egout";

const nbPlane = 4;
const tabPlaneName = ["background", "mur1", "mur2", "continuer"];

const tabPlaneWidth = [null, 120, 50];
const tabPlaneHeight = [null, 50, 85];
const tabOpacity = [1, 0, 0, 1];
const tabPlaneScale = [null, null, null, 0.5];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, 5, 5, 0];
const tabPosY = [0, 8, 6, -45];
const tabPosZ = [0, 0.5, 0.5, 0.6];


const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/mur_effrite.png' },//Image
  { type: null, value: null },
  { type: null, value: null },
  { type: 'texture', path: 'Ressources/Images/objects/fleche_bas.png' },
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: 47 },
                    { type: 'changerscene', value: 47 },
                     { type: 'fonction', func: script.egout, hasArgs: true, args:["scene_45_Egouts", 2] },];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, tabOpacity, tabFonction);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);