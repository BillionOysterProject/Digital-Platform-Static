import {Component, ViewEncapsulation} from 'angular2/core';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_PROVIDERS, CanActivate} from 'angular2/router'

@Component({
  selector: 'profile',
  templateUrl: 'app/components/profile/profile.html',
  styles: [ require('./profile.scss') ],
  encapsulation: ViewEncapsulation.None
})

@CanActivate(() => tokenNotExpired())

export class Profile {
  user = JSON.parse(localStorage.getItem('profile'));
  showProfile = false;
  if(user) {
    showProfile = true;
  }

  constructor() {}

}
