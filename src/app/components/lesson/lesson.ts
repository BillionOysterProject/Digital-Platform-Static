import {Component, ViewEncapsulation} from 'angular2/core';
import {Http} from 'angular2/http';
// import {AuthBackend} from '../../../services/authenticate';

@Component({
    selector: 'lesson',
    templateUrl: 'app/components/lesson/lesson.html',
    styles: [ require('./lesson.scss') ],
    providers: [],
    directives: [],
    pipes: [],
    encapsulation: ViewEncapsulation.None
})
export class Lesson {
    constructor() { }

}
