import { Component, View } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";

var Quill = require('quill');
 
//declare var Quill: any;
 
@Component({
    selector: "quill-basic-editor",
    templateUrl: "app/services/quill/basic-editor.html",
    //directives: []
})
 
export class BasicEditor {
 
    basicEditor: any;
    name: String;
 
    constructor() {
        this.name = 'Hello';
    }

    ngOnInit() {
        console.log('container init');
        var container = (document.getElementById('basic-editor'));
        this.basicEditor = new Quill('#basic-editor', {
            modules: {
                'toolbar': { container: '#basic-toolbar' },
                'image-tooltip': true,
                'link-tooltip': true
            },
            theme: 'snow'
        });
    }
 
}
 
bootstrap(BasicEditor, []);