import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { UserModel } from '../models/usermodel';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ns-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private readonly fb = inject(FormBuilder);

  protected readonly userNameCtrl = this.fb.control('', [Validators.required, Validators.minLength(3)]);
  protected readonly passwordCtrl = this.fb.control('', Validators.required);
  protected readonly confirmCtrl  = this.fb.control('', Validators.required);
  protected readonly birthdateCtrl= this.fb.control('', [Validators.required, Register.isOldEnough]);

  //protected readonly computePasswordStrength = signal();

 // protected readonly passwordStrength = toSignal(
//    this.passwordCtrl.valueChanges
//      .pipe(
//        debounceTime(400),
//        distinctUntilChanged(),
//        map(newValue => this.computePasswordStrength(newValue))
//      ),
//      { initialValue: 0 }
//  );

  protected readonly passwordGroup = this.fb.group(
    { password: this.passwordCtrl, confirm: this.confirmCtrl},
    { validators: Register.passwordMatch}
  )

  protected readonly userForm = this.fb.group({
    username: this.userNameCtrl,
    passwordForm: this.passwordGroup,
    birthdate:this.birthdateCtrl
  },
    {
      updateOn: 'submit'
    }
  )

  private static isOldEnough(control: AbstractControl<string>): ValidationErrors | null{
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true};
  }

  private static passwordMatch(group: AbstractControl<{password: string, confirm: string}>): ValidationErrors | null {
    const password = group.value.password;
    const confirm  = group.value.confirm;
    return password === confirm ? null : { matchingError: true}
  }

  protected setAnotherNinja(): void{
    this.userNameCtrl.setValue('JB')
  }

  protected register(): void{
    console.log(this.userForm.value);
  }

}
