import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_18_Casserole_Sortie";
scene.texte = "scene_18.txt";

const nbPlane = 3;
const tabPlaneName = ["background", "ange", "carotte"];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, 30, 60];
const tabPosY = [0, -40, -40];
const tabPosZ = [0, 0.5, 0.5];

const tabScale = [1, 0.3, 0.3]

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/sortie_casserole.png' },//Image
  { type: 'texture', path: 'Ressources/Images/objects/logo_ange.png' },
  { type: 'texture', path: 'Ressources/Images/objects/logo_carotte.png' },
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: 19 },
                    { type: 'changerscene', value: 20 }];


//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, tabScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, undefined, tabFonction);

scene.actualisation = function () {
  script.PlayAudio("Choc")
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);