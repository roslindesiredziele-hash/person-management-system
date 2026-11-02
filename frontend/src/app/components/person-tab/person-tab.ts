import { Component, inject, OnInit } from '@angular/core';
import { PersonService } from '../../services/person-service';

@Component({
  imports: [],
  selector: 'app-person-tab',
  styleUrl: './person-tab.css',
  templateUrl: './person-tab.html',
})
export class PersonTab {
  private readonly personServ = inject(PersonService);
  protected readonly peopleTab = this.personServ.peopleR;

  ngOnInit(): void {
    
}
