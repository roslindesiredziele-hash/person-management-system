import { faker/*, fakerFR, fakerEN_NG */} from '@faker-js/faker';

/*console.log(faker.person.jobTitle());
console.log(fakerEN_NG.person.firstName({ sex: 'male' }));
console.log(fakerFR.person.firstName({ sex: 'male' }));
console.log(fakerEN_NG.person.lastName({ sex: 'male' }));
console.log(fakerFR.person.lastName({ sex: 'male' }));*/

class Person
{
    name: string;
    surname: string;
    age: number;
    pet?: string;
}