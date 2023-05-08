import React, { useState, useRef, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import Container from "@mui/material/Container";
import './sobre.module.scss';


export default function Sobre() {


    return (
        <Container className="cont" fixed>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="content">
                <div style={{marginTop:100}}>
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
    )
}