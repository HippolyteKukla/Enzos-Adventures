import * as script from "../script.js";
const scene = new THREE.Scene();
scene.name = "scene_0_Livre";
scene.notLivre = true;
scene.notMain = true;
scene.BackSoundName = null;


// Nombre de planes dans le tableau
const nbPlanes = script.getnbEndIncones();

// Nombre de colonnes et de lignes
const nbColonnes = 5;
const nbLignes = Math.ceil(nbPlanes / nbColonnes);

// Largeur et hauteur d'un plane
const planeWidth = 10;
const planeHeight = 10;

// Espacement entre les planes
const espacementX = 3;
const espacementY = 5;

//Position initial
const posInitX = 42;
const posInitY = 2;

let tabEndIconeTexture = [
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_infusion.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_tronc.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_cannibale.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_allergie.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_epee.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_poison.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_cercueil.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_eclair.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_caisse.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_foetus.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_mange_nid.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_sort_doigt.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_rat.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_egout.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_satan.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_heureux_roi.png' },
  { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_famille.png' },
];


script.completeTab(tabEndIconeTexture, nbPlanes, { type: 'texture', path: 'Ressources/Images/EndIcone/tampon_rat.png' })

// Créer et positionner chaque planeCube dans le tableau
for (let ligne = 0; ligne < nbLignes; ligne++) {
  for (let colonne = 0; colonne < nbColonnes; colonne++) {
    const index = ligne * nbColonnes + colonne;

    if (index < nbPlanes) {
      const loader = new THREE.TextureLoader();
      loader.load(
        // Chemin de l'image
        tabEndIconeTexture[index].path,
        function (texture) {
          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;

          const material = new THREE.MeshBasicMaterial({map : texture, opacity : script.gettabEndFindForOpacity()[index], transparent: true});
          const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
          const plane = new THREE.Mesh(geometry, material);

          const posX = colonne * (planeWidth + espacementX) - ((nbColonnes - 1) * (planeWidth + espacementX)) / 2;
          const posY = ligne * (planeHeight + espacementY) - ((nbLignes - 1) * (planeHeight + espacementY)) / 2;

          plane.position.set(posInitX + posX, posInitY - posY, 0.5);
          plane.name = "planeEndIcone" + index;
          scene.add(plane);
        },
        undefined,
        function (error) {
          console.error('Erreur lors du chargement de l image', error);
        }
      );

    }
  }
}


const nbPlane = 3;
const tabPlaneName = ["background", "fleche_gauche_livre", "marque_page"];

// tableaux des largeurs, hauteurs et scale des planes (Par défaut taille de l'image ou 5,5,1)
const tabPlaneScale = [null, 0.45, null]

//Tableau des positions au centre des rectangles (Par défaut tous à 0)
const tabPosX = [0, -65, 14];
const tabPosY = [0, -46, 45];
const tabPosZ = [0, 0.6, 0.7];

const tabTextureOrColor = [
    { type: 'texture', path: 'Ressources/Images/background/livre.png' },//Image
    { type: 'texture', path: 'Ressources/Images/objects/fleche_gauche_livre.png' },//Image
    { type: 'texture', path: 'Ressources/Images/objects/marque_page.png' },//Image,
];

const tabScenetoGo = [
  { type: null, value: null },
  { type: 'fonction', func: script.revenirScene, hasArgs: false },//fonction sans args
  { type: 'fonction', func: script.afficherScene, hasArgs: false },//fonction sans args
];

//Fonction de Création de chaque plane. Seul l'arg scene est obligatoire.
script.AddPlaneClickable(scene, nbPlane, tabPlaneName, undefined, undefined, tabPlaneScale, tabPosX, tabPosY, tabPosZ, tabTextureOrColor, undefined, undefined, tabScenetoGo)



scene.actualisation = function () {
  
  const fleche = script.getSceneByName(scene.name).getObjectByName("fleche_gauche_livre");

  const lastScene = script.getLastScene();
  scene.BackSoundName=lastScene.BackSoundName
  
  if (fleche.position.z != 0.6){
    fleche.position.z = 0.6;
    fleche.userData.isClickable = true;
  }

  if (lastScene.texte){
    script.chargerTexte("Ressources/Textes/"+lastScene.texte, scene.name);
  }else {
    script.chargerTexte();
  }
  
  
  if (lastScene.noFleche || (script.CheminScene.length <= 1 && script.gettabEndFind().filter((valeur) => valeur === 1).length < 3)){
    fleche.position.z = -1;
    fleche.userData.isClickable = false;
  }

  
  for (let ligne = 0; ligne < nbLignes; ligne++) {
    for (let colonne = 0; colonne < nbColonnes; colonne++) {
      const index = ligne * nbColonnes + colonne;

      if (index < nbPlanes) {
        const Cplane = script.getSceneByName(scene.name).getObjectByName("planeEndIcone" + index)
        if (Cplane.material.opacity != script.gettabEndFindForOpacity()[index]){
          Cplane.material.opacity = script.gettabEndFindForOpacity()[index];
          console.log("Changement EndIcone, index = " + index);
        }
      }
    }
  }
};

scene.end = function(){
  if (script.goodAnswers != -1){
    script.startTimer(16, script.getLastScene());
  }
  if (script.getLastScene().name == "scene_36_Cercueil" || script.getLastScene().name == "scene_53_Foetus"){
    script.getLastScene().notLivre = true;
    script.Timer();
  }
}


script.addScenes(scene)
