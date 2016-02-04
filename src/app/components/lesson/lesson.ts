import {Component, ViewEncapsulation, Injector, provide, IterableDiffers, KeyValueDiffers, Renderer, ElementRef} from 'angular2/core';
import {Http} from 'angular2/http';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap';

import {ModalDialogInstance, ModalConfig, Modal, ICustomModal, YesNoModalContent, YesNoModal, ICustomModalComponent} from 'angular2-modal';

@Component({
    selector: 'lesson',
    templateUrl: 'app/components/lesson/lesson.html',
    styles: [require('./lesson.scss')],
    providers: [Modal],
    directives: [BUTTON_DIRECTIVES],
    pipes: [],
    encapsulation: ViewEncapsulation.None
})



export class Lesson {
    periodOptions: Object[] = [1, 2, 3, 4, 5, 6, 7];
    public mySampleElement: ElementRef;
    public lastModalResult: string;

    constructor(private modal: Modal, private injector: Injector, private _renderer: Renderer) { }

    private radioSetting: string = 'classroomSetting'; // default button to be selected
    public checkModel: any = { classroomSetting: true, fieldSetting: false };

    public showSubjectAreaModal = () => {
        this.showSubjectAreaModalSwitch = !this.showSubjectAreaModalSwitch;
    }

    public classPeriodSetter = (period) => {
        console.log('hi felix');
        console.log('the selected period is ${period}');
    }

    static modalConfigs = {
        'subjectAreaModal': new ModalConfig("lg", false, 27)
    };

    static modalData = {
        'subjectAreaModal': new YesNoModalContent('Simple Large modal', 'Press ESC or click OK / outside area to close.', true)
    };


    openDialog(type: string) {
        let dialog: Promise<ModalDialogInstance>;
        let component = YesNoModal;

        // Workaround for https://github.com/angular/angular/issues/4330
        // providing resolved providers to IterableDiffers, KeyValueDiffers & Renderer.
        // Since customWindow uses 'ngClass' directive & 'ngClass' requires the above providers we need to supply them.
        // One would expect angular to get them automatically but that not the case at the moment.
        let bindings = Injector.resolve([
            provide(ICustomModal, { useValue: Lesson.modalData[type] }),
            provide(IterableDiffers, { useValue: this.injector.get(IterableDiffers) }),
            provide(KeyValueDiffers, { useValue: this.injector.get(KeyValueDiffers) }),
            provide(Renderer, { useValue: this._renderer })
        ]);

        if (type === 'inElement') {
            dialog = this.modal.openInside(
                <any>component,
                this.mySampleElement,
                'myModal',
                bindings,
                Lesson.modalConfigs[type]);
        } else
            dialog = this.modal.open(
                <any>component,
                bindings,
                Lesson.modalConfigs[type]);


        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }
}
