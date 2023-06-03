import { /*Autocomplete,*/ Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from '@material-ui/core';
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

    const [tipoDato, setTipoDato] = useState<ITipoDato>({ tipo_dato: '', id: 0 });
    const [opcionNoAplica, setOpcionNoAplica] = React.useState(false);
    const [opcionTomarFoto, setTomarFoto] = React.useState(false);
    const [opcionRespuestaLarga, setRespuestaLarga] = React.useState(false);
    const [isVisible, setVisible] = React.useState<boolean>(false);

    const seleccionarTipoDato = (value: ITipoDato) => {
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
                                        {/*<Autocomplete
                                            onChange={(_, value: ITipoDato | null) => {
                                                if (value != null) {
                                                    setVisible(value.tipo_dato === 'Texto')
                                                }
                                                seleccionarTipoDato(value ? value : { id: 0, tipo_dato: '' })
                                            }}
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
                                            />*/}
                                    </Grid>

                                    {isVisible && (
                                        <FormControlLabel
                                            value="respuesta-larga"
                                            control={<Switch
                                                onChange={agregarRespuestaLarga}
                                                color="primary" name="respuesta-larga" />}
                                            label="Respuesta Larga"
                                            style={{ marginLeft: '10px' }}
                                        />
                                    )}

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

                                {tipoDato.id != 0 ? <Grid container spacing={2} style={{ marginTop: '2px' }} alignItems="flex-start">
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            disabled
                                            fullWidth
                                            required
                                            variant="outlined"
                                            rows={(tipoDato.tipo_dato === 'Texto' ? opcionRespuestaLarga ? 2 : 0 : 0)}
                                            multiline={(tipoDato.tipo_dato === 'Texto' ? opcionRespuestaLarga ? true : false : false)}
                                            value={`Ingresar su respuesta de tipo ${tipoDato.id != 0 ? tipoDato.tipo_dato : ''} ${tipoDato.tipo_dato === 'Texto' ? opcionRespuestaLarga ? 'con respuesta larga' : '' : ''}`}
                                        />
                                    </Grid>
                                </Grid> : <></>}
                            </Grid>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Abierta;