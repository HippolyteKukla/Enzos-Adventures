import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_66_Satan2";
scene.texte = "scene_66.txt";
scene.noFleche = true;
scene.notLivre = true;
scene.notMain = true;

const nbPlane = 1;
const tabPlaneName = ["background"];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/satan2.png' },//Image
];

const tabFonction = [{ type: 'changerscene', value: 1 },];


//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, undefined, undefined, undefined, undefined, tabTextureOrColor, undefined, undefined, tabFonction);

scene.end = function () {
  script.EndFind(13);
};

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);