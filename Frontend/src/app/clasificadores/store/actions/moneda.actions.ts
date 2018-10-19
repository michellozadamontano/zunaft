import { Action } from '@ngrx/store';
import { Moneda } from '../../models/moneda.interface';
import { type } from 'os';

// cargar moneda desde el rest api
export const CARGAR_MONEDA          = '[Clasificadores] Cargar moneda';
export const CARGAR_MONEDA_EXITO    = '[Clasificadores] Cargar moneda exito';
export const CARGAR_MONEDA_ERROR    = '[Clasificadores] Cargar moneda error';

export class CargaMoneda implements Action {
    readonly type = CARGAR_MONEDA;
}
export class CargaMonedaExito implements Action {
    readonly type = CARGAR_MONEDA_EXITO;
    constructor(public payload: Moneda[]){}
}
export class CargaMonedaError  implements Action {
    readonly type = CARGAR_MONEDA_ERROR;
    constructor( public payload: any){}
}

export type MonedaAction = CargaMoneda | CargaMonedaExito | CargaMonedaError;