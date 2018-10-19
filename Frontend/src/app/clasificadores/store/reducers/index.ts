import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMoneda from './moneda.reducers';


export interface ClasificadorState {
    moneda: fromMoneda.State
}

export const reducers: ActionReducerMap<ClasificadorState> = {
    moneda: fromMoneda.reducer
}

export const getClasificadoresState = createFeatureSelector<ClasificadorState>('clasificadores');

// este es la propiedad moneda del state total
export const getMonedaState     = createSelector(getClasificadoresState, (state:ClasificadorState)=> state.moneda);

export const getMonedas         = createSelector(getMonedaState, fromMoneda.getMoneda);
export const getMonedaLoaded    = createSelector(getMonedaState,fromMoneda.getMonedaLoaded);
export const getMonedaLoading   = createSelector(getMonedaState, fromMoneda.getMonedaLoading);