import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  hidePassword: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    // Aquí puedes implementar la lógica para el inicio de sesión, por ejemplo, enviar los datos a un servicio para autenticar al usuario.
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
    // Aquí puedes redirigir al usuario a otra página después del inicio de sesión exitoso.
  }  

}
