import { mensaje } from "./string";

describe('Pruebas de strings', () => { //Sirve para agrupar pruebas
    it('Debe de regresar un string', ()=> {//Para establecer una prueba
        const resp = mensaje('Agustín');
        expect( typeof resp).toBe('string');
    }); 
    it('Debe de retornar un saludo con el nombr enviado', ()=> {
        const nombre = 'Agustín'
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    }); 
}); 


