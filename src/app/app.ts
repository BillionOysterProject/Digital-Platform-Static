import {View, Component} from 'angular2/core';
import {Location, Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoggedInRouterOutlet} from './loggedInOutlet';
import {Home} from './components/home/home';
import {SignUp} from './components/auth/signup/signup';
import {Login} from './components/auth/login/login';
import {Lesson} from './components/lesson/lesson';

@Component({
  selector: 'app'
})
@View({
  template: require('./app.html'),
  directives: [ ROUTER_DIRECTIVES, LoggedInRouterOutlet ]
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true},
  { path: '/signup', component: SignUp, name: 'SignUp'},
  { path: '/login', component: Login, name: 'Login'},
  { path: '/lesson', component: Lesson, name: 'Lesson'}
])
export class App {
  constructor(public router: Router) { }
}
