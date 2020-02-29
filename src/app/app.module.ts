import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneViewComponent } from './phone-view/phone-view.component';
import { HeaderComponent } from './header/header.component';
import { PhoneAddComponent } from './phone-add/phone-add.component';
import { MainComponent } from './main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InformationComponent } from './information/information.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PhoneViewComponent,
    HeaderComponent,
    PhoneAddComponent,
    MainComponent,
    InformationComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
