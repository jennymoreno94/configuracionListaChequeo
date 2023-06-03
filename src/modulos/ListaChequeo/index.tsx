import React from 'react';

import { IListaChequeoProps } from './interfaces';
import ListaChequeoCV from './controladorVista/listaChequeoCV';

const ListaChequeo: React.FunctionComponent<IListaChequeoProps> = ({
    idEmpresa,
    idAgencia,
    datosCodigo
}) => {
    return (

        <ListaChequeoCV datosCodigo={datosCodigo}
            idEmpresa={idEmpresa}
            idAgencia={idAgencia}
        />

    );
};

export default ListaChequeo;
