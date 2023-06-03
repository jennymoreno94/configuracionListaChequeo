import { Button, Card, CardContent, FormControlLabel, Grid, Switch, Typography } from "@material-ui/core";
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
  const [otraOpcionEliminada, setOtraOpcionEliminada] = useState(false);
  const [visualizarComponente, setVisualizarComponente] = useState(true);
  const [componentesOpcion, setComponentesOpcion] = useState<React.ReactNode[]>([<Opcion esMultipleRespuesta={multipleRespuestas} esOtraOpcion={otraOpcion}
    eliminar={() => eliminarComponenteOpcion(false, 0)}
    visualizarComponente={visualizarComponente} />]);

  useEffect(() => {
    setComponentesOpcion(prevComponentes => {
      return prevComponentes.map((item, index) => {
        if (React.isValidElement(item)) {
          return <Opcion esMultipleRespuesta={multipleRespuestas}
            esOtraOpcion={item.props.esOtraOpcion}
            eliminar={eliminarComponenteOpcion}
            visualizarComponente={item.props.visualizarComponente}/>
        }
      });
    });
  }, [multipleRespuestas])



  const eliminarComponenteOpcion = (esOtraOpcion: boolean, indice: number) => {
    const lista = componentesOpcion;
    setVisualizarComponente(false)
    setComponentesOpcion(prevComponentes => {
      const nuevosComponentes = [...prevComponentes];
      nuevosComponentes.splice(indice, 1);
      if (esOtraOpcion) {
        setOtraOpcionEliminada(false);
      }
      return nuevosComponentes;
    });
  };


  const agregarMultipleRespuestas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplesRespuestas(event.target.checked);
  };

  const agregarComponenteOpcion = (esOtraOpcion: boolean,visualizarComponente:boolean) => {
   
    
    debugger;
    setComponentesOpcion(prevComponentes => [
      ...prevComponentes,
      <Opcion
        esMultipleRespuesta={multipleRespuestas}
        esOtraOpcion={esOtraOpcion}
        eliminar={eliminarComponenteOpcion}
        visualizarComponente={visualizarComponente}
      />
    ]);
    if (esOtraOpcion) {

      setOtraOpcionEliminada(true);
    }
    setOtraOpcion(esOtraOpcion)

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
                        onClick={() => { agregarComponenteOpcion(false,true) }}
                        color="secondary"
                        variant="contained"
                        size="medium"
                      >
                        Adicionar Opción
                      </Button>

                      <Button
                        disabled={otraOpcionEliminada}
                        onClick={() => { agregarComponenteOpcion(true,true) }}
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
                      {/* {componentesOpcion.map(componente => componente)}*/}

                      {componentesOpcion.map((componente, index) => (
                        React.isValidElement(componente) ?
                          React.cloneElement(componente, { eliminar: () => eliminarComponenteOpcion(componente.props.esOtraOpcion, index) } as Partial<FormularioProps>) : null
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

export default SeleccionUnica;