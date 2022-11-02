import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailProyectsComponent } from './components/main/portfolio/detail-proyects/detail-proyects.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:'detail/:id', component:DetailProyectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
