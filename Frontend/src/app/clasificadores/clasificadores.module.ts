import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '../material/material.module';

//http
import { HttpClientModule, HTTP_INTERCEPTORS }       from '@angular/common/http';

//ngrx
import { StoreModule  }   from '@ngrx/store';
import { EffectsModule }  from '@ngrx/effects';
import { reducers }       from '../clasificadores/store';

//services
import { MonedaService } from './services/moneda.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature('clasificadores', reducers),
  ],
  declarations: [],
  providers: [MonedaService]
})
export class ClasificadoresModule { }
