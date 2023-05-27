import { Autocomplete, Button, Card, CardContent, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Abierta from "./Abierta";
import SeleccionUnica from "./SeleccionUnica";
import SeleccionUnicaPrueba from "./SeleccionUnicaPrueba";


const tipoPregunta = [
    { tipo_pregunta: 'Selección', id: 1 },
    { tipo_pregunta: 'Abierta', id: 2 },
    { tipo_pregunta: 'Fecha', id: 3 },

];

interface FormularioProps {
    // Propiedades del componente
}


interface Option {
    tipo_pregunta: string;
    id: number;
}

interface Respuesta {
    id: number;
    pregunta: string;
    respuesta: string;
}

const Preguntas: React.FunctionComponent<FormularioProps> = () => {
    // Estados para almacenar los valores ingresados por el usuario
    const [titulo, setTitulo] = useState("");

    // Función para manejar el cambio de valor en el input de título
    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [requerido, setRequerido] = React.useState(false);

    const agregarRequerido = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequerido(event.target.checked);
    };

    const guardarPregunta = () => {

    };

    /* const agregarTipoPregunta = () => {
         
         console.log("click tipo respuesta")
     }*/


    const handleAutocompleteChange = (
        value: Option[]) => {
        setSelectedOptions(value);
    };



    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Card variant="outlined" style={{ marginTop: '10px' }}>
                        <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                            <Typography variant="h6">Componente de Preguntas</Typography>
                        </Grid>
                        <CardContent>
                            <Grid container spacing={2} >

                                <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }} spacing={2}>

                                    <Button
                                        onClick={guardarPregunta}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"
                                        style={{ marginRight: '10px' }}

                                    >
                                        Duplicar Pregunta
                                    </Button>
                                    <Button
                                        onClick={guardarPregunta}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"
                                        style={{ marginRight: '10px' }}

                                    >
                                        Eliminar Pregunta
                                    </Button>
                                    <Button
                                        onClick={guardarPregunta}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"


                                    >
                                        Guardar Pregunta
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="Pregunta"
                                        label="Pregunta"
                                        multiline
                                        onChange={handleTituloChange}
                                        variant="outlined"
                                        value={titulo}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Autocomplete
                                        multiple
                                        onChange={(_, value) => {
                                            if (value.length > 2) {

                                            }
                                            handleAutocompleteChange(value);
                                        }}
                                        //onChange={handleAutocompleteChange}
                                        options={tipoPregunta}
                                        getOptionLabel={(option) => option.tipo_pregunta}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                label="Tipo Respuesta"

                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        value="requerido"
                                        control={<Switch
                                            onChange={agregarRequerido}
                                            color="primary" name="requerido" />}
                                        label="Requerido"
                                        style={{ marginLeft: '10px' }}
                                    />
                                </Grid>

                            </Grid>
                            {
                                selectedOptions.map(map => {
                                    switch (map.id) {
                                        case 1:
                                            return (
                                                <div> <SeleccionUnicaPrueba />
                                                     {/*<SeleccionUnica />*/} </div>
                                            );
                                        case 2:
                                            return (
                                                
                                             <div>
                                                    <Abierta/>

                                            </div>);

                                        case 3:
                                            return (
                                                <Grid item xs={8} sm={8}>
                                                    <TextField
                                                        fullWidth
                                                        required
                                                        name="Texto"
                                                        label="Texto"
                                                        disabled

                                                        variant="outlined"
                                                        style={{ marginLeft: '5px' }}
                                                    />
                                                </Grid>
                                            );

                                        default:
                                            return null;
                                    }
                                })
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Preguntas;