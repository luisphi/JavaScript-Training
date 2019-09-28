import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project';
import {Global} from './global';

@Injectable()
export class ProjectService{
    public url:string;

    constructor(private _http:HttpClient){
        this.url = Global.url;
    }

    testService(){
        return "Probando el servicio Project";
    }

    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-project', params, {headers:headers});
    }

    makeFileRequest(url:string, params:Array<String>, files:Array<File>, name:string){
        return new Promise(function(resolve, reject){
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest(); //Sinonimo de ajax

            for(var i=0; i<=files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.readyState);
                    }
                }
            }
        });
    }
}