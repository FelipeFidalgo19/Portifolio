import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import './sobre.module.scss';

const ThreeScene = () => {
    const mountRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.2, 10);
        camera.position.z = 1;
        camera.position.y = 1.5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0); // Fundo transparente

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }
        // Adicionando luz direcional à cena
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9); // Cor branca, intensidade 0.5
        directionalLight.position.set(3, 5, 4); // Posição da luz
        scene.add(directionalLight);

        // Carregar o modelo GLTF
        const loader = new GLTFLoader();
        const modelPath = `${process.env.PUBLIC_URL}/3D/terra/scene.gltf`; // Caminho corrigido
        console.log(`Tentando carregar o modelo GLTF a partir de: ${modelPath}`);

        loader.load(modelPath, (gltf) => {
            const model = gltf.scene;
            model.scale.set(0.5, 0.5, 0.5);
            model.rotateX(6);
            scene.add(model);
            modelRef.current = model; // Salvar referência ao modelo
            console.log('Modelo GLTF carregado com sucesso!');
        }, undefined, (error) => {
            console.error('An error happened while loading the GLTF model', error);
        });

        function animate(time) {
            renderer.render(scene, camera);
            // Girar o modelo continuamente
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01; // Ajuste a velocidade de rotação conforme necessário
                if(camera.position.y!=0.7799999999999994){
                    camera.position.y -= 0.01; 
                    console.log(camera.position.y);
                }
            }
        }

        renderer.setAnimationLoop(animate);

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 100, // Ajuste para garantir que o canvas fique no fundo
                pointerEvents: 'none', // Impede interações com o canvas
            }}
        />
    );
};

export default function Sobre() {
    return (
        <Container className="cont" fixed>
            <ThreeScene />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="content"
            >

                <div className="text" style={{ height: 500 }}>
                    <h1>Bem-vindo ao meu site de portfólio!</h1>
                    <hr />
                    <p>
                        Sou um desenvolvedor full-stack apaixonado por tecnologia, e estou animado por ter a oportunidade de compartilhar meu trabalho e minha jornada com você.<br /><br />
                        Desde jovem, sempre fui fascinado pela tecnologia e sua capacidade de transformar a maneira como vivemos e trabalhamos. Como desenvolvedor full-stack, tenho o privilégio de trabalhar com tecnologias inovadoras e colaborar em projetos empolgantes. Ao longo dos anos, adquiri habilidades em diversas linguagens de programação e plataformas, incluindo React Native, React js, JavaScript, PHP, Node.js, C#, Python, entre outros.<br /><br />
                        Acredito que a tecnologia tem o poder de criar soluções transformadoras que impactam a vida das pessoas de maneiras positivas. Para mim, a criatividade e a inovação são essenciais para criar aplicativos e softwares que resolvam problemas complexos de forma eficiente.<br /><br />
                        Neste site, você encontrará exemplos dos projetos em que trabalhei, incluindo aplicações móveis criadas com React Native, web apps desenvolvidos com React js, e soluções back-end construídas com Node.js, PHP e C#. Também tenho experiência em trabalhar com a linguagem de programação Python em projetos de análise de dados e machine learning.<br /><br />
                        Espero que você aprecie o meu trabalho e sinta-se à vontade para entrar em contato comigo para discutir oportunidades de colaboração ou simplesmente compartilhar sua opinião.<br /><br />
                        Obrigado por visitar meu site de portfólio!<br /><br />
                    </p>
                </div>
            </motion.div>
        </Container>
    );
}
