import { Component, inject } from '@angular/core';
import { NonNullFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../../services/person-service';
import { Person } from '../../models/person_model-Front';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-person-form',
  styleUrl: './person-form.css',
  templateUrl: './person-form.html',
})
export class PersonForm {
  
}
