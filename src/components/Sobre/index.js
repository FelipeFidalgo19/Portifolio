import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import './sobre.module.scss';


export default function Sobre() {

   return (
        <Container className="cont" fixed>
            <motion.div  initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="content">

                <h1>Agora um pouco sobre mim...</h1>
                <p>Não consigo começar de outra forma sem ser contando um pouco</p>
                
            </motion.div>
        </Container>
   )
}