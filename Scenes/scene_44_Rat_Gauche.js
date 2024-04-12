import * as script from '../script.js';//Importation des fonction export de script.js
const scene = new THREE.Scene(); //Creation de la scene
scene.name = "scene_44_Rat_Gauche";// Nom de la scène
scene.texte = "scene_44.txt";
scene.BackSoundName = "egout";
  
const nbPlane = 4;//Nombre de plane à ajouter
const tabPlaneName = ["background", "fleche_gauche", "fleche_haut", "fleche_droite"];

// tableaux des largeurs, hauteurs et scale des planes (Par défaut taille de l'image ou 5,5,1)
const tabPlaneScale = [null, 0.5, 0.5, 0.5];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, -15, 0, 15];
const tabPosY = [0, -40, -25, -40];
const tabPosZ = [0, 0.5, 0.5, 0.5];

//tab des textures et couleurs de chaque plan (par défaut tab de { type: 'color', value: 0x000000 })
const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/egouts.png' },//Image
    { type: 'texture', path: 'Ressources/Images/objects/fleche_gauche.png' },//Image
  { type: 'texture', path: 'Ressources/Images/objects/fleche_haut.png' },//Image
  { type: 'texture', path: 'Ressources/Images/objects/fleche_droite.png' },//Image
];


const tabFonction = [
  { type: null, value: null },
  { type: 'fonction', func: script.egout, hasArgs: true, args:["scene_45_Egouts", 2] },
  { type: 'fonction', func: script.egout, hasArgs: true, args:["scene_45_Egouts", 2] },
  { type: 'fonction', func: script.egout, hasArgs: true, args:["scene_45_Egouts", 1] }
]; //tab des scenes où aller quand on clqiue sur les planes

//Fonction de Création de chaque plane
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, undefined, tabFonction)




script.addScenes(scene);// Ajouter la scène à la liste des scènes disponibles