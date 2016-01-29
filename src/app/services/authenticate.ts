import {Injectable} from 'angular2/core';
import {Http, Headers, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

const APIurl = 'http://bopdigitalplatform-dev.elasticbeanstalk.com/';

@Injectable()
export class AuthBackend {

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.loginRequest(username, password);
        // do something
        // return this.makeRequest(`repos/${org}/${repo}`);
    }

    signup(type: string, email: string, name: string, accountType: string) {
        return this.signupRequest(type, email, name, accountType);
        // console.log(name, type, accountType)
        //do something
    }

    private loginRequest(email: string, password: string) {
        let creds = 'email=' + email + '&password=' + password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://localhost:3000/login', creds, {
            headers: headers
        })
            .map(res => res.json());

    }

    private signupRequest(accountType: string, email: string, name: string, password: string) {
        let creds = 'email=' + email + '&password=' + password + '&name=' + name +
           '&accountType=' + accountType;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://localhost:3000/signup', creds, {

            headers: headers
        })
            .map(res => res.json());

    }
}
