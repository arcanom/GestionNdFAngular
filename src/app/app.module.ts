import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './compoment/connexion/connexion.component';
import { InscriptionEmployeeComponent } from './compoment/inscription-employee/inscription-employee.component';
import { DetailsndfComponent } from './compoment/detailsndf/detailsndf.component';
import { HistoriquendfComponent } from './compoment/historiquendf/historiquendf.component';
import { MesndfComponent } from './compoment/mesndf/mesndf.component';
import { TraitementndfComponent } from './compoment/traitementndf/traitementndf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormulaireNdfComponent } from './compoment/formulaire-ndf/formulaire-ndf.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionEmployeeComponent,
    DetailsndfComponent,
    HistoriquendfComponent,
    MesndfComponent,
    TraitementndfComponent,
    HeaderComponent,
    FooterComponent,
    FormulaireNdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
