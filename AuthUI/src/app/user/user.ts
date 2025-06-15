import { Component } from '@angular/core';
import { Registration } from './registration/registration';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Registration],
  templateUrl: './user.html',
  styles: ``,
})
export class User {}
