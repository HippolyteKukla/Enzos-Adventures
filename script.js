22; //Déclaration des variables de Scenes
let scenes = [];
let currentSceneIndex = -1;
let currentScene = scenes[currentSceneIndex];
export let CheminScene = [];

let renderer; // Déclarez la variable renderer
let reinitialisation = 0;

//Variables lié aux Histoires
let TotemTomi = false;
let nbEndIncones = 17;
let tabEndFind = Array(nbEndIncones).fill(0);
let texturesQuestions = [];
let texturesDe = [];
let texturesMain = [];
let texturesEgout = [];
export let goodAnswers = -1;
let numerosTires = new Set();
let timer;
let camera; // Déclarez la variable camera

//code pour initialiser le renderer:
renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//code pour initialiser la caméra:
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

//code pour initialiser le listener et le lier à la caméra:
const listener = new THREE.AudioListener();
const audioLoader = new THREE.AudioLoader();
camera.add(listener);

// Définir un tableau pour stocker les sons
const sounds = {}; //Déclaration d'un object qui va contenir les sons
const pathsSounds = [
  "Ressources/Sounds/UniqueSounds/DingDong.mp3",
  "Ressources/Sounds/UniqueSounds/Tic_tac.mp3",
  "Ressources/Sounds/UniqueSounds/fin-question-qui-veut-gagner-des-millions.mp3",
  "Ressources/Sounds/UniqueSounds/monter_sur_le_trone.mp3",
  "Ressources/Sounds/UniqueSounds/Coup.mp3",
  "Ressources/Sounds/UniqueSounds/Choc.mp3",
  "Ressources/Sounds/UniqueSounds/Epee.mp3",
  "Ressources/Sounds/UniqueSounds/Bois.mp3",
  "Ressources/Sounds/UniqueSounds/Eboulement.mp3",
  "Ressources/Sounds/UniqueSounds/Porte.mp3",
  "Ressources/Sounds/UniqueSounds/Dragon.mp3",
  "Ressources/Sounds/UniqueSounds/Egg.mp3",
  "Ressources/Sounds/UniqueSounds/Magic.mp3",

  "Ressources/Sounds/BackSounds/Medieval_1.mp3",
  "Ressources/Sounds/BackSounds/jingle-qui-veut-gagner-des-millions.mp3",
  "Ressources/Sounds/BackSounds/question-qui-veut-gagner-des-millions.mp3",
  "Ressources/Sounds/BackSounds/bataille.mp3",
  "Ressources/Sounds/BackSounds/egout.mp3",
  "Ressources/Sounds/BackSounds/prison.mp3",
  "Ressources/Sounds/BackSounds/Village.mp3",
  "Ressources/Sounds/BackSounds/Ronflement.mp3",
  "Ressources/Sounds/BackSounds/Croquer_doigt.mp3",
  "Ressources/Sounds/BackSounds/Boire_the.mp3",
  "Ressources/Sounds/BackSounds/Auberge.mp3",
  "Ressources/Sounds/BackSounds/Cuisine.mp3",
  "Ressources/Sounds/BackSounds/Orage.mp3",
  "Ressources/Sounds/BackSounds/Eclair.mp3",
  "Ressources/Sounds/BackSounds/Couper.mp3",
  "Ressources/Sounds/BackSounds/Bouillir.mp3",
  "Ressources/Sounds/BackSounds/Manger.mp3",
  "Ressources/Sounds/BackSounds/Cloche.mp3",
  "Ressources/Sounds/BackSounds/Trone.mp3",
  "Ressources/Sounds/BackSounds/Respiration.mp3",
  "Ressources/Sounds/BackSounds/Baby.mp3",
  "Ressources/Sounds/BackSounds/Forest.mp3",
  "Ressources/Sounds/BackSounds/Fantasy.mp3",
  "Ressources/Sounds/BackSounds/Marche_2.mp3",
  
];
export let currentBackSoundName = null;
let currentSoundName = null;

//Parametre texte
// Création du canvas pour le texte
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

// Taille du canvas
canvas.width = 1024;
canvas.height = 1024;

//Détect si tabEndFind existe déjà en localStorage et si il a la même taille
if (localStorage.getItem("EndFind") == null || reinitialisation) {
  localStorage.setItem("EndFind", JSON.stringify(tabEndFind));
} else {
  if (
    JSON.parse(localStorage.getItem("EndFind")).length !== tabEndFind.length
  ) {
    localStorage.setItem("EndFind", JSON.stringify(tabEndFind));
    console.log("remplacement de tabEndFind ancienne version");
  } else {
    tabEndFind = JSON.parse(localStorage.getItem("EndFind"));
  }
}

///----------------------------------Fonctions------------------------------------
export function Init() {
  adaptCam(213, 120);
  chargerTexte();
  chargementMainBookandCat();
  chargementTextureMainEgout();
  chargementAndio(pathsSounds);
  chargerTextureQuestion();
  chargerTextureDe();
  setTimeout(function () {
    theEnd(1)
  }, 10000);
}

// Fonction pour afficher une scène spécifique
export function afficherScene(
  sceneIndex = CheminScene[CheminScene.length - 1],
) {
  if (currentScene && typeof currentScene.end === "function")
    currentScene.end();

  // Afficher la nouvelle scène
  currentSceneIndex = sceneIndex;
  currentScene = scenes[currentSceneIndex + 1];

  if (currentScene.getObjectByName("chat")) chatVisible();

  if (typeof currentScene.actualisation === "function")
    currentScene.actualisation();

  console.log("CheminScene : " + CheminScene);
  renderer.render(currentScene, camera);

  if (currentScene.BackSoundName) {
    if (currentBackSoundName !== currentScene.BackSoundName) {
      PlayAudio(currentScene.BackSoundName, undefined, undefined, true);
    }
  } else {
    if (currentBackSoundName !== null) {
      StopAudio(currentBackSoundName);
      currentBackSoundName = null;
    }
  }
}

// Fonction pour changer de scène
export function changerScene(nouvelleSceneIndex) {
  if (
    nouvelleSceneIndex !== currentSceneIndex &&
    nouvelleSceneIndex + 1 >= 0 &&
    nouvelleSceneIndex + 1 < scenes.length
  ) {
    console.log("go to scene " + scenes[nouvelleSceneIndex + 1].name);
    if (
      nouvelleSceneIndex != -1 &&
      nouvelleSceneIndex != 0 &&
      nouvelleSceneIndex != 61 &&
      nouvelleSceneIndex != 62 &&
      nouvelleSceneIndex != 63 &&
      nouvelleSceneIndex != CheminScene[CheminScene.length - 1]
    ) {
      CheminScene.push(nouvelleSceneIndex);
    }
    afficherScene(nouvelleSceneIndex);
  } else {
    throw new Error(
      "Erreur lors du changement de scène, index : " +
        nouvelleSceneIndex +
        " n'est pas valide, index max : " +
        (scenes.length - 1) +
        ", index courant : " +
        currentSceneIndex,
    );
  }
}

// Fonction pour revenir à la scène précédente
export function revenirScene() {
  if (CheminScene.length > 1) {
    CheminScene.pop();
  } else {
    //trouve le secret Remonter dans le temps, Satan
    if (gettabEndFind().filter((valeur) => valeur === 1).length >= 3)
      CheminScene.push(65);
  }

  afficherScene(0);
}

export function adaptCam(imageWidth, imageHeight) {
  // Positionner la caméra pour que le plane remplisse l'écran
  const aspectRatio = window.innerWidth / window.innerHeight;
  const fieldOfView = 75;
  const distance =
    Math.max(imageWidth, imageHeight) /
    2 /
    Math.tan(THREE.MathUtils.degToRad(fieldOfView / 2));
  camera.position.set(0, 0, distance * 0.55);

  // Mettre à jour le champ de vision de la caméra et le renderer
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function theEnd(indexSceneDeFin) {
  CheminScene.push(indexSceneDeFin);
  changerScene(0);
}

export function EndFind(index, value = 1) {
  // Vérifier si la variable value et un 0 ou un 1
  if (value !== 0 && value !== 1)
    throw new Error("La variable doit être un 0 ou un 1");

  // Vérifier si l'index est valide
  if (index < 0 || index >= tabEndFind.length) {
    throw new Error(
      "L'index doit être compris entre 0 et " + (tabEndOk.length - 1),
    );
  }

  // Mettre à jour la variable tabEndFind
  tabEndFind = JSON.parse(localStorage.getItem("EndFind"));
  tabEndFind[index] = value;
  localStorage.setItem("EndFind", JSON.stringify(tabEndFind));

  changementMain();
  CheminScene = [1];
  TotemTomi = 0;
}

export function getScene(index) {
  return scenes[index + 1];
}

export function getSceneByName(name) {
  let scene = null;
  for (let i = 0; i < scenes.length; i++)
    if (scenes[i].name === name) scene = scenes[i];
  return scene;
}

export function gettabEndFind() {
  return tabEndFind;
}

export function getnbEndIncones() {
  return nbEndIncones;
}

export function gettabEndFindForOpacity() {
  return tabEndFind.map((valeur) => (valeur === 1 ? 1 : 0.1));
}

export function getLastScene() {
  return scenes[CheminScene[CheminScene.length - 1] + 1];
}

export function addScenes(scene) {
  if ((!scene) instanceof THREE.Scene)
    throw new Error("Ce n'est pas une scène");
  if (scenes.includes(scene) && scene.name != "scene_-1_Work_In_Progress")
    throw new Error("La scene est déjà présente dans la liste des scènes");

  scenes.push(scene);
  console.log("Scene " + scene.name + " ajoutée");
}

export function completeTab(tableau, longueurCible, value) {
  // Vérifier si la longueur du tableau est inférieure à la longueur cible
  if (tableau.length < longueurCible) {
    // Calculer le nombre de zéros à ajouter
    const nombreZerosAjoutes = longueurCible - tableau.length;
    // Ajouter des zéros à la fin du tableau
    tableau.push(...Array(nombreZerosAjoutes).fill(value));
  }
  // Retourner le tableau complété
  return tableau;
}

export function AddPlaneClickable(
  Scene,
  nbPlane = 1,
  tabPlaneName = [],
  tabPlaneWidth = [],
  tabPlaneHeight = [],
  tabPlaneScale = [],
  tabPosX = [],
  tabPosY = [],
  tabPosZ = [],
  tabTextureOrColor = [],
  AreOpaque = true,
  tabOpacity = [],
  tabFonction = [],
  tabCircle = [],
) {
  //Complete les tab si il n'y a pas assez de valeur
  completeTab(tabPlaneName, nbPlane, null);
  completeTab(tabPlaneWidth, nbPlane, null);
  completeTab(tabPlaneHeight, nbPlane, null);
  completeTab(tabPlaneScale, nbPlane, null);
  completeTab(tabPosX, nbPlane, 0);
  completeTab(tabPosY, nbPlane, 0);
  completeTab(tabPosZ, nbPlane, 0);
  completeTab(tabTextureOrColor, nbPlane, { type: "color", value: 0x000000 });
  if (AreOpaque) completeTab(tabOpacity, nbPlane, 1);
  else completeTab(tabOpacity, nbPlane, 0);

  completeTab(tabFonction, nbPlane, { type: null, value: null });
  completeTab(tabCircle, nbPlane, null);

  //Ajoute les planes à la scene
  for (let PlaneIndex = 0; PlaneIndex < nbPlane; PlaneIndex++) {
    if (tabTextureOrColor[PlaneIndex].type == "texture") {
      const loader = new THREE.TextureLoader();
      loader.load(
        // Chemin de l'image
        tabTextureOrColor[PlaneIndex].path,
        function (texture) {
          let imageWidth = texture.image.width;
          let imageHeight = texture.image.height;
          let scale = 1;

          if (tabPlaneScale[PlaneIndex] != null) {
            scale = tabPlaneScale[PlaneIndex];
          } else if (
            tabPlaneHeight[PlaneIndex] != null &&
            tabPlaneWidth[PlaneIndex] != null
          ) {
            imageWidth *= tabPlaneWidth[PlaneIndex] / imageWidth;
            imageHeight *= tabPlaneHeight[PlaneIndex] / imageHeight;
          }

          imageWidth *= scale;
          imageHeight *= scale;

          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;

          const material = new THREE.MeshBasicMaterial({
            map: texture,
            opacity: tabOpacity[PlaneIndex],
            transparent: true,
          });
          const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
          const plane = new THREE.Mesh(geometry, material);

          plane.position.set(
            tabPosX[PlaneIndex],
            tabPosY[PlaneIndex],
            tabPosZ[PlaneIndex],
          );
          if (tabPlaneName[PlaneIndex] != null)
            plane.name = tabPlaneName[PlaneIndex];
          else plane.name = "plane" + PlaneIndex;

          if (tabFonction[PlaneIndex].type != null) {
            plane.userData.isClickable = true;

            if (tabFonction[PlaneIndex].type == "changerscene") {
              plane.userData.onClick = function () {
                changerScene(tabFonction[PlaneIndex].value); // Changer de scène lorsque le plane est cliqué
              };
            } else if (tabFonction[PlaneIndex].type == "theEnd") {
              plane.userData.onClick = function () {
                theEnd(tabFonction[PlaneIndex].value);
              };
            } else if (tabFonction[PlaneIndex].type == "fonction") {
              if (tabFonction[PlaneIndex].hasArgs) {
                plane.userData.onClick = function () {
                  tabFonction[PlaneIndex].func(...tabFonction[PlaneIndex].args);
                };
              } else {
                plane.userData.onClick = function () {
                  tabFonction[PlaneIndex].func();
                };
              }
            }
          }

          Scene.add(plane);
        },
        undefined,
        function (error) {
          console.error("Erreur lors du chargement de l image", error);
        },
      );
    } else {
      let largeurPlane = 10;
      let hauteurPlane = 10;
      let scale = 1;

      if (
        tabPlaneHeight[PlaneIndex] != null &&
        tabPlaneWidth[PlaneIndex] != null
      ) {
        largeurPlane = tabPlaneWidth[PlaneIndex];
        hauteurPlane = tabPlaneHeight[PlaneIndex];
      }

      if (tabPlaneScale[PlaneIndex] != null) scale = tabPlaneScale[PlaneIndex];

      largeurPlane *= scale;
      hauteurPlane *= scale;

      const material = new THREE.MeshBasicMaterial({
        color: tabTextureOrColor[PlaneIndex].value,
        opacity: tabOpacity[PlaneIndex],
        transparent: true,
      });
      let geometry = new THREE.PlaneGeometry(largeurPlane, hauteurPlane);

      if (tabCircle[PlaneIndex]) {
        geometry = new THREE.CircleGeometry(tabCircle[PlaneIndex]);
      }

      const plane = new THREE.Mesh(geometry, material);

      plane.position.set(
        tabPosX[PlaneIndex],
        tabPosY[PlaneIndex],
        tabPosZ[PlaneIndex],
      );

      if (tabPlaneName[PlaneIndex] != null)
        plane.name = tabPlaneName[PlaneIndex];
      else plane.name = "plane" + PlaneIndex;

      if (tabFonction[PlaneIndex].type != null) {
        plane.userData.isClickable = true;
        if (tabFonction[PlaneIndex].type === "changerscene") {
          plane.userData.onClick = function () {
            changerScene(tabFonction[PlaneIndex].value); // Changer de scène lorsque le plane est cliqué
          };
        } else if (tabFonction[PlaneIndex].type == "theEnd") {
          plane.userData.onClick = function () {
            theEnd(tabFonction[PlaneIndex].value);
          };
        } else if (tabFonction[PlaneIndex].type === "fonction") {
          if (tabFonction[PlaneIndex].hasArgs) {
            plane.userData.onClick = function () {
              tabFonction[PlaneIndex].func(...tabFonction[PlaneIndex].args);
            };
          } else {
            plane.userData.onClick = function () {
              tabFonction[PlaneIndex].func();
            };
          }
        }
      }

      Scene.add(plane);
    }
  }
}

function chargementMainBookandCat() {
  const loader = new THREE.TextureLoader();
  loader.load(
    // Chemin de l'image
    "Ressources/Images/background/livre.png",
    function (texture) {
      let imageWidth = texture.image.width;
      let imageHeight = texture.image.height;
      let scale = 0.1;

      imageWidth *= scale;
      imageHeight *= scale;

      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        opacity: 1,
        transparent: true,
      });
      const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
      const plane = new THREE.Mesh(geometry, material);

      plane.position.set(90, -50, 1);
      plane.name = "Book";

      scenes.forEach((scene) => {
        if (!scene.notLivre) {
          // Clonage du plan pour chaque scène
          const planeClone = plane.clone();
          planeClone.userData.isClickable = true;
          planeClone.userData.onClick = function () {
            changerScene(0); // Changer de scène lorsque le plane est cliqué
          };
          // Ajout du plan cloné à la scène
          scene.add(planeClone);
        }
      });
    },
    undefined,
    function (error) {
      console.error("Erreur lors du chargement de l image", error);
    },
  );

  loader.load(
    // Chemin de l'image
    "Ressources/Images/objects/main_gauche.png",
    function (texture) {
      let imageWidth = texture.image.width;
      let imageHeight = texture.image.height;
      let scale = 0.5;

      imageWidth *= scale;
      imageHeight *= scale;

      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        opacity: 1,
        transparent: true,
      });
      const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
      const plane = new THREE.Mesh(geometry, material);

      plane.position.set(-85, -35, 1);
      plane.name = "Main";

      scenes.forEach((scene) => {
        if (!scene.notMain) {
          // Clonage du plan pour chaque scène
          const planeClone = plane.clone();
          // Ajout du plan cloné à la scène
          scene.add(planeClone);
        }
      });
    },
    undefined,
    function (error) {
      console.error("Erreur lors du chargement de l image", error);
    },
  );

  Promise.all([chargerTexture("Ressources/Images/objects/chat.png")])
    .then((textures) => {
      const material = new THREE.MeshBasicMaterial({
        color: null,
        map: textures[0],
        transparent: true,
      });
      scenes.forEach((scene) => {
        if (scene.getObjectByName("chat")) {
          scene.getObjectByName("chat").material = material;
        }
      });
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des textures :", error);
    });
}

function chargementTextureMainEgout() {
  const promessesChargement = [];

  promessesChargement.push(
    chargerTexture("Ressources/Images/background/egouts.png"),
  );

  promessesChargement.push(
    chargerTexture("Ressources/Images/background/égouts3directions.png"),
  );

  promessesChargement.push(
    chargerTexture("Ressources/Images/objects/main_gauche.png"),
  );
  promessesChargement.push(
    chargerTexture("Ressources/Images/objects/main_carotte.png"),
  );
  promessesChargement.push(
    chargerTexture("Ressources/Images/objects/main_mangee.png"),
  );

  Promise.all(promessesChargement)
    .then((textures) => {
      const j = 2;
      for (let i = 0; i < j; i++) texturesEgout.push(textures[i]);
      for (let i = j; i < textures.length; i++) texturesMain.push(textures[i]);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des textures :", error);
    });
}

export function changementMain(index = 0) {
  const plane = getScene(3).getObjectByName("Main");
  plane.material.map = texturesMain[index];
  renderer.render(currentScene, camera);
}

function chatVisible() {
  const plane = currentScene.getObjectByName("chat");
  if (Math.floor(Math.random() * 4) == 0) {
    plane.material.opacity = 1;
    plane.position.z = 0.5;
  } else {
    plane.material.opacity = 0;
    plane.position.z = -1;
  }
  renderer.render(currentScene, camera);
}

export function egout(sceneName, index) {
  const scene = getSceneByName(sceneName);

  scene.getObjectByName("background").material.map =
    texturesEgout[Math.floor(Math.random() * 2) % 2];

  scene.getObjectByName("fleche_gauche").userData.onClick = function () {
    scene.tabGauche[index - 1].func(...scene.tabGauche[index - 1].args);
  };
  scene.getObjectByName("fleche_haut").userData.onClick = function () {
    scene.tabHaut[index - 1].func(...scene.tabHaut[index - 1].args);
  };
  scene.getObjectByName("fleche_droite").userData.onClick = function () {
    scene.tabDroite[index - 1].func(...scene.tabDroite[index - 1].args);
  };

  if (currentSceneIndex != scene.index) changerScene(scene.index);
  else afficherScene(scene.index);
}

export function findTomi(IndexScene) {
  TotemTomi = 1;
  changerScene(IndexScene);
}

export function placeTomi(value) {
  if (value == 1) {
    if (TotemTomi == 1) {
      TotemTomi = 0;
      changerScene(33);
    } else changerScene(28);
  } else if (value == 0) {
    if (TotemTomi == 1) {
      TotemTomi = 0;
      changerScene(26);
    } else changerScene(32);
  } else {
    changerScene(-1);
    throw new Error("Erreur : placeTomi(value) : value doit être 0 ou 1");
  }
}

export function Timer() {
  clearTimeout(timer);

  if (getLastScene().name == "scene_36_Cercueil") PlayAudio("DingDong", 1, 400)
  timer = setTimeout(() => {
    if (getLastScene().name == "scene_36_Cercueil") theEnd(37);

    if (getLastScene().name == "scene_53_Foetus") theEnd(54);
  }, 10000);
}

export function lancerSort(index) {
  if (getLastScene().getObjectByName("Main").material.map == texturesMain[2]) {
    theEnd(57);
  } else if (index) {
    changerScene(52);
  } else {
    changerScene(-1);
  }
}

///----------------------------------Lancé de dé------------------------------------

export function lancerDe() {
  const de = Math.floor(Math.random() * 6);

  const planeDe = getLastScene().getObjectByName("de");
  const material = new THREE.MeshBasicMaterial({
    color: null,
    map: texturesDe[de],
    transparent: true,
  });

  // Réinitialisation du matériau du plane
  planeDe.material.opacity = 1;
  planeDe.material = material;

  planeDe.position.z = 0.6;

  afficherScene();
  //console.log("plane ajouté dans ", scene.name)
  setTimeout(function () {
    planeDe.material.opacity = 0;
    planeDe.position.z = -1;
    afficherScene();
    return de;
  }, 4000); // Attendre 1 seconde (1000 millisecondes)
}

function chargerTextureDe() {
  const promessesChargement = [];

  // Générer les chemins d'accès aux fichiers et charger les textures
  for (let i = 0; i < 6; i++) {
    const cheminTexture = `Ressources/Images/de/texture_de_${String(
      i + 1,
    ).padStart(2, "0")}.png`;
    promessesChargement.push(chargerTexture(cheminTexture));
  }

  Promise.all(promessesChargement)
    .then((textures) => {
      for (let i = 0; i < textures.length; i++) texturesDe.push(textures[i]);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des textures :", error);
    });
}

///---------------------------------Questions_Game----------------------------------

function chargerTexture(url) {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        resolve(texture);
      },
      undefined,
      (error) => {
        reject(error);
      },
    );
  });
}

function chargerTextureQuestion() {
  const promessesChargement = [];

  // Générer les chemins d'accès aux fichiers et charger les textures
  for (let i = 0; i < 5; i++) {
    const cheminTexture = "Ressources/Images/questions/cartes_quizz_"+(i+1)+".png";
    promessesChargement.push(chargerTexture(cheminTexture));
  }

  for (let i = 0; i < 22; i++) {
    const cheminTexture = `Ressources/Images/questions/texture_question_${String(
      i,
    ).padStart(2, "0")}.png`;
    promessesChargement.push(chargerTexture(cheminTexture));
  }

  Promise.all(promessesChargement)
    .then((textures) => {
      for (let i = 0; i < 5; i++) texturesQuestions.push(textures[i]);
      for (let i = 5; i < textures.length; i++)
        texturesQuestions.push(textures[i]);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des textures :", error);
    });
}

export function InitQuestionsGame(sceneName) {
  StopAudio(currentBackSoundName);
  goodAnswers = 0;
  numerosTires = new Set();

  const scene = getSceneByName(sceneName);

  scene.BackSoundName = null;
  const startPlane = scene.getObjectByName("plane_start");
  const startTexturePlane = scene.getObjectByName("plane_texture_start");
  startPlane.userData.isClickable = false;
  startPlane.userData.onClick = null;
  startPlane.position.z = 0.5;
  startTexturePlane.material.opacity = 0;
  startTexturePlane.material.needsUpdate = true;

  const plane0 = scene.getObjectByName("plane_question0");
  const plane1 = scene.getObjectByName("plane_question1");
  if (plane0.material.color) plane0.material.color = null;
  if (plane1.material.color) plane1.material.color = null;
  plane0.material.opacity = 1;
  plane1.material.opacity = 1;
  plane0.userData.isClickable = true;
  plane1.userData.isClickable = true;
  plane0.userData.onClick = function () {
    CheckAnswer(plane0, plane1, scene);
  };
  plane1.userData.onClick = function () {
    CheckAnswer(plane1, plane0, scene);
  };

  changerScene(0);
  ChooseQAA(plane0, plane1, 0);
}

function CheckAnswer(clickPlane, notClickPlane, scene) {
  stopTimer();
  StopAudio(currentSoundName);
  if (clickPlane.userData.answer == true) {
    console.log("bonne réponse");
    goodAnswers++;
    console.log("goodAnswers : " + goodAnswers + "/5");

    if (goodAnswers == 4) {
      ChooseQAA(clickPlane, notClickPlane, 10);
    } else {
      ChooseQAA(clickPlane, notClickPlane);
    }
    changerScene(0);
  } else {
    console.log("mauvaise réponse");
    ReStartGame(scene);
    StopAudio(currentBackSoundName);
    PlayAudio("fin-question-qui-veut-gagner-des-millions");
    theEnd(63);
  }
}

function ReStartGame(scene) {
  goodAnswers = -1;
  scene.texte = "scene_60.txt";
  scene.BackSoundName = "jingle-qui-veut-gagner-des-millions";

  const plane_num_question = getLastScene().getObjectByName("plane_num_question");
  plane_num_question.position.z = -1;
  plane_num_question.material.opacity = 0;

  const startPlane = scene.getObjectByName("plane_start");
  const startTexturePlane = scene.getObjectByName("plane_texture_start");
  startTexturePlane.material.opacity = 1;
  startTexturePlane.material.needsUpdate = true;
  startPlane.position.z = 0.7;
  startPlane.userData.isClickable = true;
  startPlane.userData.onClick = function () {
    InitQuestionsGame(scene.name);
  };

  const plane0 = scene.getObjectByName("plane_question0");
  const plane1 = scene.getObjectByName("plane_question1");
  plane0.material.map = texturesQuestions[0];
  plane0.material.opacity = 0;
  plane0.material.needsUpdate = true;
  plane1.material.map = texturesQuestions[0];
  plane1.material.opacity = 0;
  plane1.material.needsUpdate = true;

  plane0.userData.isClickable = false;
  plane1.userData.isClickable = false;
  plane0.userData.onClick = null;
  plane1.userData.onClick = null;
}

function ChooseQAA(plane0, plane1, question = null) {
  plane0.userData.answer = false;
  plane1.userData.answer = false;

  if (question == null) {
    do {
      question = Math.floor(
        (Math.random() * (texturesQuestions.length - 5)) / 2,
      );
    } while (numerosTires.has(question) || question == 10 || question == 0);
  }
  numerosTires.add(question);

  const plane_num_question = getLastScene().getObjectByName("plane_num_question");
  plane_num_question.position.z = 0.5
  plane_num_question.material.opacity = 1;
  plane_num_question.material.map = texturesQuestions[goodAnswers];
  plane_num_question.material.needsUpdate = true;
  
  const answer = Math.floor(Math.random() * 2);

  if (question != -1 && answer != -1) {
    //Ajouter changement du texte dans le livre
    if (answer == 0) {
      plane0.material.map = texturesQuestions[question * 2 + 5];
      plane0.userData.answer = true;
      plane1.material.map = texturesQuestions[question * 2 + 1 + 5];
    } else {
      plane1.material.map = texturesQuestions[question * 2 + 5];
      plane1.userData.answer = true;
      plane0.material.map = texturesQuestions[question * 2 + 1 + 5];
    }

    if (question == 10) {
      plane0.userData.answer = false;
      plane1.userData.answer = false;
    }
    plane0.material.needsUpdate = true;
    plane1.material.needsUpdate = true; 
    renderer.render(currentScene, camera);
    stopTimer();
    console.log("Question : " + question + " answer : " + answer);
    chargerTexte("Ressources/Textes_Quiz/question_"+question+".txt", "scene_0_Livre")
  } else {
    console.error("Erreur lors du choix des questions", error);
  }
}

export function startTimer(remainingTime, scene) {
  (scene.BackSoundName = "question-qui-veut-gagner-des-millions"),
    console.log("Timer de " + remainingTime + "s est lancé !");
  timer = setInterval(() => {
    remainingTime--;

    if (remainingTime == 6) {
      console.log("Il reste " + remainingTime + " secondes !");
      PlayAudio("Tic_tac");
    }

    if (remainingTime == 1) {
      console.log("Il reste " + remainingTime + " secondes !");
      StopAudio(currentBackSoundName);
      PlayAudio("fin-question-qui-veut-gagner-des-millions");
    }

    if (remainingTime <= 0) {
      console.log("Le temps est écoulé !");
      stopTimer();

      if (goodAnswers == 4) {
        ReStartGame(scene);
        theEnd(61);
      } else {
        ReStartGame(scene);
        theEnd(62);
      }
    }
  }, 1000); // Vérifier toutes les secondes
}

function stopTimer() {
  clearInterval(timer); // Arrêter le timer lorsque le temps est écoulé
}

///--------------------------------------Audio--------------------------------------

function StopAudio(soundName) {
  if (soundName != null) {
    const sound = sounds[soundName];
    if (sound.isPlaying) {
      console.log("sound : " + soundName + " stoppé");
      const offset = sound.offset;
      sound.stop();

      return offset;
    }
  }
  return null;
}

export function PlayAudio(
  soundName,
  repeatNTime = 1,
  volume = 150,
  loop = false,
) {
  if (currentSoundName != null && !loop) StopAudio(currentSoundName);
  if (currentBackSoundName != null && loop) StopAudio(currentBackSoundName);

  const NextSound = sounds[soundName];
  const nbBoucle = repeatNTime;

  NextSound.setVolume(volume);

  console.log("sound : " + soundName + " joué");

  if (loop) {
    NextSound.setLoop(true); // Activer la boucle
    NextSound.play();
    currentBackSoundName = soundName;
  } else {
    currentSoundName = soundName;
    NextSound.play();
  }
}

function chargementAndio(paths) {
  // Charger chaque fichier audio et le stocker dans le tableau avec son nom
  paths.forEach((path) => {
    const name = path.split("/").pop().split(".").shift(); // Extraire le nom du fichier
    audioLoader.load(path, function (buffer) {
      const sound = new THREE.PositionalAudio(listener);
      sound.setBuffer(buffer);
      sounds[name] = sound;
    });
  });
}

///--------------------------------------Texte--------------------------------------

export function chargerTexte(
  texte = "Ressources/Textes/Erreur.txt",
  sceneAfficheName = "scene_0_Livre",
) {
  console.log("chargement du texte");
  // Charger le texte à partir du fichier text.txt et l'afficher
  fetch(texte)
    .then((response) => response.text())
    .then((text) => {
      drawText(
        text,
        "24px",
        "black",
        325,
        20,
        635,
        getSceneByName(sceneAfficheName),
      );
    })
    .catch((error) => console.error("Error loading the text file:", error));
}

// Fonction modifiée pour dessiner le texte sur le canvas avec une plus grande taille de police
function drawText(
  text,
  fontSize,
  textColor,
  positionX,
  positionY,
  width,
  scene,
) {
  // Effacer le canvas précédent
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Configuration du style du texte
  context.font = `bold ${fontSize} Julius Sans One`;
  context.textAlign = "center";
  context.fillStyle = textColor;

  // Ajout d'une ombre portée pour améliorer la lisibilité
  context.shadowColor = "black";
  context.shadowBlur = 3;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;

  // Dessiner le texte avec ombre
  const maxWidth = width;
  const lineHeight = parseInt(fontSize, 10) + 10;
  const x = positionX;
  const y = positionY;

  // Optionnel : Dessiner un contour autour du texte pour augmenter le contraste
  context.strokeStyle = "black";
  context.lineWidth = 4;
  wrapText(context, text, x, y, maxWidth, lineHeight);

  // Utilisation du canvas comme texture
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  texture.minFilter = THREE.LinearFilter; // Utilise un filtrage linéaire pour les minifications
  texture.magFilter = THREE.LinearFilter; // Utilise un filtrage linéaire pour les agrandissements
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });

  // Vérifie si le mesh de texte existe déjà
  let textMesh = scene.getObjectByName("textMesh");
  if (textMesh) {
    // Si le mesh existe déjà, mettez simplement à jour la texture
    textMesh.material.map = texture;
    textMesh.material.needsUpdate = true;
  } else {
    // Sinon, créez un nouveau mesh pour le texte
    const geometry = new THREE.PlaneGeometry(100, 100);
    textMesh = new THREE.Mesh(geometry, material);
    textMesh.name = "textMesh";
    scene.add(textMesh);
  }
  // Positionner le mesh de texte selon les paramètres positionX et positionY
  // Vous devez ajuster ces valeurs en fonction de l'échelle de votre scène
  // Cette étape déplace le mesh du texte sans modifier l'image de fond
  textMesh.position.x = positionX - 350;
  textMesh.position.z = 0.6; // Assurez-vous que le texte s'affiche devant l'image de fond
  if (currentSceneIndex != -1) renderer.render(scene, camera);
}

// Fonction pour découper le texte en lignes
function wrapText(context, text, x, initialY, maxWidth, lineHeight) {
  const paragraphs = text.split("\n");
  let y = initialY;

  paragraphs.forEach((paragraph) => {
    if (paragraph === "") {
      // Si le paragraphe est vide (ligne vide), sauter une ligne
      y += lineHeight;
    } else {
      // Sinon, traiter le paragraphe normalement
      const words = paragraph.split(" ");
      let line = "";

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
      y += lineHeight; // Ajouter un espace après chaque paragraphe
    }
  });
}

///----------------------------------EventListener----------------------------------

// Ajouter des gestionnaires d'événements de clic à la toile
renderer.domElement.addEventListener("click", function (event) {
  if (currentScene) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Calcule la position du clic dans l'espace 3D
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    // Lance un rayon depuis la caméra à travers la position du clic
    raycaster.setFromCamera(mouse, camera);

    // Recherche les intersections avec les objets cliquables de la scène actuelle
    const intersects = raycaster.intersectObjects(currentScene.children, true);

    // Si une intersection est trouvée, exécute la fonction onClick de l'objet
    if (
      intersects.length > 0 &&
      typeof intersects[0].object.userData.onClick === "function"
    ) {
      intersects[0].object.userData.onClick();
    }
  }
});

window.addEventListener("resize", function () {
  if (currentScene) {
    // Positionner la caméra pour que le plane remplisse l'écran
    const aspectRatio = window.innerWidth / window.innerHeight;

    // Mettre à jour le champ de vision de la caméra et le renderer
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(currentScene, camera);
  }
});

document.addEventListener(
  "mousemove",
  function (event) {
    if (currentScene) {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(
        currentScene.children,
        true,
      );

      let clickableFound = false;
      intersects.forEach((intersect) => {
        if (intersect.object.userData.isClickable) {
          clickableFound = true;
        }
      });

      if (clickableFound) {
        renderer.domElement.classList.add("clickable");
      } else {
        renderer.domElement.classList.remove("clickable");
      }
    }
  },
  false,
);
