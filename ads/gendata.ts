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

    /*const p = new Person(
    "Desire",
    "Dziele",
    25
);
p.print();
const p2 = new Person(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.number.int({ min: 0, max: 100 }),
    faker.animal.type()
);
p2.print();*/

    print(): void {
        console.log(`${this.name} ${this.surname} is ${this.age} years old and has ${this.pet ?? "no"} pet`);
    }
}

async function getAnimal(): Promise<string> {
    const address: string = "https://extinct-api.herokuapp.com/api/v1/animal/";
    const data1 = await fetch(address);
    if (!data1.ok) {
        throw new Error('no data received');
    }
    const data2 = await data1.json();
    return data2.data[0].commonName;
}

async function main(): Promise<void> {
    const p1 = new Person("Edward", "Smith", 30);
    const p2 = new Person("John", "Doe", 25, "Dog");

    const tab: Person[] = [];
    tab.push(p1);
    tab.push(p2);

    for (let i = 0; i < 20; i++) {
        const _name = faker.person.firstName();
        const _surname = faker.person.lastName();
        const _age = faker.number.int({ min: 20, max: 65 });

        const P = new Person(_name, _surname, _age);
        if (i % 3 != 0) {
            const _pet = await getAnimal();
            P.pet = _pet;
        }
        tab.push(P);
    }

    for (let j = 0; j < tab.length; j++) {
        tab[j].print();
}
}

main();