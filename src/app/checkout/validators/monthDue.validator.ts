import { AbstractControl, ValidatorFn } from '@angular/forms';

export function monthDueValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const arrayDue: string[] = (control.value as string).split('/')
    let month: number;
    let year: number;

    if(arrayDue.length == 2){
      month = parseInt(arrayDue[0], 10)
      year= parseInt(arrayDue[1], 10)
    }
    else{
      return { 'invalidDate': true }
    }

    return (month <= 12 && month >= 1 && year > 22) ? null : { 'invalidDate': true };
  };
}
