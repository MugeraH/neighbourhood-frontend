import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessUpdateComponent } from './business-update/business-update.component';
import { HomeComponent } from './home/home.component';
import { HoodDetailComponent } from './hood-detail/hood-detail.component';
import { HoodsComponent } from './hoods/hoods.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hoods', component: HoodsComponent },
  { path: 'hood/:id', component: HoodDetailComponent },
  {path:'add_business/:id',component:BusinessCreateComponent},
  {path:'update_business/:id',component:BusinessUpdateComponent},

  {path:'add_post/:id',component:PostsComponent},
  {path:'update_post/:id',component:PostUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
