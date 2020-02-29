import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneViewComponent } from './phone-view/phone-view.component';
import { PhoneAddComponent } from './phone-add/phone-add.component';
import { MainComponent } from './main/main.component';
import { InformationComponent } from './information/information.component';


const routes: Routes = [
  {path: '', component: InformationComponent},
  {path: 'catalog', component: MainComponent},
  {path: 'add', component: PhoneAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
