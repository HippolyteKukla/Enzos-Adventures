import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_15_Casserole_Vide";
scene.texte = "scene_15.txt";
scene.BackSoundName="Couper";


const nbPlane = 4;
const tabPlaneName = ["background", "sortir", "casserole1", "casserole2"];

const tabPlaneWidth = [null, null, 35, 35];
const tabPlaneHeight = [null, null, 120, 120];
const tabOpacity = [1, 0, 0, 0];
const tabCircle = [null, 70]

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, 0, -88, 88];
const tabPosY = [0, 0, 0, 0];
const tabPosZ = [0, 0.5, 0.5, 0.5];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/interieur_casserole.png' },//Image
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: 34 },
                    { type: 'changerscene', value: 16 },
                    { type: 'changerscene', value: 16 }];


//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, undefined, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, tabOpacity, tabFonction, tabCircle);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);