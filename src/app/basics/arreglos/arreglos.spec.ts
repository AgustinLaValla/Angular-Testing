import { obtenerRobots } from "./arreglos"

describe('Pruebas de arreglos', () => {
    it('Should return at least three robots', () => {
        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });
    it('Should has MegaMan and Jarvis', () => {
        const resp = obtenerRobots();
        expect(resp).toContain('MegaMan');
        expect(resp).toContain('Jarvis');
    });
});