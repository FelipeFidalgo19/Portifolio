import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.scss'
import { useTheme } from '@mui/material/styles';
import snake from '../../img/portfolio/snake.png'
import chat from '../../img/portfolio/chat.png'
import { redirect } from 'react-router-dom';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [chatbool, setChat] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='ResponsiveDialog'>
      <div className='row'>
        <div className='card'>
        <div className='imgs'>
            <img variant="outlined" onClick={handleClickOpen} src={snake} style={{width:500}} />
        </div>
        <div className='descricao'>
            <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
            <img alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
            <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
        </div>
        </div>
        <div className='card'>
        <div className='imgs'>
          <img variant="outlined" onClick={() => setChat(true)} src={chat} style={{width:500}} />
        </div>
        <div className='descricao'>
            <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img alt="css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
            <img alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
            <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
        </div>
        </div>
      </div>


      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Jogo da cobrinha online"}
        </DialogTitle>  
        <DialogContent>
          <DialogContentText>
            Um pequeno jogo desenvolvimento no começo dos estudos de tecnologia, para aprender um pouco mais sobre node js, npm e websockets, 
            o projeto é simples, podendo ter dois jogadores local ou remotamente, apenas acessando o site e controlando com diferentes teclas do teclado 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button>
          <Button onClick={handleClose} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
      
      <Dialog
        fullScreen={fullScreen}
        open={chatbool}
        onClose={() => setChat(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Chat Online"}
        </DialogTitle>  
        <DialogContent>
          <DialogContentText>
            Um Chat desenvolvido para lidar com mensagens em tempo real, utilizando websockets com funcionalidades para enviar arquivos para todos dentro do site 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={() => window.location.href = "https://snakemult.herokuapp.com/"}>
            Visitar ✅
          </Button> */}
          <Button onClick={() => setChat(false)} autoFocus>
            Fechar ❌
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
