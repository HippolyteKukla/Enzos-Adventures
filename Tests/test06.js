// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créer un plan
const geometry = new THREE.PlaneGeometry(10, 10);
const material = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0.0 }
    },
    vertexShader: `
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;

        void main() {
            float d = length(vec2(0.5) - vUv);
            float flash = abs(sin(uTime * 10.0));
            float alpha = smoothstep(0.48 + flash * 0.02, 0.5 + flash * 0.02, d);
            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
    `
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Positionner la caméra
camera.position.z = 10;

// Fonction d'animation
function animate(time) {
    requestAnimationFrame(animate);
    material.uniforms.uTime.value = time / 1000; // Passer le temps au shader pour le clignotement
    renderer.render(scene, camera);
}

animate(0);
