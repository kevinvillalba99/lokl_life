import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customMinValidator(min: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value?.replace(/\D/g, '');
    const numericValue = parseInt(value, 10);
    return numericValue >= min ? null : { 'minValue': true };
  };
}
