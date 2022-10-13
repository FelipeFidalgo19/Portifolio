import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./home.mudule.scss";

import perfil from "../../img/capa.png";
import js from "../../img/logos/js.png";
import css from "../../img/logos/css3.webp";
import html from "../../img/logos/html.webp";
import php from "../../img/logos/php.png";
import py from "../../img/logos/py.png";
import react_logo from "../../img/logos/react_logo.png";
import vscode from "../../img/logos/vscode.png";
import figma from "../../img/logos/figma.png";
import node from "../../img/logos/nodejs.png";

import { motion } from "framer-motion";
const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
export default function Home({ darkMode }) {
    const [valor, setVal] = useState(1); 

  return (
    <Container className="cont" fixed>
      <div className="content">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: valor }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          style={darkMode ? { backgroundColor: "rgb(92, 92, 92)" } : { backgroundColor: "rgb(168, 168, 168)" }}>
          <img src={perfil} onMouseEnter={() => setVal(1.1)} onMouseLeave={() => setVal(1)}/>
          <motion.div
            className="text-box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1>Olá Mundo! </h1>
            <h2>
              Meu nome é <strong>Felipe Fidalgo</strong>
            </h2>
            <p>Sou desenvolvedor full-stack e apaixonado por tecnologia</p>
            <button>Contate-me</button>
          </motion.div>
        </motion.div>
        <div className="social-box">
          <ul>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}  className="content-buttom">
          <img src={js} className="circulo" />
          <img src={react_logo} style={{backgroundColor: '#fff'}} className="circulo" />
          <img src={css} className="circulo" />
          <img src={html} className="circulo" />
          <img src={node} style={{backgroundColor: '#fff'}} className="circulo" />
          <img src={figma} className="circulo" />
          <img src={py} className="circulo" />
          <img src={php} style={{backgroundColor: '#fff'}} className="circulo" />
          <img src={vscode} style={{backgroundColor: '#fff'}} className="circulo" />
      </motion.div>

    </Container>
  );
}
