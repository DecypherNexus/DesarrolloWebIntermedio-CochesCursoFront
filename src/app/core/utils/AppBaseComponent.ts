import {FormArray, FormGroup} from "@angular/forms";

/**
 * Componente de Validaciones Generales
 */
export class AppBaseComponent {

  /**
   * Validación para el Toque de un Campo
   * @param form
   * @param field
   */
  public isFieldTouched = (form: FormGroup, field: string): boolean => {
    return form?.get(field).touched === true && form?.get(field).invalid;
  }

  /**
   * Devuelve todos los Errores o Validaciones Presentes en el FormGroup
   * @param form Form a Evaluar
   */
  public getAllFormErrors(form: FormGroup | FormArray): { [key: string]: any; } | null {

    let hasError = false;

    const result = Object.keys(form.controls).reduce((acc, key) => {

      const control = form.get(key);
      const errors = (control instanceof FormGroup || control instanceof FormArray) ? this.getAllFormErrors(control) : control.errors;

      if (errors) {
        acc[key] = errors;
        hasError = true;
      }

      return acc;

    }, {} as { [key: string]: any; });

    return hasError ? result : null;

  }

}
