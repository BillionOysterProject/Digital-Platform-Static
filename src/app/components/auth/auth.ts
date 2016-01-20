import {Component} from 'angular2/core';
import {Http} from 'angular2/http';


@Component({
  selector: 'auth',
  templateUrl: 'app/components/auth/auth.html',
  styleUrls: ['app/components/auth/auth.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Auth {

  constructor(http:Http) {
    
  }
}
