import chai = require("chai");

import '../public/node_modules/core-js/client/shim.min.js';
import { Service } from "../public/app/services/service";

let expect = chai.expect;

describe('ServiceTestin', () => {

    let classUnderTest = Service;

    // Vor jedem Test
    beforeEach(() => {

    });

    it('constructor_SollteHelloAusgeben', () => {
        // Vorbereitung

        // Ausführung
        let test = new Service();
        let shouldBeHello = test.aService();

        // Prüfung
        expect(shouldBeHello).to.be.equal("hello");
    });
});

