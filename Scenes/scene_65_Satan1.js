import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_65_Satan1";
scene.texte = "scene_65.txt";
scene.noFleche = true;

const nbPlane = 1;
const tabPlaneName = ["background"];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/satan1.png' },//Image
];

const tabFonction = [{ type: 'theEnd', value: 66 },];


//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, undefined, undefined, undefined, undefined, tabTextureOrColor, undefined, undefined, tabFonction);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);