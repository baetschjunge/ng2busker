import { Component } from '@angular/core';

@Component({
    selector: 'about',
    //templateUrl: 'user.component.template.html',
    template: '<h1>About Me</h1>' +
    '<user></user>',
    //templateUrl: './Sections/header.component.template.html'
})


export class AboutRouteComponent {
    constructor() {
    }
}