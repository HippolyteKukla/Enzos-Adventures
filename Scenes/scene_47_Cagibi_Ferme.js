import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_47_Cagibi_Ferme";
scene.texte = "scene_47.txt";

const nbPlane = 2;
const tabPlaneName = ["background", "porte"];

const tabPlaneWidth = [null, 58];
const tabPlaneHeight = [null, 85];
const tabPlaneScale = [null, 1];
const tabOpacity = [1, 0];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, 7];
const tabPosY = [0, 14];
const tabPosZ = [0, 0.5];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/cagibi_ferme.png' },//Image
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: 48 },];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, tabOpacity, tabFonction);

scene.actualisation = function () {
  script.PlayAudio("Eboulement")
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);