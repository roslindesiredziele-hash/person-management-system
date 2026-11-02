import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../../services/person-service';
import { Person } from '../../models/person_model-Front';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-person-form',
  styleUrl: './person-form.css',
  templateUrl: './person-form.html',
})
export class PersonForm {
  private readonly forbuilder = inject(NonNullableFormBuilder);
  private readonly personServ = inject(PersonService);
  
}
