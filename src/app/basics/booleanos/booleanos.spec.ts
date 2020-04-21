import { userLogged, isAdmin } from "./booleanos"

describe('Pruebas booleanas', () => {
    it('Should return a boolean value', () => {
        const resp = userLogged();
        expect(typeof resp).toBe('boolean');
    });
    it('Should return true', () => {
        const resp = userLogged();
        expect(resp).toBeTruthy();
    });
    it('Should return false', () => {
        const resp = isAdmin();
        expect(resp).toBeFalsy();
    });
});