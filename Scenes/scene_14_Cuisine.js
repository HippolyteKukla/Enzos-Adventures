import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_14_Cuisine";
scene.texte = "scene_14.txt";
scene.BackSoundName="Cuisine";


const nbPlane = 5;
const tabPlaneName = ["background", "casserole", "etagere", "porte","chat"];

const tabPlaneWidth = [null, 37, 35, 31];
const tabPlaneHeight = [null, 48, 62, 59];
const tabOpacity = [1, 0, 0, 0, 0];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, 22, -39, 46, -30];
const tabPosY = [0, -22, 5, 0, -25];
const tabPosZ = [0, 0.6, 0.5, 0.5, 0.4];

const tabScale = [1,1,1,1,1.7]

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/cuisine.png' },//Image
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: 15 },
                    { type: 'changerscene', value: 38 },
                    { type: 'changerscene', value: 41 }];


//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, tabScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, tabOpacity, tabFonction);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);