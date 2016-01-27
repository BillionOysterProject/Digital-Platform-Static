import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthBackend} from '../../../services/authenticate';

@Component({
    selector: 'login',
    templateUrl: 'app/components/auth/login/login.html',
    styleUrls: ['app/components/auth/login/login.css'],
    providers: [AuthBackend],
    directives: [],
    pipes: []
})
export class Login {
    user = {};

    constructor(http: Http, private authbackend: AuthBackend) { }

    loginUser(username: string, password: string) {
        this.authbackend.login(username, password)
          .subscribe(res => {
              this.user = res;
          });

    }
}
