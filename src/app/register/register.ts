import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ns-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  protected register(user: { username: string; password: string }): void{
    console.log(user);
  }

}
