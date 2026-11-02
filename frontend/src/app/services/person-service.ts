import { HttpClient } from '@angular/common/http';
import { Service, inject, signal } from '@angular/core';
import { Person } from '../models/person_model-Front';
import { Observable, tap } from 'rxjs';

@Service()
export class PersonService {
    private readonly http = inject(HttpClient);
    private readonly url = "api/persons";

    private readonly _persons = signal<Person[]>([]);
    readonly persons = this._persons.asReadonly();

    loadPersons(): void {
        this.http.get<Person[]>(this.url)
            .pipe(
                tap(persons => this._persons.set(persons))
            )
            .subscribe();
    }
}
