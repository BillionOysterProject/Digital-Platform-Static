import { Component, View, ViewEncapsulation } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from 'angular2/router';

@Component({
  selector: 'lesson'
})
@View({
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES],
  template: require('./lesson.html'),
  styles: [require('./lesson.scss')]
})
export class Lesson {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }
  // constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
  // }
}
