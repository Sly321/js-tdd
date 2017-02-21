import Vote = require('../models/vote');

let votes =[];

export function init(options: string[]): void {
    votes = options.map(option => new Vote(option));
}

export function getTotalVotes(): number {
    let sum  = 0;
    votes.forEach(vote => {
        sum += vote.votes;
    });
    return sum;
}

export function vote(index: number): void {
    votes[index].votes++;
}

export function getVotes(): Array<Vote> {
    return votes;
}

export function test(): void {
    console.log("rip");
}