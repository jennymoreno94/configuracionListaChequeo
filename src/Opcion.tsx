import { Button, Checkbox, Grid, Radio, TextField } from "@mui/material";
import React from "react";

interface FormularioProps {
    esMultipleRespuesta: boolean
    esOtraOpcion: boolean
    eliminar: (esOtraOpcion: boolean, indice: number) => void;
    visualizarComponente:boolean
    // Propiedades del componente
}




const Opcion: React.FC<FormularioProps> = ({
    esMultipleRespuesta,
    esOtraOpcion,
    eliminar,
    visualizarComponente
}) => {

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
                                onClick={eliminar as () => void}
                                
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

export default Opcion;