import React from 'react';
import {Route, Routes} from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import './Contato.module.scss';
import { NoMeals } from '@mui/icons-material';
import axios from 'axios';

const Input = styled(TextField)({
  '& label': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#4DFF94',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ff1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff',
    },
    '&:hover fieldset': {
      borderColor: '#4DFF94',
    },
    '& ':{
      color: '#fff'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4DFF94',
    },
  },
});




export default function Contato() {

   return (
    <Container  fixed>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className="content">
            <h1>Contato</h1>
            <br />
            <Stack direction="column" alignItems="center" marginTop={10} spacing={2}>
            </Stack>
        </motion.div>
    </Container>
   )
}