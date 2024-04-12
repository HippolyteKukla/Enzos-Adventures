// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Définir la taille désirée pour l'image
const imageWidth = 10; // Largeur de l'image
const imageHeight = 10; // Hauteur de l'image

// Créer la géométrie avec la taille désirée
const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);

// Création du canvas pour le texte
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Taille du canvas (peut être ajustée selon vos besoins)
canvas.width = 1024;
canvas.height = 1024;


// Charger l'image pixelisée
const loader = new THREE.TextureLoader();
loader.load(
  // Chemin de l'image
  '/livre_2.png',
  function(texture) {
    const imageWidth = texture.image.width; // Largeur de l'image
    const imageHeight = texture.image.height; // Hauteur de l'image
    const scale = 0.1;
    const geometry = new THREE.PlaneGeometry(scale * imageWidth, scale * imageHeight);
    // Définir le filtre de texture sur "nearest" pour maintenir la netteté des pixels
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    // Créer le matériau avec la texture chargée
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Créer le mesh avec la géométrie et le matériau
    const plane = new THREE.Mesh(geometry, material);
    plane.position.z = -1; // Positionnement du plan dans la scène

    // Ajouter le mesh à la scène
    scene.add(plane);
  },
  undefined,
  function(error) {
    console.error('Erreur lors du chargement de l\'image', error);
  }
);


// Fonction pour découper le texte en lignes
function wrapText(context, text, x, initialY, maxWidth, lineHeight) {
  const paragraphs = text.split('\n');
  let y = initialY;

  paragraphs.forEach(paragraph => {
    if (paragraph === '') {
      // Si le paragraphe est vide (ligne vide), sauter une ligne
      y += lineHeight;
    } else {
      // Sinon, traiter le paragraphe normalement
      const words = paragraph.split(' ');
      let line = '';

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + ' ';
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


// Fonction modifiée pour dessiner le texte sur le canvas avec une plus grande taille de police
function drawText(text, fontSize, textColor, positionX, positionY, width) {
  // Effacer le canvas précédent
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Configuration du style du texte
  context.font = `bold ${fontSize} Julius Sans One`;
  context.textAlign = 'center';
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
  context.strokeStyle = 'black';
  context.lineWidth = 4;
  wrapText(context, text, x, y, maxWidth, lineHeight);


  // Utilisation du canvas comme texture
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  texture.minFilter = THREE.LinearFilter; // Utilise un filtrage linéaire pour les minifications
  texture.magFilter = THREE.LinearFilter; // Utilise un filtrage linéaire pour les agrandissements
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

  // Vérifie si le mesh de texte existe déjà
  let textMesh = scene.getObjectByName('textMesh');
  if (textMesh) {
    // Si le mesh existe déjà, mettez simplement à jour la texture
    textMesh.material.map = texture;
    textMesh.material.needsUpdate = true;
  } else {
    // Sinon, créez un nouveau mesh pour le texte
    textMesh = new THREE.Mesh(geometry, material);
    textMesh.name = 'textMesh';
    scene.add(textMesh);
  }

  // Positionner le mesh de texte selon les paramètres positionX et positionY
  // Vous devez ajuster ces valeurs en fonction de l'échelle de votre scène
  // Cette étape déplace le mesh du texte sans modifier l'image de fond
  textMesh.position.x = positionX /100 - (imageWidth / 2);
  textMesh.position.z = 0; // Assurez-vous que le texte s'affiche devant l'image de fond


  camera.position.z = 10;
}

// Charger le texte à partir du fichier text.txt et l'afficher
fetch('text_2.txt')
  .then(response => response.text())
  .then(text => {
    drawText(text, '22px', 'black', 300, 200, 550);
  })
  .catch(error => console.error('Error loading the text file:', error));

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
