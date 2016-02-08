import { Component, View, ViewEncapsulation } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { contentHeaders } from '../../../common/headers';

@Component({
  selector: 'login'
})
@View({
  template: require('./login.html'),
  styles: [require('./login.scss')],
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
export class Login {
  user = {};

  constructor(public router: Router, public http: Http) { }

  // loginUser(username: string, password: string) {
  //     this.authbackend.login(username, password)
  //       .subscribe(res => {
  //           this.user = res;
  //       });
  //
  // }
  loginUser(event, email, password) {
    event.preventDefault();
    // let body = JSON.stringify({ email, password });
    let creds = 'email=' + email + '&password=' + password;
    console.log(creds);
    this.http.post('http://localhost:3000/login', creds, { headers: contentHeaders })
      .subscribe(
      response => {
        console.log('response', response)
        localStorage.setItem('jwt', response.json().id_token);
        this.router.parent.navigateByUrl('/');
      },
      error => {
        // console.log(error.text());
        console.log(error);
      }
      );
  }
}
