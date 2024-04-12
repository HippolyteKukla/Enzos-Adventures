import * as script from '../script.js';//Importation des fonction export de script.js
const scene = new THREE.Scene(); //Creation de la scene
scene.name = "#ExempleScene";// Nom de la scène
scene.BackSoundName = "Medieval1"; //Nom de la musique de fond

//Function qui se lance lorsque l'utilisateur arrive sur la scène
scene.actualisation = function () {
  //Quand l'utilisateur arrive sur la scène, on appelle la fonction EndFind pour enregistrer qu'il à trouver la fin numéro 7. On peut ajouter 1 ou 0 en deuxieme arg pour enregistrer ou supprimer la fin en tant que "trouvée".
  script.EndFind(7,1);
}


///POUR AVOIR LA VALEUR PAR DEFAUT, METTRE "undefined" OU NE RIEN RENTRER POUR L'ARG ET LES SUIVANTS

//Exemple 1 : script.AddPlaneClickable(scene, nbPlane) <==> script.AddPlaneClickable(scene, nbPlane, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)

//Exemple 2 : script.AddPlaneClickable(scene, nbPlane, tabPlaneWidth, tabPlaneHeight, undefined, tabPosX, tabPosY, undefined,tabTextureOrColor)

const nbPlane = 3;//Nombre de plane à ajouter
const tabPlaneName = ["background", "fleche_gauche", null];//tab avec les noms des planes (Par default : "plane" + indexPlane)

// tableaux des largeurs, hauteurs et scale des planes (Par défaut taille de l'image ou 5,5,1)
const tabPlaneWidth = [null, 20, 20];
const tabPlaneHeight = [null, 10, 10];
const tabPlaneScale = [null, null, 1];

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, 0, -30];
const tabPosY = [0, -30, -30];
const tabPosZ = [0, 0.5, 0.5];

//tab des textures et couleurs de chaque plan (par défaut tab de { type: 'color', value: 0x000000 })
const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/egouts.png' },//Image
    { type: 'texture', path: 'Ressources/Images/objects/fleche_gauche.png' },//Image
    { type: 'color', value: 0xff0000 }, // Rouge
];

const AreOpaque = true; //Définit si par défaut les planes ajouter sont visible, true = opacité à 1 et false = opacité à 0 (Par défaut à true)
const tabOpacity = [1, 0.5, 1];//tab des opacités de chaque plane (Par défaut en fonction de AreOpaque))

//tab des fonction à ajouter aux planes quand on clique dessus, si rien n'est indiqué, le clique ne fera rien.
const tabFonction = [
  { type: 'fonction', func: fonctionA, hasArgs: true, args: [10, 'Hello']},//fonction avec args
  { type: 'fonction', func: fonctionB, hasArgs: false },//fonction sans args
  { type: 'changerscene', value: 0 } // fonction qui change de scene, value = index de la scene
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, AreOpaque, tabOpacity, tabFonction)

script.addScenes(scene);// Ajouter la scène à la liste des scènes disponibles





/*-------------------------------------Version Undefined---------------------------------------

import * as script from '../script.js';//Importation des fonction export de script.js
const scene = new THREE.Scene(); //Creation de la scene

const nbPlane = undefined;//Nombre de plane à ajouter
const tabPlaneName = undefined;//tab avec les noms des planes (Par default : "plane" + indexPlane);

// tableaux des largeurs, hauteurs et scale des planes (Par défaut taille de l'image ou 5,5,1)
const tabPlaneWidth = undefined;
const tabPlaneHeight = undefined;
const tabPlaneScale = undefined;

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = undefined;
const tabPosY = undefined;
const tabPosZ = undefined;

//tab des textures et couleurs de chaque plan (par défaut tab de { type: 'color', value: 0x000000 })
const tabTextureOrColor = undefined

const AreOpaque = undefined; //Définit si par défaut les planes ajouter sont visible, true = opacité à 1 et false = opacité à 0 (Par défaut à true)
const tabOpacity = undefined;//tab des opacités de chaque plane (Par défaut en fonction de AreOpaque))

const tabFonction = undefined; //tab des fonction à ajouter aux planes quand on clique dessus, si rien n'est indiqué, le clique ne fera rien.

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, tabPlaneWidth, tabPlaneHeight, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, AreOpaque, tabOpacity, tabFonction)

*/