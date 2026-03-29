import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
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
  protected readonly birthdateCtrl= this.fb.control('', [Validators.required, Register.isOldEnough]);


  protected readonly userForm = this.fb.group({
    username: this.userNameCtrl,
    password: this.passwordCtrl,
    birthdate:this.birthdateCtrl
  })

  private static isOldEnough(control: AbstractControl<string>): ValidationErrors | null{
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true};
  }

  protected setAnotherNinja(): void{
    this.userNameCtrl.setValue('JB')
  }

  protected register(): void{
    console.log(this.userForm.value);
  }

}
