import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

//PRUEBAS DE INTEGRACIÓN

describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should laod', () => {
        expect(component).toBeTruthy();
    });

    it('Shold show leyend text', () => {
        component.leyenda = 'Progreso de carga'; //Change the variable value
        fixture.detectChanges(); //Disparar la detección de cambios    
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement; //Get the h3 tag that displays variable value
        expect(elem.innerHTML).toContain('Progreso de carga'); //Expect
    });

    it('Debe demostar el valor del progreso', () => {
        component.cambiarValor(-5);//Call Function to decrement value
        fixture.detectChanges();

        fixture.whenStable().then(() => {

            const elem = fixture.debugElement.query(By.css('input')).nativeElement; 
            expect(elem.value).toBe('45');

        });
    });

    it('Should decrement in 5 if the first button is clicked', () => {
        const buttons:DebugElement[] = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
    });

    it('Should increment in 5 if the second button is clicked', () => {
        const buttons:DebugElement[] = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(55);
    });

    
    it('Title should show progress value', () => {
        component.cambiarValor(5);//Call Function to decrement value
        fixture.detectChanges();

        fixture.whenStable().then(() => {

            const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
            expect(component.progreso).toBe(55) 
            expect(elem.innerHTML).toContain('55');

        });
    });

});
