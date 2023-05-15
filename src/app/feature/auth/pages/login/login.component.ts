import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../../core/utils/AppBaseComponent";
import {AuthLoginRequestDTO} from "../../../../core/dtos/AuthLoginRequestDTO";
import {AuthService} from "../../../../core/services/auth.service";
import {lastValueFrom} from "rxjs";
import {AuthLoginResponseDTO} from "../../../../core/dtos/AuthLoginResponseDTO";
import {TokenService} from "../../../../core/services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBaseComponent {

  /**
   * Formulario Reactivo de Login
   */
  public loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private tokenService: TokenService) {

    super();

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  public async signIn(): Promise<void> {

    let loginDTO: AuthLoginRequestDTO;

    if (this.loginForm.valid) {

      let emailValue = this.loginForm.get("email").value;
      let passwordValue = this.loginForm.get("password").value;

      loginDTO = {
        "email": emailValue,
        "password": passwordValue
      }

      await lastValueFrom(this.authService.signIn(loginDTO));
      console.log(this.tokenService.getToken());
      await this.router.navigateByUrl("/portafolio");

    } else {
      alert("Errores en el Formulario");
      // console.log(this.getAllFormErrors(this.loginForm));
      this.loginForm.markAllAsTouched();
    }

  }

  public getFormErrors(field: string): string {

    let errorMessage;

    if (this.isFieldTouched(this.loginForm, field)) {

      if (this.loginForm.get(field).hasError("required")) {
        errorMessage = "El campo es obligatorio";
      } else if (this.loginForm.get(field).hasError("email")) {
        errorMessage = "El campo requiere el formato de email";
      }

    }

    return errorMessage;

  }

}
