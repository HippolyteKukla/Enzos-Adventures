import * as script from '../script.js';
const scene = new THREE.Scene();
scene.name = "scene_48_Cagibi_Ouvert";
scene.texte = "scene_49.txt";

const nbPlane = 4;
const tabPlaneName = ["background","droite", "gauche", "chat"];

const tabPosX = [0, 18, -8, 8];
const tabPosY = [0, -43, -43, -5];
const tabPosZ = [0, 0.5, 0.5, 0.4];

const tabPlaneScale = [null, 0.5, 0.5, 1.5];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/cagibi_ouvert.png' },//Image
  { type: 'texture', path: "Ressources/Images/objects/fleche_droite.png" },
  { type: 'texture', path: "Ressources/Images/objects/fleche_gauche.png" }
];

const tabFonction = [{ type: null, value: null },
                     { type: 'changerscene', value: -1 },
                    { type: 'changerscene', value: 49 }];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, undefined, tabFonction);

scene.actualisation = function () {
  script.PlayAudio("Porte")
}

// Ajouter la scène à la liste des scènes disponibles
script.addScenes(scene);