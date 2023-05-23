import { Button, Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Opcion from "./Opcion";
import Preguntas from "./Preguntas";


interface FormularioProps {
  // Propiedades del componente
}


interface Respuesta {
  id: number;
  pregunta: string;
  respuesta: string;
}

const SeleccionUnica: React.FC<FormularioProps> = () => {

  const [multipleRespuestas, setMultiplesRespuestas] = React.useState(false);
  const [otraOpcion, setOtraOpcion] = React.useState(false);

  const [componentesOpcion, setComponentesOpcion] = useState<React.ReactNode[]>([<Opcion esMultipleRespuesta={multipleRespuestas}esOtraOpcion={otraOpcion} />]);

  useEffect(() => {
    setComponentesOpcion(prevComponentes => {
      return prevComponentes.map(item => {
        return <Opcion esMultipleRespuesta={multipleRespuestas}
        esOtraOpcion={otraOpcion} />
      });
    });
  }, [multipleRespuestas])

  const agregarMultipleRespuestas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplesRespuestas(event.target.checked);
  };

  
  const agregarComponenteOpcion = (esOtraOpcion:boolean) => {
    setOtraOpcion(esOtraOpcion);
    setComponentesOpcion(prevComponentes => [...prevComponentes, <Opcion
      esMultipleRespuesta={multipleRespuestas}
      esOtraOpcion={esOtraOpcion}
    />]);
  };



  return (
    <>
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
                        onClick={() => {agregarComponenteOpcion(false)}}
                        color="secondary"
                        variant="contained"
                        size="medium"
                      >
                        Adicionar Opción
                      </Button>

                      <Button
                        disabled={otraOpcion}
                        onClick={() =>{agregarComponenteOpcion(true)}}
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
                    </Grid>


                  </Grid>

                  <Grid item xs={6} md={12} sm={6}>
                    <Grid container>
                      {componentesOpcion.map(componente => componente)}
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

export default SeleccionUnica;