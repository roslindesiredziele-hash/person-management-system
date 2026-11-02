import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
    filename: './data/app.sqlite3',
    driver: sqlite3.Database
});

await db.exec(`
    CREATE TABLE IF NOT EXISTS people )
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    surname TEXT NOT NULL, 
    age INTEGER NOT NULL,
    pet TEXT
    );
`);