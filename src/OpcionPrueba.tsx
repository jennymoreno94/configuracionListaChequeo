import { Button, Checkbox, Grid, Radio, TextField } from '@material-ui/core';
import React from 'react';

interface OpcionProps {
  id: number;
  //texto: string;
  eliminarElemento: (id: number) => void;
  esMultipleRespuesta: boolean;
  esOtraOpcion: boolean
}

const OpcionPrueba = ({ id, /*texto,*/ eliminarElemento, esMultipleRespuesta,esOtraOpcion }: OpcionProps) => {
  return (
    <>
      {/*<div>
        <input type="text" />
        <button onClick={() => eliminarElemento(id)}>Eliminar</button>
  </div>*/}

      <Grid style={{ marginTop: '20px' }}>
        <Grid container xs={12} sm={12} spacing={5} alignItems="center"  >
          <Grid item xs={1} sm={1}>

            {esMultipleRespuesta ? <Checkbox disabled /> : <Radio disabled />}
          </Grid>
          <Grid item xs={8} sm={8}>
            {esOtraOpcion ?
              <TextField
                disabled
                fullWidth
                required
                name="Sección"
                label="Sección"
                defaultValue={"Otro"}
                variant="outlined"
                style={{ marginLeft: '5px' }}
              /> :
              <TextField

                fullWidth
                required
                name="Sección"
                label="Sección"
                variant="outlined"
                style={{ marginLeft: '5px' }}
              />}
          </Grid>
          <Grid item xs={2} sm={2}>
            <Button
              onClick={() => eliminarElemento(id)}
              color="secondary"
              variant="contained"
              size="medium"
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>

  );
};

export default OpcionPrueba;