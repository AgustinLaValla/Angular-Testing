import { Jugador } from "./clase";

describe('Prueba de clases', () => {
    let jugador = new Jugador();
    beforeEach(() => jugador = new Jugador());

    it('Should return 0 if the damage obtained is greather than hp', () => {
        const resp = jugador.recibeDanio(120)
        expect(resp).toBe(0);
    });
    it('Should return 80 if the damage received is 20', () => {
        const resp = jugador.recibeDanio(20)
        expect(resp).toBe(80);
    });
    it('Should return 50 if the damage received is 50', () => {
        
        const resp = jugador.recibeDanio(50)
        expect(resp).toBe(50);
    });
});