import React, {useState,useRef,useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import Container from "@mui/material/Container";
import './sobre.module.scss';


export default function Sobre() {

  const [animeted , setAnimeted] = useState('rigth');

  useEffect(()=>{
    setTimeout(() => {
      if(animeted=='rigth'){
        setAnimeted('left');
      }else{
        setAnimeted('rigth');
      }
    },300);
  })


   return (
          <Container className="cont" fixed>
              <motion.div  initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
             className="content">

                  <h1>Agora um pouco sobre mim...</h1>
                  <hr />
                  <p>
                    Não consigo começar de outra forma que não seja contando um pouco da minha historia, dês de criança sempre gostei de desmontar e montar coisas, na maioria das vezes brinquedos quebrados do meu irmão mais novo, 
                    adorava misturar as coisas e ver como elas funcionam, com o tempo comecei a gostar de fazer a mesma coisa em jogos de computador, para não ficar aqui 
                    contando todas as coisas da minha vida, podemos saltar para a minha escolha de carreira, meu perfil sempre foi de curioso, e adorava a sensação de descoberta nas aulas relacionadas a ciencias na escolha, 
                    ao mesmo tempo que pensava na minha escolha de carreira comecei a me envolver com desenvolvimento web e aqui estou, desmontando e montando codigo, criando coisas novas a partir de tecnologias emergentes e empolgado com o que pessoas como eu, estão desenvolvendo 
                    agora!
                  </p>
    
              </motion.div>
          <div className={animeted=='left' ? 'left' : 'rigth'}></div>
          </Container>
   )
}