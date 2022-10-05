import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Style from "./home.mudule.scss";
import perfil from "../../img/capa.png";
import { motion } from "framer-motion";

export default function Home({ darkMode }) {
  return (
    <Container fixed>
      <div className="content">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          style={darkMode ? { backgroundColor: "rgb(92, 92, 92)" } : { backgroundColor: "rgb(168, 168, 168)" }}>
          <img src={perfil} />
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
    </Container>
  );
}
