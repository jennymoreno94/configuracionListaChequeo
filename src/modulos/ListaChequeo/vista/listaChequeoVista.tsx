import {
    Grid,
} from '@material-ui/core';
import React from 'react';
import { IListaChequeoVistaProps } from '../interfaces';
import FormularioListaChequeoVista from './formularioListaChequeo';

const ListaChequeoVista: React.FunctionComponent<IListaChequeoVistaProps> = ({
    entidadesFormulario,
    alCambiarCampo,
    datosFormulario,
    crearFormularioListaChequeo,
    cerrarFormulario,
    agregarSeccion,
    guardoFormulario
    

}) => (
    <Grid container>
        <FormularioListaChequeoVista
            entidadesFormulario={entidadesFormulario}
            alCambiarCampo={alCambiarCampo} 
            datosFormulario={datosFormulario}
            crearFormularioListaChequeo={crearFormularioListaChequeo}
            cerrarFormulario={cerrarFormulario}
            agregarSeccion={agregarSeccion}
            guardoFormulario={guardoFormulario}/>

    </Grid>

);

export default ListaChequeoVista;
