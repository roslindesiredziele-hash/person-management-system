import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonForm } from './components/person-form/person-form';


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
