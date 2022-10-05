import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Style from './home.mudule.scss';
import perfil from '../../img/capa.png'

export default function Home({ darkMode }) {

   return (
        <Container fixed>
            <div className='content'>
                <div className='box' style={darkMode ? {backgroundColor: 'rgb(92, 92, 92)'} : {backgroundColor: 'rgb(168, 168, 168)'}} >
                    <img src={perfil}/>
                    <div className='text-box'>
                        <h1>Olá Mundo! </h1>
                        <h2>Meu nome é <strong>Felipe Fidalgo</strong></h2>
                        <p>Sou desenvolvedor full-stack e apaixonado por tecnologia</p>
                    </div>
                </div>
                <div className='social-box'>
                    <ul>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </Container>
   )
}