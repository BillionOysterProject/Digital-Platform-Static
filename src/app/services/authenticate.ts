import {Injectable} from 'angular2/core';
import {Http, Headers, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

const APIurl = 'http://localhost:3000/';

@Injectable()
export class AuthBackend {

    constructor(private http: Http) { }
	
    // getOrg(org:string){
    // 	return this.makeRequest(`orgs/${org}`);
    // }
	
    // getReposForOrg(org:string){
    // 	return this.makeRequest(`orgs/${org}/repos`);
    // }
	
    login(username: string, password: string) {
        console.log('cats!')
        return this.loginRequest(username, password)
        // do something
        // return this.makeRequest(`repos/${org}/${repo}`);
    }

    signup(type: string, email: string, name: string, accountType: string) {
        console.log(type, name, accountType)
        return this.signupRequest(type, email, name, accountType)
        // console.log(name, type, accountType)
        //do something
    }

    private loginRequest(email: string, password: string) {
        let creds = "email=" + email + "&password=" + password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://localhost:3000/login', creds, {
            headers: headers
        })
            .map(res => res.json())

    }

    private signupRequest(accountType: string, email: string, name: string, password: string) {
        let creds = "email=" + email + "&password=" + password + "&name=" + name+ "&accountType=" + accountType;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log(creds)
        return this.http.post('http://localhost:3000/signup', creds, {
            headers: headers
        })
            .map(res => res.json())

    }
}