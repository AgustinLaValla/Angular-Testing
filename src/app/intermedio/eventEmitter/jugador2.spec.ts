import { Jugardor2 } from './jugador2'

describe('Pruebas de emisión de eventos', () => {
    let jugador:Jugardor2;
    beforeEach( () => jugador = new Jugardor2() );
    it('Should emit an event when the player receives damage', () => {
        let newHp = 0;
        jugador.hpCambia.subscribe(hp => newHp = hp);
        jugador.recibeDanio(1000);

        expect(newHp).toBe(0);
    });

    it('Should emit an event when the player receives damage and, if it is less than 100, stay alive', () => {
        let newHp = 0;
        jugador.hpCambia.subscribe(hp => newHp = hp);
        jugador.recibeDanio(80);

        expect(newHp).toBe(20);
    });
})