import { Injectable } from '@angular/core';
import { Application } from './application';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  //private _getApplicationsUrl = "http://localhost:7071/api/applications";
  private _getApplicationsUrl = "assets/data.json";

  constructor(private httpClient: HttpClient) { }

  public getApplications(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(this._getApplicationsUrl);
  }
}
