import { Button, Card, CardContent, FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OpcionPrueba from './OpcionPrueba';

interface IOpcion {
  id: number;
  otraOpcion:boolean;
  ///texto: string;
}

const SeleccionUnicaPrueba = () => {
  const [opciones, setOpciones] = useState<IOpcion[]>([{ id: 1, otraOpcion:false}]);
  const [multipleRespuestas, setMultiplesRespuestas] = React.useState(false);
  const [opcionNoAplica, setOpcionNoAplica] = React.useState(false);
  const [otraOpcion, setOtraOpcion] = React.useState(false);

  const agregarOpcion = (otraOpcion:boolean) => {
    debugger;
    const nuevoElemento = {
      id: opciones.length + 1,
      texto: ``,
      otraOpcion:otraOpcion
    };
    setOpciones([...opciones, nuevoElemento]);

    const miOpcion = opciones.some((elemento) => elemento.otraOpcion === true);

    if(miOpcion || otraOpcion) {
      setOtraOpcion(true);
    }
   
    
  };

  const eliminarElemento = (id: number) => {
    debugger;
    const nuevosElementos = opciones.filter((elemento) => elemento.id !== id);
    const isOtraOpcion = nuevosElementos.some((elemento) => elemento.otraOpcion === true);
    setOpciones(nuevosElementos);

    if(isOtraOpcion) {
      setOtraOpcion(true);
    } else {
      setOtraOpcion(false);
    }
  };

  const agregarMultipleRespuestas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplesRespuestas(event.target.checked);
  };

  const agregarOpcionNoAplica = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpcionNoAplica(event.target.checked);
  };

  return (
    <>
      {/*<div>
        <button onClick={agregarElemento}>Agregar</button>
        {elementos.map((elemento) => (
          <OpcionPrueba
            key={elemento.id}
            id={elemento.id}
            texto={elemento.texto}
            eliminarElemento={eliminarElemento}
          />
        ))}
        </div>*/}


      <Grid container >
        <Grid item xs={12}>
          <Card variant="outlined" style={{ marginTop: '30px' }}>
            <CardContent>
              <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                <Typography variant="h6">Selección</Typography>
              </Grid>
              <CardContent>
                <Grid container spacing={2}  >
                  <Grid container alignItems="flex-start">
                    <Grid item xs={12} sm={6}>
                      <Button
                        onClick={() => agregarOpcion(false)}
                        color="secondary"
                        variant="contained"
                        size="medium"
                      >
                        Adicionar Opción
                      </Button>

                      <Button
                        disabled={otraOpcion}
                        onClick={() => agregarOpcion(true)}
                        color="secondary"
                        variant="contained"
                        size="medium"
                        style={{ marginLeft: '10px' }}
                      >
                        Otra Opción
                      </Button>

                      <FormControlLabel
                        value="multiple-respuestas"
                        control={<Switch
                          onChange={agregarMultipleRespuestas}
                          color="primary" name="multiple-respuesta" />}
                        label="Multiple Respuestas"
                        style={{ marginLeft: '10px' }}
                      />
                      <FormControlLabel
                        value="no-aplica"
                        control={<Switch
                          onChange={agregarOpcionNoAplica}
                          color="primary" name="no-aplica" />}
                        label="No Aplica"
                        style={{ marginLeft: '10px' }}
                      />
                
                    </Grid>
                  </Grid>

                  <Grid item xs={6} md={12} sm={6}>
                    <Grid container>

                      {opciones.map((elemento) => (
                        <OpcionPrueba
                          key={elemento.id}
                          id={elemento.id}
                          esMultipleRespuesta={multipleRespuestas}
                          /*texto={elemento.texto}*/
                          eliminarElemento={eliminarElemento}
                          esOtraOpcion={elemento.otraOpcion}
                        />
                      ))}

                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>




  );
};

export default SeleccionUnicaPrueba;