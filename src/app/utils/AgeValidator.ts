import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class AgeValidator {
    static calculateAge(control: AbstractControl) : ValidationErrors | null {
        if (control.value !== "" ) {
            let ageDiff = Math.floor((Date.now() -  new Date(control.value).getTime()) / 3.15576e+10);
            console.log("ageDiff=", ageDiff);
            if(ageDiff > 18){
                 return { 'calculateAge': true };
            }
            return null
          }
          return null;
    }
    
}