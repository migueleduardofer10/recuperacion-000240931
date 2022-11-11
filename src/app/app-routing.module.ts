import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEspacioComponent } from './components/new-espacio/new-espacio.component';


const routes: Routes = [
  { path: 'registro', component: NewEspacioComponent },
  { path: '', redirectTo: 'registro', pathMatch: 'full' }, 
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}) 
export class AppRoutingModule {}
