import * as script from '../script.js';//Importation des fonction export de script.js
const scene = new THREE.Scene(); //Creation de la scene
scene.name = "scene_45_Egouts";// Nom de la scène
scene.texte = "scene_45.txt";
scene.index = 45;
scene.BackSoundName = "egout";

scene.tabDroite = [
  {func: script.egout, args:[scene.name, 3] },
  {func: script.egout, args:[scene.name, 3] },
  {func: script.changerScene, args:[46] },
  {func: script.changerScene, args:[60] }]

scene.tabGauche = [
  {func: script.egout, args:[scene.name, 4] },
  {func: script.egout, args:[scene.name, 1] },
  {func: script.egout, args:[scene.name, 3] },
  {func: script.egout, args:[scene.name, 2] }]

scene.tabHaut = [
  {func: script.egout, args:[scene.name, 1] },
  {func: script.egout, args:[scene.name, 4] },
  {func: script.egout, args:[scene.name, 4] },
  {func: script.theEnd, args:[64] }]
  
const nbPlane = 5;//Nombre de plane à ajouter
const tabPlaneName = ["background", "fleche_gauche", "fleche_haut", "fleche_droite", "chat"];

// tableaux des largeurs, hauteurs et scale des planes (Par défaut taille de l'image ou 5,5,1)
const tabPlaneScale = [null, 0.5, 0.5, 0.5, 1.2];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, -15, 0, 15, 67];
const tabPosY = [0, -40, -25, -40, -20];
const tabPosZ = [0, 0.5, 0.5, 0.5, 0.5];

//tab des textures et couleurs de chaque plan (par défaut tab de { type: 'color', value: 0x000000 })
const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/egouts.png' },//Image
    { type: 'texture', path: 'Ressources/Images/objects/fleche_gauche.png' },//Image
  { type: 'texture', path: 'Ressources/Images/objects/fleche_haut.png' },//Image
  { type: 'texture', path: 'Ressources/Images/objects/fleche_droite.png' },//Image
];


const tabFonction = [
  { type: null, value: null },
  { type: 'fonction', func: script.egout, hasArgs: true, args:[scene.name, 1] },
  { type: 'fonction', func: script.egout, hasArgs: true, args:[scene.name, 2] },
  { type: 'fonction', func: script.egout, hasArgs: true, args:[scene.name, 2] }
]; //tab des scenes où aller quand on clqiue sur les planes

//Fonction de Création de chaque plane
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, undefined, tabFonction)




script.addScenes(scene);// Ajouter la scène à la liste des scènes disponibles