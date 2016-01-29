import {Component, ViewEncapsulation} from 'angular2/core';
import {Http} from 'angular2/http';
import {AuthBackend} from '../../../services/authenticate';

@Component({
    selector: 'login',
    templateUrl: 'app/components/auth/login/login.html',
    styles: [ require('./login.scss') ],
    providers: [AuthBackend],
    directives: [],
    pipes: [],
    encapsulation: ViewEncapsulation.None
})
export class Login {
    user = {};

    constructor(http: Http, private authbackend: AuthBackend) { }

    loginUser(username: string, password: string) {
        this.authbackend.login(username, password)
          .subscribe(res => {
              this.user = res;
              console.log(res);
          });

    }
}
