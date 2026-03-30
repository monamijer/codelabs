import { WritableSignal } from '@angular/core';

export interface UserModel {
  username: WritableSignal<string>;
  password: WritableSignal<string>;
}
