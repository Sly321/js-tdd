import { Injectable } from '@angular/core';

@Injectable()
export class Service {

    constructor() {
    }

    aService(): string {
        return "hello";
    }
}