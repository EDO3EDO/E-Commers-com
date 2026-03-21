import { Component, signal } from '@angular/core';
import { Navbar } from "../Component/navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App');
}
