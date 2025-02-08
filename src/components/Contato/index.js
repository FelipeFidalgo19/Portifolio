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
import { format } from 'date-fns';

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../server/FirebaseConfig';
import { useEffect } from 'react';


export default function Contato({ darkMode }) {
  const [open, setOpen] = useState(false);
  const [Campos, setCampos] = useState(false);

  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [msg, setMsg] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setCampos(false);
  };

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);
  const fetchPost = async () => {

    await getDocs(collection(db, "mensagens"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setTodos(newData);
        console.log(todos, newData);
      })

  }

  const addTodo = async (obj) => {
    try {
        const docRef = await addDoc(collection(db, "mensagens"), {
          nome : nome,
          assunto : assunto,
          msg : msg,
          data : format(new Date(),'dd/MM/yyyy')

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

  function handleSend() {
    if (nome != "" && assunto != "" && msg != "") {
      addTodo();
      setOpen(true);
    } else {
      setCampos(true);
    }
  }


  const inputStyle = { color: '#2cb649', input: { color: '#2cb649', width: 660 } }
  return (
    <Container fixed>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success">Enviado com sucesso!</Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={Campos} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Preencha todos os campos</Alert>
      </Snackbar>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }} className="content" >
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginTop: '10%' }}>
          <h1>Contato</h1>
          <h2>Digite sua mensagem e eu entrarei em contato:</h2>
          <br />

          <Stack direction="column" style={{ color: '#000' }} alignItems="flex-start" marginTop={5} spacing={2}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 250 }}>
              <TextField style={{width:'60vw'}}  color="success" onChange={(e) => setNome(e.target.value)} focused sx={inputStyle} label="Digite seu nome" id="custom-css-outlined-input" />
              <TextField style={{width:'60vw'}}  color="success" onChange={(e) => setAssunto(e.target.value)} focused sx={inputStyle} label="Qual o Assunto?" id="custom-css-outlined-input" />
              <TextField style={{width:'60vw'}}  color="success" onChange={(e) => setMsg(e.target.value)} variant='standard' row={4} multiline id="standard-multiline-static" focused sx={[inputStyle, { color: '#2cb649' }]} label="Qual a sua Mensagem?" />
              <Button style={{ justifyContent: 'flex-start', }} color="success" variant="contained" onClick={() => handleSend(true)}>Enviar</Button>
            </div>
          </Stack>
        </div>
      </motion.div>
    </Container>
  )
}