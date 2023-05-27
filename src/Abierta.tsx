import { Autocomplete, Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


interface ITipoDato {
    tipo_dato: string;
    id: number;
}

const tipoDatos = [
    { tipo_dato: 'Texto', id: 1 },
    { tipo_dato: 'Número', id: 2 },
];

const Abierta = () => {

    const [tipoDato, setTipoDato] = useState<ITipoDato | null>({ tipo_dato: '', id: 0 });
    const [opcionNoAplica, setOpcionNoAplica] = React.useState(false);
    const [opcionTomarFoto, setTomarFoto] = React.useState(false);
    const [opcionRespuestaLarga, setRespuestaLarga] = React.useState(false);


    const seleccionarTipoDato = (value: ITipoDato | null) => {
        setTipoDato(value);
    };

    const agregarOpcionNoAplica = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpcionNoAplica(event.target.checked);
    };

    const agregarTomarFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTomarFoto(event.target.checked);
    };

    const agregarRespuestaLarga = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRespuestaLarga(event.target.checked);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card variant="outlined" style={{ marginTop: '30px' }}>
                    <CardContent>
                        <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                            <Typography variant="h6">Abierta</Typography>
                        </Grid>
                        <CardContent>
                            <Grid container spacing={2}  >
                                <Grid container alignItems="center">
                                    <Grid item xs={4} sm={4}>
                                        <Autocomplete
                                            onChange={(_, value: ITipoDato | null) =>
                                                seleccionarTipoDato(value ? value : null)
                                            }
                                            //onChange={handleAutocompleteChange}
                                            options={tipoDatos}
                                            getOptionLabel={(option) => option.tipo_dato}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    label="Tipo Dato"

                                                />
                                            )}
                                            value={tipoDato}
                                        />
                                    </Grid>

                                    {tipoDato?.tipo_dato === 'Texto' ? <FormControlLabel
                                        value="no-aplica"
                                        control={<Switch
                                            onChange={agregarRespuestaLarga}
                                            color="primary" name="no-aplica" />}
                                        label="Respuesta Larga"
                                        style={{ marginLeft: '10px' }}
                                    /> : null}

                                    <FormControlLabel
                                        value="no-aplica"
                                        control={<Switch
                                            onChange={agregarOpcionNoAplica}
                                            color="primary" name="no-aplica" />}
                                        label="No Aplica"
                                        style={{ marginLeft: '10px' }}
                                    />

                                    <FormControlLabel
                                        value="tomar-foto"
                                        control={<Switch
                                            onChange={agregarTomarFoto}
                                            color="primary" name="tomar-foto" />}
                                        label="Tomar Foto"
                                        style={{ marginLeft: '10px' }}
                                    />
                                </Grid>

                                {tipoDato?.tipo_dato ? <Grid container spacing={2} style={{ marginTop: '2px' }} alignItems="flex-start">
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            disabled
                                            fullWidth
                                            required
                                            variant="outlined"
                                            rows={opcionRespuestaLarga ? 2 : 0}
                                            multiline={opcionRespuestaLarga ? true : false}
                                            value={`Ingresar su respuesta de tipo ${tipoDato?.tipo_dato} ${opcionRespuestaLarga ? 'con respuesta larga' : ''}`}
                                        />
                                    </Grid>
                                </Grid> : null}
                            </Grid>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Abierta;