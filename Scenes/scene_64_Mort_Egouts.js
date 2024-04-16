import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = 'scene_64_Mort_Egouts';
scene.texte = "scene_64.txt";
scene.notLivre=true;
scene.notMain=true;
scene.noFleche = true;

const nbPlane = 1;
const tabPlaneName = ["background"];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/mort_faim_egouts.png' },//Image
];

const tabFonction = [{ type: 'changerscene', value: 1 }];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, undefined, undefined, undefined, undefined, tabTextureOrColor, undefined, undefined, tabFonction);

scene.end = function () {
  script.EndFind(13);
};

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);