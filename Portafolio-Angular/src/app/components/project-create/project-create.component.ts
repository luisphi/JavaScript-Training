import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css'],
  providers: [ProjectService]
})
export class ProjectCreateComponent implements OnInit {
  public title:string;
  public project:Project;
  public status:Boolean;

  constructor(
    private _projectService: ProjectService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2019,'','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        response.project ? this.status = true: this.status = false;
        form.reset();
      }, 
      error => {
        console.log(<any> error);
      }
    )
  }

}