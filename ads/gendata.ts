import { faker/*, fakerFR, fakerEN_NG */ } from '@faker-js/faker';

/*console.log(faker.person.jobTitle());
console.log(fakerEN_NG.person.firstName({ sex: 'male' }));
console.log(fakerFR.person.firstName({ sex: 'male' }));
console.log(fakerEN_NG.person.lastName({ sex: 'male' }));
console.log(fakerFR.person.lastName({ sex: 'male' }));*/

class Person {
    name: string;
    surname: string;
    age: number;
    pet?: string;

    constructor(n: string, s: string, a: number, p?: string) {
        if (a < 0) {
            throw new Error("Age cannot be negative");
        }
        this.name = n;
        this.surname = s;
        this.age = a;
        if (p) {
            this.pet = p;
        }
    }

    print(): void {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, Pet: ${this.pet}`);
    }
}

/*const p = new Person(
    "James",
    "Black",
    77
);
console.log(p);*/

