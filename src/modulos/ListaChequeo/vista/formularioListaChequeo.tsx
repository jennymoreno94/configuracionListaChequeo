import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    TextFieldProps,
    Typography,

} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import { IFormularioListaChequeoProps } from '../interfaces';
import ITipo from '../../../modelos/listaChequeo/entidades/ITipo';
import IDatos from '../../../modelos/listaChequeo/entidades/IDatos';
import SeccionListaChequeoVista from './seccionListaChequeo';
import IDatosFormulario from '../../../modelos/listaChequeo/entidades/IDatosFormulario';

const FormularioListaChequeoVista: React.FunctionComponent<IFormularioListaChequeoProps> = ({
    entidadesFormulario,
    datosFormulario,
    alCambiarCampo,
    crearFormularioListaChequeo,
    cerrarFormulario,
    agregarSeccion,
    guardoFormulario
}) => (
    <Grid container>
        <Grid container>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                        <Typography variant="h6">Lista de Chequeo</Typography>
                    </Grid>
                    <CardContent>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                {entidadesFormulario.datosCodigo === null ? (
                                    <TextField
                                        id="lc-codigo"
                                        select={entidadesFormulario.datosCodigo !== null ? true : false}
                                        fullWidth
                                        name="Codigo"
                                        label="Código"
                                        type="number"
                                        inputProps={{ min: 0 }}
                                        onChange={(event) => alCambiarCampo('Codigo', event.target.value)}
                                        variant="outlined"
                                        value={datosFormulario.Codigo}
                                    />
                                ) : (
                                    <Autocomplete
                                        id="lc-codigo"
                                        fullWidth
                                        getOptionLabel={(dato: IDatos) => dato.Descripcion}
                                        value={entidadesFormulario.datosCodigo.find(
                                            (dato) => dato.Id === datosFormulario.Codigo
                                        )}
                                        options={entidadesFormulario.datosCodigo}
                                        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                label='Datos'
                                                variant="outlined"
                                            />
                                        )}
                                        onChange={(_: any, value: IDatos | null) => {
                                            alCambiarCampo('Codigo', value ? value.Id : null)
                                        }}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lc-nombre"
                                    fullWidth
                                    required
                                    name="Nombre"
                                    label="Nombre"
                                    onChange={(event) => alCambiarCampo('Nombre', event.target.value)}
                                    variant="outlined"
                                    value={datosFormulario.Nombre}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    id="lc-nombre"
                                    fullWidth
                                    getOptionLabel={(tipo: ITipo) => tipo.DescripcionTipo}
                                    value={entidadesFormulario.tipos.find(
                                        (tipo) => tipo.IdTipo === datosFormulario.IdTipo
                                    )}
                                    options={entidadesFormulario.tipos}
                                    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label='Tipo'
                                            variant="outlined"
                                            required
                                        />
                                    )}
                                    onChange={(_: any, value: ITipo | null) =>
                                        alCambiarCampo('IdTipo', value ? value.IdTipo : null)
                                    }
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={2}
                                    required
                                    name="Descripcion"
                                    label="Descripción"
                                    onChange={(event) => alCambiarCampo('Descripcion', event.target.value)}
                                    variant="outlined"
                                    value={datosFormulario.Descripcion}
                                />

                            </Grid>
                            <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }} spacing={2}>

                                <Button
                                    onClick={cerrarFormulario}
                                    color="secondary"
                                    variant="contained"
                                    size="medium"
                                    style={{ marginRight: '10px' }}

                                >
                                    Cancelar
                                </Button>
                                <Button
                                    onClick={crearFormularioListaChequeo}
                                    color="secondary"
                                    variant="contained"
                                    size="medium"
                                    style={{ marginRight: '10px' }}
                                >
                                    Guardar
                                </Button>

                            </Grid>


                        </Grid>

                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: '50px' }}>

                                <Grid container justifyContent="flex-start" xs={12} sm={12} >
                                    <Button
                                        disabled={!guardoFormulario}
                                        onClick={agregarSeccion}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        style={{marginBottom:'20px'}}

                                    >
                                        Agregar Sección
                                    </Button>

                                </Grid>
                               {/* <SeccionListaChequeoVista />*/}



                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Grid>

);

export default FormularioListaChequeoVista;