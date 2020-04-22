import { FormularioRegister } from "./formulario"
import { FormBuilder } from '@angular/forms';

describe('Prueba de formularios', () => {
    let componente: FormularioRegister;
    beforeEach(() => componente = new FormularioRegister(new FormBuilder()));
    it('Should create a form with two fields(email, password)', () => { 
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });
    it('Email should be required', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
    it('Email Should be Valid', () => {
        const control = componente.form.get('email');
        control.setValue('agu@gmail.com');
        expect(control.valid);
    });
});