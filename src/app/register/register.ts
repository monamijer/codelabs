import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModel } from '../models/usermodel';

@Component({
  selector: 'ns-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private readonly fb = inject(FormBuilder);

  protected readonly userNameCtrl = this.fb.control('', [Validators.required, Validators.minLength(3)]);
  protected readonly passwordCtrl = this.fb.control('', [Validators.required]);

  protected readonly userForm = this.fb.group({
    username: this.userNameCtrl,
    password: this.passwordCtrl
  })
  protected setAnotherNinja(): void{
    this.userNameCtrl.setValue('JB')
  }

  protected register(): void{
    console.log(this.userForm.value);
  }

}
