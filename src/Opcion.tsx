import { Button, Card, CardContent, Checkbox, Grid, Radio, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Preguntas from "./Preguntas";


interface FormularioProps {
    esMultipleRespuesta: boolean
    esOtraOpcion: boolean
    // Propiedades del componente
}


interface Respuesta {
    id: number;
    pregunta: string;
    respuesta: string;
}

const SeleccionUnica: React.FC<FormularioProps> = ({
    esMultipleRespuesta,
    esOtraOpcion
}) => {

    const [visualizarComponente, setVisualizarComponente] = useState(true);
    const eliminar = () => {
        setVisualizarComponente(false);
    }

    return (
        <>
            {visualizarComponente && (
                <Grid style={{ marginTop: '20px' }}>
                    <Grid container xs={12} sm={12} spacing={5} alignItems="center"  >
                        <Grid item xs={1} sm={1}>
                            {esMultipleRespuesta ? <Checkbox disabled /> : <Radio disabled />}
                            {/*<Checkbox disabled />*/}
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
                                    disabled={esOtraOpcion}
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
                                onClick={eliminar}
                                color="secondary"
                                variant="contained"
                                size="medium"
                            >
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            )}



        </>

    );
};

export default SeleccionUnica;