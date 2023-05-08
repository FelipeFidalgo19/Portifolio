import React, { useState } from 'react';
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import './Contato.module.scss';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';



export default function Contato() {
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [msg, setMsg] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const inputStyle = { input: { color: '#2cb649', width: 660 } }
  return (
    <Container  fixed>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success">Enviado com sucesso!</Alert>
      </Snackbar>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }} className="content">
        <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',marginTop:'10%'}}>
          <h1>Contato</h1>
          <h2>Digite sua mensagem e eu entrarei em contato!</h2>
          <br />

          <Stack direction="column" style={{ color: '#000' }} alignItems="flex-start" marginTop={5} spacing={2}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 250 }}>
              <TextField color="success" focused sx={inputStyle} label="Digite seu nome" id="custom-css-outlined-input" />
              <TextField color="success" focused sx={inputStyle} label="Qual o Assunto?" id="custom-css-outlined-input" />
              <TextField color="success" focused sx={inputStyle} label="Qual a sua Mensagem?" id="custom-css-outlined-input" />
              <Button style={{ justifyContent: 'flex-start', }} color="success" variant="contained" onClick={() => setOpen(true)}>Enviar</Button>
            </div>
          </Stack>
        </div>
      </motion.div>
    </Container>
  )
}