import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthBackend} from '../../../services/authenticate';

@Component({
  selector: 'signup',
  templateUrl: 'app/components/auth/signup/signup.html',
  styleUrls: ['app/components/auth/signup/signup.css'],
  providers: [AuthBackend],
  directives: [],
  pipes: []
})
export class SignUp {

  constructor(http: Http, private authbackend: AuthBackend) { }

  signUpUser(type: string, name: string, accountType: string) {
    this.authbackend.signup(type, name, accountType)
  }

}
