import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})
export class AppComponent {
    public textProp = "hello";
    public b1click(a) {
        alert(a);
    }

}