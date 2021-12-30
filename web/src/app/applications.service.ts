import { Injectable } from '@angular/core';
import { Application } from './types/application';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private getApplicationsUrl = environment.dataUrl;

  constructor(private httpClient: HttpClient) { }

  public getApplications(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(this.getApplicationsUrl);
  }
}
