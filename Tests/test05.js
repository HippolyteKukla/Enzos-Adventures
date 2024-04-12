import * as script from "/script.js";
// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Activer la transparence pour la toile
//scene.background = new THREE.Color(0x000000); // Noir
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
loader.load(
    // Chemin de l'image
    '/ImagesTests/ruelle_assis.png',
    function (texture) {
        const imageWidth = texture.image.width; // Largeur de l'image
        const imageHeight = texture.image.height; // Hauteur de l'image
        const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);

        // Définir le filtre de texture sur "nearest" pour maintenir la netteté des pixels
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;

        // Créer le matériau avec la texture chargée
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Créer le mesh avec la géométrie et le matériau
        const plane = new THREE.Mesh(geometry, material);

        // Ajouter le mesh à la scène
        scene.add(plane);
        script.adaptCam(imageWidth,imageHeight)

    },
    undefined,
    function (error) {
        console.error('Erreur lors du chargement de l\'image', error);
    }
);


const loader2 = new THREE.TextureLoader();
loader2.load(
    // Chemin de l'image
    '/ImagesTests/main.png',
    function (texture) {
        const imageWidth = texture.image.width; // Largeur de l'image
        const imageHeight = texture.image.height; // Hauteur de l'image
        const geometry = new THREE.PlaneGeometry(0.5*imageWidth, imageHeight*0.5);
      const greenFilter = new THREE.Color(0xc1e9bc);

        // Définir le filtre de texture sur "nearest" pour maintenir la netteté des pixels
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;

        // Créer le matériau avec la texture chargée
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, color:greenFilter});
        

        // Créer le mesh avec la géométrie et le matériau
        const plane = new THREE.Mesh(geometry, material);
        plane.position.set(35, -25, 0.5);
        plane.userData.isClickable = true;

        // Ajouter le mesh à la scène
        scene.add(plane);

      document.addEventListener('click', function(event) {
          const raycaster = new THREE.Raycaster();
          const mouse = new THREE.Vector2();

          // Coordonnées de la souris normalisées
          mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
          mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

          // Mise à jour du rayon
          raycaster.setFromCamera(mouse, camera);

          // Vérification des intersections avec le cube
          const intersects = raycaster.intersectObject(plane);

          // Si le cube est cliqué, appeler la fonction onClick
          if (intersects.length > 0) {
            const Path = script.StartPath + '00' + script.EndPath;
            script.changeScene(Path,scene);
          }
      }, false);
    },
    undefined,
    function (error) {
        console.error('Erreur lors du chargement de l\'image', error);
    }
);


window.addEventListener('resize', function () {
  // Positionner la caméra pour que le plane remplisse l'écran
  const aspectRatio = window.innerWidth / window.innerHeight;

  // Mettre à jour le champ de vision de la caméra et le renderer
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


document.addEventListener('mousemove', function (event) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    let clickableFound = false;
    intersects.forEach(intersect => {
        if (intersect.object.userData.isClickable) {
            clickableFound = true;
        }
    });

    if (clickableFound) {
        renderer.domElement.classList.add('clickable');
    } else {
        renderer.domElement.classList.remove('clickable');
    }
}, false);




// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
