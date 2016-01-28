import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styles: [ require('./home.scss') ],
  providers: [],
  directives: [],
  pipes: [],
  encapsulation: ViewEncapsulation.None
})
export class Home {

  constructor() {}

}
