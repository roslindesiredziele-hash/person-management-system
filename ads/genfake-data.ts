import { faker } from '@faker-js/faker';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({
    filename: './data/app.sqlite3',
    driver: sqlite3.Database
});

// Default to 25 if no argument is supplied
const count = Number(process.argv[2]) || 25;

console.log(`Generating ${count} fake people...`);

for (let i = 0; i < count; i++) {
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

console.log(`${count} fake people added successfully.`);

await db.close();