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
    id: number;
}




/*Interfaces controlador vista*/
export interface IListaChequeoCVProps {
    idEmpresa: string;
    idAgencia: string;
    datosCodigo: IDatos[] | null;
}