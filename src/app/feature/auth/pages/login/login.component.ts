import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private cadena: string | number = "";

  constructor(private router: Router) {
  }

  public signIn(): void {
    alert("Inicio de Sesión");
  }

  public signUp(): void {
    this.router.navigateByUrl("autenticacion/registro");
  }

}
