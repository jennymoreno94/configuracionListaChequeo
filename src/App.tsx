/*import {Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Preguntas from "./Preguntas";


const tipoPregunta = [
  { tipo_pregunta: 'Selección', id: 1 },
  { tipo_pregunta: 'Texto', id: 2 },
  { tipo_pregunta: 'Fecha', id: 3 },

];

interface FormularioProps {
  // Propiedades del componente
}


interface Respuesta {
  id: number;
  pregunta: string;
  respuesta: string;
}


const Formulario: React.FC<FormularioProps> = () => {



  // Estados para almacenar los valores ingresados por el usuario
  const [titulo, setTitulo] = useState("");
  const [seccion, setSeccion] = useState("");
  const [preguntas, setPreguntas] = useState("");
  const [tipoRespuesta, setTipoRespuesta] = useState("");
  const [respuestas, setRespuestas] = useState<Respuesta[]>([]);
  const [componentesAgregados, setComponentesAgregados] = useState<React.ReactNode[]>([]);



  // Función para manejar el cambio de valor en el input de título
  const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  // Función para manejar el cambio de valor en el input de sección
  const handleSeccionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeccion(event.target.value);
  };

  // Función para manejar el cambio de valor en el input de preguntas
  const handlePreguntasChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPreguntas(event.target.value);
  };

  // Función para manejar el cambio de valor en el select de tipo de respuesta
  const handleTipoRespuestaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoRespuesta(event.target.value);
  };

  // Función para manejar el cambio de valor en el input de respuesta
  const handleRespuestaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pregunta = event.target.name;
    const respuesta = event.target.value;

    // Verificar si ya existe una respuesta para la pregunta actual
    const respuestaExistente = respuestas.find((r) => r.pregunta === pregunta);

    if (respuestaExistente) {
      // Actualizar la respuesta existente
      const updatedRespuestas = respuestas.map((r) => {
        if (r.pregunta === pregunta) {
          return { ...r, respuesta };
        }
        return r;
      });
      setRespuestas(updatedRespuestas);
    } else {
      // Agregar una nueva respuesta
      const newRespuesta: Respuesta = {
        id: Date.now(), // Generar un ID único
        pregunta,
        respuesta,
      };
      setRespuestas([...respuestas, newRespuesta]);
    }
  };

  // Función para guardar las respuestas
  const guardarRespuestas = () => {
    // Realizar la lógica para guardar las respuestas en la base de datos o realizar alguna acción adicional
    console.log(respuestas); // Mostrar las respuestas en la consola
  };

  // Renderizar los elementos de acuerdo al tipo de respuesta seleccionado
  const renderRespuesta = () => {
    switch (tipoRespuesta) {
      case "seleccion-multiple":
        return (
          <div>
            <label>Opción 1:</label>
            <input type="text" name="opcion1" onChange={handleRespuestaChange} />
            <label>Opción 2:</label>
            <input type="text" name="opcion2" onChange={handleRespuestaChange} />
            <label>Opción 3:</label>
            <input type="text" name="opcion3" onChange={handleRespuestaChange} />
          </div>
        );
      case "seleccion-unica":
        return (
          <div>
            <label>Opción 1:</label>
            <input type="text" name="opcion1" onChange={handleRespuestaChange} />
            <label>Opción 2:</label>
            <input type="text" name="opcion2" onChange={handleRespuestaChange} />
            <label>Opción 3:</label>
            <input type="text" name="opcion3" onChange={handleRespuestaChange} />
          </div>
        );
      case "campo-abierto":
        return (
          <div>
            <label>Respuesta:</label>
            <input type="text" name="respuesta" onChange={handleRespuestaChange} />
          </div>
        );
      default:
        return null;
    }
  };

  // Renderizar las respuestas ingresadas
  const renderRespuestas = () => {
    return respuestas.map((respuesta) => (
      <div key={respuesta.id}>
        <p>Pregunta: {respuesta.pregunta}</p>
        <p>Respuesta: {respuesta.respuesta}</p>
      </div>
    ));
  };


  const agregarComponente = () => {
    setComponentesAgregados(prevComponentes => [...prevComponentes, <Preguntas key={prevComponentes.length} />]);
  };

  // Renderizar los elementos del formulario
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card variant="outlined">
            <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
              <Typography variant="h6">Datos Encuesta</Typography>
            </Grid>
            <CardContent>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    name="Título"
                    label="Título"
                    onChange={handleTituloChange}
                    variant="outlined"
                    value={titulo}
                  />

                </Grid>
              </Grid>
              <Card variant="outlined" style={{ marginTop: '10px' }}>
                <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                  <Typography variant="h6">Sección</Typography>
                </Grid>
                <CardContent>
                  <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        name="Sección"
                        label="Sección"
                        onChange={handleTituloChange}
                        variant="outlined"
                        value={titulo}
                      />

                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Button
                        onClick={agregarComponente}
                        color="secondary"
                        variant="contained"
                        size="medium"

                      >
                        Agregar Preguntas
                      </Button>

                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {componentesAgregados.map(componente => componente)}

            </CardContent>
          </Card>



        </Grid>
      </Grid>  
    </>

  );
};

export default Formulario;*/

import React from 'react';
import ListaChequeo from './modulos/ListaChequeo';
import IDatos from './modelos/listaChequeo/entidades/IDatos';


const datos: IDatos[] | null  = [{
  Id: 1,
  Descripcion: 'Lavadoras'
},
{
  Id: 2,
  Descripcion: 'Neveras'
},
{
  Id: 2,
  Descripcion: 'Estufas'
}]

const App = () => {


  return <ListaChequeo idEmpresa={''} idAgencia={''} datosCodigo={datos} />;
};

export default App;

