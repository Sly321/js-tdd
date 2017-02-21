import { Component } from '@angular/core';

import { Service } from '../../services/service';

@Component({
    selector: 'content',
    templateUrl: 'app/components/content/content.component.html',
    styleUrls: ['app/components/content/content.css']
})
export class Content  {
    resourceUrl: string = "app/resources/images/";
    starWarsTitle: string;
    images: number;

    /** Called first */
    constructor(private serviceVariableName: Service) {
        this.starWarsTitle = "ASDF Wars";
    }

    /** Called after constructor */
    ngOnInit() {
        this.starWarsTitle = "Star Wars"; // After Contructor
        this.images = 4;
    }

    /** Called when the input value changed */
    ngOnChanges() {

    }

    /** Called on every little mousemove and render */
    ngAfterViewChecked() {
    }

    /** https://angular.io/docs/ts/latest/guide/cheatsheet.html for more ngFunctions */
}
