import { incrementar } from "./numeros";

describe('Pruebas de números', () => {

    it('Should returns a value of 100 if the argument sent is greater than 100', () => {
        const resp = incrementar(120);
        expect(resp).toBe(100);
    });

    it('Should return a value less or equal than 100 if the argument sent is minor than 100', () => {
        const resp = incrementar(95);
        expect(resp).toBeLessThanOrEqual(100);
    });
    it('Should return the value sent plus 1 if the argument is less than 100', () => {
        const resp = incrementar(95)
        expect(resp).toBe(96)
    })

    it('Should return the sum of two values', () => {
        const resp = incrementar(50);
        expect( typeof resp ).toBe('number');
     });
});