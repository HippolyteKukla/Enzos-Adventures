import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_49_Prison_Couloir";
scene.texte = "scene_49.txt";
scene.BackSoundName="prison";

const nbPlane = 4;
const tabPlaneName = ["background","escalier", "cellule", "chat"];

const tabPosX = [0, -49, 60, 2];
const tabPosY = [0, 0, 10, 1];
const tabPosZ = [0, 0.5, 0.5, 0.4];

const tabPlaneWidth = [null, 10, 10];
const tabPlaneHeight = [null, 25, 27];

const tabOpacity = [1, 0, 0, 0];

const tabPlaneScale = [null, 3, 3, 1];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/prison_escalier_ou_cellule.png' },//Image
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: 58 },
                    { type: 'changerscene', value: 50 }];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, tabOpacity, tabFonction);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);