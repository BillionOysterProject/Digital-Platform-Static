import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthBackend {
	constructor(private http: Http){}
	
	// getOrg(org:string){
	// 	return this.makeRequest(`orgs/${org}`);
	// }
	
	// getReposForOrg(org:string){
	// 	return this.makeRequest(`orgs/${org}/repos`);
	// }
	
	login(username:string, password:string){
		// do something
		// return this.makeRequest(`repos/${org}/${repo}`);
	}
	
	signup(type: string, name: string, accountType: string){
		// console.log(name, type, accountType)
		//do something
	}
}