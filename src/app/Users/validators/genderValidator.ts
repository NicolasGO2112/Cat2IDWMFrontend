import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function genderValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const allowedValues = ['Masculino', 'Femenino', 'Prefiero no decirlo', 'Otro'];
    
    if (control.value && !allowedValues.includes(control.value)) {
      return { 'invalidGender': true }; // Error si el valor no está en la lista
    }

    return null; // No hay error
  };
}