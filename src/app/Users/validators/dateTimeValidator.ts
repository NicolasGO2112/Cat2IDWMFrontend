
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateNotGreaterThanToday(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const inputDate = new Date(control.value);
      const currentDate = new Date();

      // Establecer la hora de la fecha actual a 00:00:00 para la comparación (si se quiere comparar solo la fecha sin la hora)
      currentDate.setHours(0, 0, 0, 0);

      if (inputDate > currentDate) {
        return { 'dateNotGreaterThanToday': true }; // Error si la fecha es mayor a la actual
      }
    }
    return null; // No hay error
  };
}