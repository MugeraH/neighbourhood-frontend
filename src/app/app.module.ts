import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HoodsComponent } from './hoods/hoods.component';
import { HoodDetailComponent } from './hood-detail/hood-detail.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HoodsComponent,
    HoodDetailComponent,
    BusinessDetailComponent,
    BusinessCreateComponent,
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
