import React, { FunctionComponent, useEffect, useState } from 'react';




import { IListaChequeoCVProps } from '../interfaces';
import FormularioListaChequeoVista from '../vista/formularioListaChequeo';
import IDatosFormulario from '../../../modelos/listaChequeo/entidades/IDatosFormulario';
import IDatos from '../../../modelos/listaChequeo/entidades/IDatos';
import ITipo from '../../../modelos/listaChequeo/entidades/ITipo';
import SeccionListaChequeoVista from '../vista/seccionListaChequeo';

const VALORES_INICIALES_INPUTS_FORMULARIO: IDatosFormulario = {
    Codigo: null,
    Nombre: '',
    Descripcion: '',
    IdTipo: null,
};


interface ISeccion {
    id: number;
    panel: string;
}

const ListaChequeoCV: FunctionComponent<IListaChequeoCVProps> = ({
    idEmpresa,
    idAgencia,
    datosCodigo
}) => {

    useEffect(() => {
        consultarEntidadesFormularioListaChequeo()
    }, []);

    const [listaChequeoFormulario, setListaChequeoFormulario] = useState<IDatosFormulario>(VALORES_INICIALES_INPUTS_FORMULARIO);
    const alCambiarCampo = (campo: keyof IDatosFormulario, nuevoValor: IDatosFormulario[keyof IDatosFormulario]) => {
        setListaChequeoFormulario((listaChequeo) => ({ ...listaChequeo, [campo]: nuevoValor }));
    };
    const [entidadesFormularioListaChequeo, setEntidadesFormularioListaChequeo] = useState<{ datosCodigo: IDatos[] | null; tipos: ITipo[] }>({
        datosCodigo: datosCodigo,
        tipos: [],
    });

    const [guardoFormulario, setGuardoFormulario] = useState<boolean>(false);

    const consultarEntidadesFormularioListaChequeo = () => {
        const tipos: ITipo[] | null = [{
            IdTipo: 1,
            CodigoTipo: '001',
            DescripcionTipo: 'Web',
            Estado: 1
        },
        {
            IdTipo: 2,
            CodigoTipo: '002',
            DescripcionTipo: 'Móvil',
            Estado: 1
        },
        {
            IdTipo: 3,
            CodigoTipo: '003',
            DescripcionTipo: 'Mixto',
            Estado: 1
        }]
        setEntidadesFormularioListaChequeo((entidadesFormularioListaChequeo) => ({
            ...entidadesFormularioListaChequeo,
            tipos: tipos,
        }));
    };

    const crearFormularioListaChequeo = (evento: any) => {
        if (evento.preventDefault())
            return;

        alert(`Guardar Formulario ${JSON.stringify(listaChequeoFormulario)}`)
        setGuardoFormulario(true)
    }

    const alCerrarFormulario = () => {
        setListaChequeoFormulario(VALORES_INICIALES_INPUTS_FORMULARIO);
        alert(`Cerrar`)
    }

    /*Seccion*/


    /* const [componentesSeccion, setComponentesSeccion] = useState<React.ReactNode[]>([
         <SeccionListaChequeoVista agregarSeccion={() => ()} panel='panel1' eliminarSeccion={function (id: number): void {
             throw new Error('Function not implemented.');
         }} id={0} />
     ]);*/
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const [componentesSeccion, setComponentesSeccion] = useState<ISeccion[]>([{ id: 1, panel: 'panel1' }]);

    const agregarSeccion = () => {

        const idSeleccion = componentesSeccion.length + 1
        const nuevoElemento = {
            id: idSeleccion,
            panel: `panel${idSeleccion}`

        };
        setComponentesSeccion([...componentesSeccion, nuevoElemento]);
    };

    const eliminarSeccion = (id: number) => {
        /*const nuevosElementos = componentesSeccion.filter((elemento) => elemento.id !== id);
        setComponentesSeccion(nuevosElementos);*/

        const nuevosElementos = componentesSeccion.filter((elemento) => elemento.id !== id);

        // Actualizar los id de los elementos restantes
        const elementosActualizados = nuevosElementos.map((elemento, index) => ({
            ...elemento,
            id: index + 1,
            panel:`panel${index + 1}` // Asignar nuevo id basado en la posición en el arreglo
        }));

        debugger;
        setComponentesSeccion(elementosActualizados);
    };

    return (
        <>
            <FormularioListaChequeoVista
                entidadesFormulario={entidadesFormularioListaChequeo}
                alCambiarCampo={alCambiarCampo}
                datosFormulario={listaChequeoFormulario}
                crearFormularioListaChequeo={crearFormularioListaChequeo}
                cerrarFormulario={alCerrarFormulario}
                agregarSeccion={agregarSeccion}
                guardoFormulario={guardoFormulario}
            />

            {guardoFormulario ? componentesSeccion.map((elemento) => (
                <SeccionListaChequeoVista
                    key={elemento?.id}
                    id={elemento?.id}
                    agregarSeccion={agregarSeccion}
                    eliminarSeccion={eliminarSeccion}
                    panel={`panel${elemento?.id}`}
                    expanded={expanded}
                    setExpanded={setExpanded} />
            )) : null}

            {/*{guardoFormulario ? componentesSeccion.map(componente => componente) : null}*/}
        </>

    );
};

export default ListaChequeoCV;
