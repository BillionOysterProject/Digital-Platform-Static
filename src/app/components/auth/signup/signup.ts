import {Component, ViewEncapsulation} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthBackend} from '../../../services/authenticate';

@Component({
    selector: 'signup',
    templateUrl: 'app/components/auth/signup/signup.html',
    styles: [ require('./signup.scss') ],
    providers: [AuthBackend],
    directives: [],
    pipes: [],
    encapsulation: ViewEncapsulation.None
})
export class SignUp {
    response = {};
    constructor(http: Http, private authbackend: AuthBackend) { }

    signUpUser(type: string, email: string, name: string, password: string) {

        this.authbackend.signup(type, email, name, password)
            .subscribe(res => { this.response = res; });
    }

}
