import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Component units', () => {
    let component: IncrementadorComponent;
    beforeEach(() => component = new IncrementadorComponent()); 
    it('Progress value should be greater than 100', () => {
        component.progreso = 50;
        component.cambiarValor(5);
        expect(component.progreso).toBeLessThanOrEqual(55);
    });
})