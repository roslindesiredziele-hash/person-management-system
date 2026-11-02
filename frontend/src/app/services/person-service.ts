import { Service, inject, signal } from '@angular/core';
import { Person } from '../models/person_model-Front';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Service()
export class Person {}
