import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormValidateService {
    constructor() { }
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormArray) {
                for (const control1 of control.controls) {
                    if (control1 instanceof FormControl) {
                        control1.markAsTouched({
                            onlySelf: true
                        });
                    }
                    if (control1 instanceof FormGroup) {
                        this.validateAllFormFields(control1);
                    }
                }
                // control.markAsTouched();
            }
            if (control instanceof FormControl) {
                control.markAsTouched({
                    onlySelf: true
                });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}