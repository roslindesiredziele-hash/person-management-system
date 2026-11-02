import { HttpClient } from '@angular/common/http';
import { Service, inject, signal } from '@angular/core';
import { Person } from '../models/person_model-Front';
import { Observable, tap } from 'rxjs';

@Service()
export class PersonService {
    private readonly http = inject(HttpClient);
    private readonly url = "api/persons";

    private readonly _persons = signal<Person[]>([]);
    readonly personR = this._persons.asReadonly();

    loadPeople(): void {
        this.http.get<Person[]>(this.url).subscribe(
            {
                next: (data) => {
                    this._persons.set(data);
                    console.log("Persons loaded successfully:", data);
                },
                error: (error) => {
                    console.error("problem with getting data:", error);
                }
            }
        );
    }

    savePerson(pers: Person): Observable<Person> {
        return this.http.post<Person>(this.url,pers).pipe(
            tap(
                () => {
                    this.loadPeople();
                },
                (error) => {
                    console.error("problem with saving data:", error);
                }
            )
        );
    }  
}
