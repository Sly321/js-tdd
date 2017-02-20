class Person {
    firstName: string;
    lastName: string;

    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }
}

/** asdf */
function hello(person: Person) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}

let sven = new Person("Sven", "Liebig");

hello(sven);