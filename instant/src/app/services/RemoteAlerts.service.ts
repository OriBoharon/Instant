import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemoteAlertsService {

  constructor(private http: HttpClient) { }

  alertsUrl = '10.105.63.156/users/aya/alerts';
  ayasIP = '10.105.63.156'

  getAlerts(user: string) {
    return this.http.get(this.ayasIP + '/users/' + user + '/alerts');
  }

}
