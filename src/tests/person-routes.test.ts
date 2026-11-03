import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../server.ts';

describe('GET /api/persons', () => {

    it('should return all persons', async () => {

        const res = await request(app)
            .get('/api/persons');

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

    });

});

it('should create a new person', async () => {

    const res = await request(app)
        .post('/api/persons')
        .send({
            name: 'Test',
            surname: 'User',
            age: 20
        });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Test');

});

it('should get person by id', async () => {

    const create = await request(app)
        .post('/api/persons')
        .send({
            name: 'John',
            surname: 'Doe',
            age: 25
        });

    const id = create.body.id;

    const res = await request(app)
        .get(`/api/persons/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(id);

});

it('should update person', async () => {

    const create = await request(app)
        .post('/api/persons')
        .send({
            name: 'Old',
            surname: 'Name',
            age: 20
        });

    const id = create.body.id;

    const res = await request(app)
        .put(`/api/persons/${id}`)
        .send({
            name: 'New',
            surname: 'Name',
            age: 30
        });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe('New');

});

