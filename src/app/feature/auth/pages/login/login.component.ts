import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private formGroup: FormGroup) {
  }

  public signIn(): void {
    alert("Inicio de Sesión");
  }

}
