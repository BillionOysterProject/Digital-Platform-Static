import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
// import {About} from './components/about/about';
import {SignUp} from './components/auth/signup/signup';
import {Login} from './components/auth/login/login';
import {Lesson} from './components/lesson/lesson';
// import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'app',
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: 'app/app.html',
  pipes: []
})
@RouteConfig([
  new Route({ path: '/', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/signup', component: SignUp, name: 'SignUp'}),
  new Route({ path: '/login', component: Login, name: 'Login'}),
  new Route({ path: '/lesson', component: Lesson, name: 'Lesson'})


  // new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class App {

  constructor(private router: Router) { }

}
