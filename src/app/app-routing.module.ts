import { NgModule } from '@angular/core';
import { MatFormField } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { WasteComponent } from './waste/waste.component';

const routes: Routes = [
  {path:'waste',component:WasteComponent},
  {path:'login', loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
