import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonForm } from './components/person-form/person-form';
import { PersonTab } from './components/person-tab/person-tab';

@Component({
  imports: [RouterOutlet, PersonForm, PersonTab],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
