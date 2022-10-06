import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./home.mudule.scss";
import perfil from "../../img/capa.png";
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
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"} className="circulo" />
          <img src={"https://assets.website-files.com/60d251a34163cf29e1220806/610ccf8b080e59622903db0e_react_logo.png"} style={{backgroundColor: '#fff'}} className="circulo" />
          <img src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"} className="circulo" />
          <img src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"} className="circulo" />
          <img src={"https://logospng.org/download/node-js/logo-node-js-1024.png"} style={{backgroundColor: '#fff'}} className="circulo" />
          <img src={"https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png"} className="circulo" />
          <img src={"https://www.stickersdevs.com.br/wp-content/uploads/2022/01/python-logo-adesivo-sticker-800x800.png"} className="circulo" />
          <img src={"https://logospng.org/download/php/logo-php-1024.png"} style={{backgroundColor: '#fff'}} className="circulo" />
          <img src={"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"} style={{backgroundColor: '#fff'}} className="circulo" />
      </motion.div>

    </Container>
  );
}
