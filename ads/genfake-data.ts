import { faker } from '@faker-js/faker';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({
    filename: './data/app.sqlite3',
    driver: sqlite3.Database
});

const HOW_MANY = 5;

for (let i = 0; i < HOW_MANY; i++) {
    await db.run(
        `
        INSERT INTO people (name, surname, age, pet)
        VALUES (?, ?, ?, ?)
        `,
        [
            faker.person.firstName(),
            faker.person.lastName(),
            faker.number.int({ min: 18, max: 80 }),
            faker.datatype.boolean()
                ? faker.animal.petName()
                : null
        ]
    );
}

console.log(`${HOW_MANY} fake persons added.`);

await db.close();