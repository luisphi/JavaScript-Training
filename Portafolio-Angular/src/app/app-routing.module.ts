import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

// Array de rutas
const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'crear-proyecto', component: ProjectCreateComponent},
  {path: 'contacto', component: ContactComponent}, 
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
