import chai = require("chai");
import voting = require("../controllers/voting");

let expect = chai.expect;

describe("My App tests", function () {
    it('should be able to init app', () => {
        // Vorbereitung
        let options = ['Awesome', 'Ok', 'Bad'];

        // Ausführung
        voting.init(options);

        // Prüfung
        expect(voting.getTotalVotes()).to.be.equal(0);
    });
});

describe("voting app", () => {
    let classUnderTest = voting;
    
    beforeEach(() => {
    
    });
    
    it('vote_SollteVotenKoennen', () => {
        // Vorbereitung
        
        // Ausführung
        classUnderTest.vote(0);
        
        // Prüfung
        expect(classUnderTest.getTotalVotes()).to.be.equal(1);
    });

    it('vote_SollteEinVoteImZweitenArraySein', () => {
        // Vorbereitung

        // Ausführung
        classUnderTest.vote(1);

        // Prüfung
        expect(classUnderTest.getVotes()[1].votes).to.be.equal(1);
    });
});
