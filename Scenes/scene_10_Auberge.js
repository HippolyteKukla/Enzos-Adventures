import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_10_Auberge";
scene.texte = "scene_10.txt";
scene.BackSoundName="Auberge";

const nbPlane = 4;
const tabPlaneName = ["background", "lancer_de", "de", "chat"];

const tabPosX = [0, 64, 0, -90];
const tabPosY = [0, -22, -5, -5];
const tabPosZ = [0, 0.6, -1, 0.5];
const tabOpacity = [1, 0 , 0, 0];

const tabPlaneScale = [1, 1, 7, 2];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/auberge.png' },//Image
];

const tabFonction = [{ type: null, value: null },
                    {type: "fonction", func: script.lancerDe, hasArgs: true, args: [scene.name]},
                    {type: "fonction", func: script.lancerDe, hasArgs: true, args: [scene.name]}];


//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, tabOpacity, tabFonction);

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);