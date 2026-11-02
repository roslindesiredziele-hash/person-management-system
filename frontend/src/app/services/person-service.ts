import { HttpClient } from '@angular/common/http';
import { Service, inject, signal } from '@angular/core';
import { Person } from '../models/person_model-Front';
import { Observable, tap } from 'rxjs';

@Service()
export class PersonService {}
