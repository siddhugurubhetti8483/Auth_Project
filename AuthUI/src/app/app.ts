import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected title = 'AuthUI';
}
