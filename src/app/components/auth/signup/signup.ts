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
    response = {};
    constructor(http: Http, private authbackend: AuthBackend) { }

    signUpUser(type: string, email: string, name: string, password: string) {

        this.authbackend.signup(type, email, name, password)
            .subscribe(res => { this.response = res; });
    }

}
