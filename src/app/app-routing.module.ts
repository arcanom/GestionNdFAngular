import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './compoment/connexion/connexion.component';
import { DetailsndfComponent } from './compoment/detailsndf/detailsndf.component';
import { FormulaireNdfComponent } from './compoment/formulaire-ndf/formulaire-ndf.component';
import { HistoriquendfComponent } from './compoment/historiquendf/historiquendf.component';
import { InscriptionEmployeeComponent } from './compoment/inscription-employee/inscription-employee.component';
import { MesndfComponent } from './compoment/mesndf/mesndf.component';
import { TraitementndfComponent } from './compoment/traitementndf/traitementndf.component';

const routes: Routes = [
  {path:"connexion",component:ConnexionComponent},
  {path:"details",component:DetailsndfComponent},
  {path:"historique",component:HistoriquendfComponent},
  {path:"inscription-employee",component:InscriptionEmployeeComponent},
  {path:"formulaire-ndf",component:FormulaireNdfComponent},
  {path:"mesndf",component:MesndfComponent},
  {path:"traitementndf",component:TraitementndfComponent},
  {path:"",component:ConnexionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
