import * as script from '../script.js';
// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();

// Tableau de planes
const planes = [];

// Nombre de planes dans le tableau
const nbPlanes = script.getnbEndIncones();

// Nombre de colonnes et de lignes
const nbColonnes = 3;
const nbLignes = Math.ceil(nbPlanes / nbColonnes);

// Largeur et hauteur d'un plane
const planeWidth = 10;
const planeHeight = 10;

// Espacement entre les planes
const espacementX = 0.2;
const espacementY = 0.5;

// Créer et positionner chaque plane dans le tableau
for (let ligne = 0; ligne < nbLignes; ligne++) {
    for (let colonne = 0; colonne < nbColonnes; colonne++) {
        const index = ligne * nbColonnes + colonne;
      
        if (index < nbPlanes) {
          
            const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.5, transparent: script.gettabEndFind()[index] });
            const plane = new THREE.Mesh(geometry, material);
          
            const posX = colonne * (planeWidth + espacementX) - ((nbColonnes - 1) * (planeWidth + espacementX)) / 2;
            const posY = ligne * (planeHeight + espacementY) - ((nbLignes - 1) * (planeHeight + espacementY)) / 2;
          
            plane.position.set(posX, -posY, 0);
            scene.add(plane);
            planes.push(plane);
        }
    }
}

script.addScenes(scene);

