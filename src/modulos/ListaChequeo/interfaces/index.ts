import IDatos from "../../../modelos/listaChequeo/entidades/IDatos";
import IDatosFormulario from "../../../modelos/listaChequeo/entidades/IDatosFormulario";
import ITipo from "../../../modelos/listaChequeo/entidades/ITipo";

/*Vista*/
export interface IListaChequeoProps {
    idEmpresa: string;
    idAgencia: string;
    datosCodigo: IDatos[] | null;
}

export interface IListaChequeoVistaProps {
    entidadesFormulario: { datosCodigo: IDatos[] | null; tipos: ITipo[] };
    alCambiarCampo: (campo: keyof IDatosFormulario, nuevoValor: IDatosFormulario[keyof IDatosFormulario]) => void;
    datosFormulario: IDatosFormulario;
    crearFormularioListaChequeo:(evento: any) => void
    cerrarFormulario :() => void
    agregarSeccion:() => void,
    guardoFormulario:boolean
}

export interface IFormularioListaChequeoProps {
    datosFormulario: IDatosFormulario;
    entidadesFormulario: { datosCodigo: IDatos[] | null; tipos: ITipo[] };
    alCambiarCampo: (campo: keyof IDatosFormulario, nuevoValor: IDatosFormulario[keyof IDatosFormulario]) => void;
    crearFormularioListaChequeo:(evento: any) => void
    cerrarFormulario: () => void
    agregarSeccion:() => void,
    guardoFormulario:boolean

}




export interface ISeccionListaChequeoProps {
    agregarSeccion:() => void,
    eliminarSeccion: (id: number) => void;
    panel:string,
    id: number,
    expandido:string | false,
    setExpandido: React.Dispatch<React.SetStateAction<string | false>>,
    alCambiarSeccion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    valorSeccion:string
    agregarPregunta:() => void,
    componentePregunta:IPregunta[]
}

export interface IPreguntaListaChequeoProps {
    eliminarPregunta: (id: number) => void;
    id: number,
    
    alCambiarPregunta: (event: React.ChangeEvent<HTMLInputElement>) => void,
    valorPregunta:string
    agregarPregunta:() => void,
}


/*Interfaces controlador vista*/
export interface IListaChequeoCVProps {
    idEmpresa: string;
    idAgencia: string;
    datosCodigo: IDatos[] | null;
}

export const VALORES_INICIALES_INPUTS_FORMULARIO: IDatosFormulario = {
    Codigo: null,
    Nombre: '',
    Descripcion: '',
    IdTipo: null,
};


export interface ISeccion {
    id: number;
    panel: string;
}

export interface IPregunta {
    id: number;
}