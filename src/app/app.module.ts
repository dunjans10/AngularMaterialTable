import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentDetailComponent } from './components/documents/document-detail/document-detail.component';
import { PanelComponent } from './components/documents/panel/panel.component';
import { FormComponent } from './components/documents/form/form.component';
import { TableComponent } from './components/documents/table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    DocumentsComponent,
    DocumentDetailComponent,
    PanelComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
