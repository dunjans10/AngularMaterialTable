import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DocumentDetailComponent } from './components/documents/document-detail/document-detail.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'documents', component:DocumentsComponent},
  {path:'documents/:id', component:DocumentDetailComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
