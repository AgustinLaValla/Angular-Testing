import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio)
    });


    it('Init: Should load doctors data', () => {
        const medicos = ['medico1','medico2', 'medico3']
        spyOn(servicio, 'getMedicos').and.callFake(() => from( [medicos] )); //Return fake data
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0)
    });

    it('Should call the service to add a doctor', () => {
        const spy = spyOn(servicio, 'agregarMedico').and.callFake(medico => empty());
        componente.agregarMedico();
        expect(spy).toHaveBeenCalled();
    });

    it('Should add new doctor to medicosArray', () =>{
        const medico = {id: 1, nombre: 'Juan'};
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Should return an error if the addition fails', () => {
        const error = 'Addition has failed';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));
        componente.agregarMedico()
        expect(componente.mensajeError.indexOf('failed')).toBeGreaterThanOrEqual(0);
    });

    it('Should call the service to delete a doctor', () =>{
        spyOn(window, 'confirm').and.returnValue(true);
        const id = '1'
        const spy = spyOn(servicio, 'borrarMedico').and.callFake(medico => empty());
        componente.borrarMedico(id)
        expect(spy).toHaveBeenCalledWith(id);
    });

    
    it('Should not call the service to delete a doctor', () =>{
        spyOn(window, 'confirm').and.returnValue(false);
        const id = '1'
        const spy = spyOn(servicio, 'borrarMedico').and.callFake(medico => empty());
        componente.borrarMedico(id)
        expect(spy).not.toHaveBeenCalledWith(id);
    });


});
