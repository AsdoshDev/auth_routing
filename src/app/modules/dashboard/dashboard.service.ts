import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http:HttpClient) { }
  
  error = new Subject();
  errorObj = this.error.asObservable();

  handleError(error) {
    this.error.next(error);
  }

  getEmployees(){
    return this._http.get('http://localhost:3000/employees');
  }

  getTrainees(userId){
    return this._http.get('http://localhost:3000/trainees?empId='+userId);
  }

  getCurrentUserDtls(name){
    return this._http.get('http://localhost:3000/employees?name='+name);
  }

/* using a random url to receive error response */

  errorService(){
    return this._http.get('http://localhost:3000/requestForRandomURL');
  }
}
