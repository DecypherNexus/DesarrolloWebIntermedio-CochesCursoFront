import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterRequestDTO} from "../../../../core/dtos/RegisterRequestDTO";
import {FormErrors} from "../../../../core/enums/FormErrors";
import {AuthService} from "../../../../core/services/auth.service";
import {AppBaseComponent} from "../../../../core/utils/AppBaseComponent";
import {CustomValidators} from "../../../../core/utils/CustomValidators";
import {lastValueFrom} from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AppBaseComponent {

  public registerForm: FormGroup;
  public generatedPassword: string;
  public registered: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {

    super();
    this.registered = false;
    this.registerForm = this.formBuilder.group({
      cardId: ['', [Validators.required]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]],
      cellphoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });

  }


  public async register(): Promise<void> {

    let registerRequestDTO: RegisterRequestDTO = this.registerForm.value;

    if (this.registerForm.valid) {

      await lastValueFrom(this.authService.register(registerRequestDTO)).then(response => {
        this.generatedPassword = response.password;
      })

      this.registered = true;

    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hay errores en el formulario, reviselo por favor'
      })

      console.log(this.getAllFormErrors(this.registerForm));
      this.registerForm.markAllAsTouched();

    }

  }


  /**
   * Retorna mensaje de error de un campo del formulario
   * @param field
   */
  public getErrorForm(field: string): string {

    let message;
    const required: Array<String> = ["cardId", "fullName", "email", "cellphoneNumber"];
    const emailFormat: Array<String> = ["email"]
    const onlyNumber: Array<String> = ["cellphoneNumber"]

    if (this.isFieldTouched(this.registerForm, field)) {

      if (required.includes(field) && this.registerForm.get(field).hasError('required')) {
        message = FormErrors.REQUIRED;
      } else if (emailFormat.includes(field) && this.registerForm.get(field).hasError('pattern')) {
        message = FormErrors.EMAIL_FORMAT;
      } else if (onlyNumber.includes(field) && this.registerForm.get(field).hasError('pattern')) {
        message = FormErrors.ONLY_NUMBER;
      }

    }

    return message;

  }

}
