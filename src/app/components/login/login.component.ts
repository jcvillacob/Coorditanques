import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userValue: string = '';
  passwordValue: string = '';

  onSubmit() {
    if (!this.userValue || !this.passwordValue) {
      alert('Por favor, completa los campos de correo usuario y contraseña.');
      return;
    }

    console.log({ 'userName': this.userValue, 'password': this.passwordValue });
  }
}
