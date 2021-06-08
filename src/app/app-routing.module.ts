import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessUpdateComponent } from './business-update/business-update.component';
import { HomeComponent } from './home/home.component';
import { HoodDetailComponent } from './hood-detail/hood-detail.component';
import { HoodsComponent } from './hoods/hoods.component';
import { LoginComponent } from './login/login.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'home', component: HomeComponent },
  { path: 'hoods', component: HoodsComponent },
  { path: 'hood/:id', component: HoodDetailComponent },
  { path: 'add_business/:id', component: BusinessCreateComponent },
  { path: 'update_business/:id', component: BusinessUpdateComponent },

  { path: 'add_post/:id', component: PostCreateComponent },
  { path: 'update_post/:id', component: PostUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
