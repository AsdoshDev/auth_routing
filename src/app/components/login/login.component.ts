import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) {
  }
  name: string = '';
  pwd: string = '';
  error: boolean = false;

  ngOnInit() {
    localStorage.setItem('token','');
  }

/* check if the user typed credentials are matching with credential list from datase */
  checkValidCreds(dbCreds) {
    let isValidCreds = false;
    for (let i = 0; i < dbCreds.length; i++) {
      if (this.name === dbCreds[i].name && this.pwd === dbCreds[i].pwd) {
        isValidCreds = true;
        return isValidCreds;
      }
    }
    return isValidCreds;
  }

/* get credential dataase and check if matching, if it matches, get the token from dataase and store in localStorage */
  submit() {
    let req = {
      'name' : this.name,
      'pwd' : this.pwd
    }
    if(this.name && this.pwd){
      this._authService.getCreds(req).subscribe(creds => {
        if (this.checkValidCreds(creds)) {
          this._authService.getToken().subscribe(data => {
              localStorage.setItem('token', data['token']);
              this._router.navigate(['/dashboard']);
              localStorage.setItem('name',this.name);
          })
        }
        else{
          this.error = true;
        }
      });
    }
    else{
      this.error = true;
    }
  }
}


