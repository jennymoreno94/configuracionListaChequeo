import React, { FunctionComponent, useEffect, useState } from 'react';




import { IListaChequeoCVProps, IPregunta, ISeccion, VALORES_INICIALES_INPUTS_FORMULARIO } from '../interfaces';
import FormularioListaChequeoVista from '../vista/formularioListaChequeo';
import IDatosFormulario from '../../../modelos/listaChequeo/entidades/IDatosFormulario';
import IDatos from '../../../modelos/listaChequeo/entidades/IDatos';
import ITipo from '../../../modelos/listaChequeo/entidades/ITipo';
import SeccionListaChequeoVista from '../vista/seccionListaChequeo';
import PreguntaListaChequeoVista from '../vista/preguntaListaChequeo';


const ListaChequeoCV: FunctionComponent<IListaChequeoCVProps> = ({
    idEmpresa,
    idAgencia,
    datosCodigo,
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
    const [expandido, setExpandido] = useState<string | false>('panel1');
    const [valorSeccion, setValorSeccion] = useState(``);

    const [componentesSeccion, setComponentesSeccion] = useState<ISeccion[]>([{ id: 1, panel: 'panel1' }]);

    const [contadorId, setContadorId] = useState(1);



    const agregarSeccion = () => {
        const nuevoId = contadorId + 1;
        const nuevoElemento = {
            id: nuevoId,
            panel: `panel${nuevoId}`,
        };

        setComponentesSeccion([...componentesSeccion, nuevoElemento]);
        setContadorId(nuevoId);
    };


    const eliminarSeccion = (id: number) => {
        const nuevosElementos = componentesSeccion.filter((elemento) => elemento.id !== id);
        setComponentesSeccion(nuevosElementos);
    };

    const alCambiarSeccion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorSeccion(event.target.value);
    };

    /*Pregunta*/

    const [componentesAgregados, setComponentesAgregados] = useState<React.ReactNode[]>([]);

    const [componentePregunta, setComponentePregunta] = useState<IPregunta[]>([]);
    const [contadorPreguntaId, setContadorPreguntaId] = useState(1);

    
    const agregarPregunta = () => {
    
        const nuevoId = contadorPreguntaId + 1;
        const nuevoElemento = {
            id: nuevoId
        };

        setComponentePregunta([...componentePregunta, nuevoElemento]);
        setContadorPreguntaId(nuevoId);
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
                    expandido={expandido}
                    setExpandido={setExpandido}
                    alCambiarSeccion={alCambiarSeccion}
                    valorSeccion={valorSeccion}
                    agregarPregunta={agregarPregunta}
                    componentePregunta={componentePregunta} />
            )) : null}

        </>

    );
};

export default ListaChequeoCV;
