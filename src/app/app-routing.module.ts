import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { HomeComponent } from './home/home.component';
import { HoodDetailComponent } from './hood-detail/hood-detail.component';
import { HoodsComponent } from './hoods/hoods.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hoods', component: HoodsComponent },
  { path: 'hood/:id', component: HoodDetailComponent },
  {path:'add_business',component:BusinessCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
