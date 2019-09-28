import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticioneService {
    private urlWs: string;

    constructor(private _http: HttpClient){
        this.urlWs = "https://reqres.in/";
    }

    getUser(userId: string): Observable<any> {
        return this._http.get(this.urlWs + 'api/users/' + userId);
    }
}