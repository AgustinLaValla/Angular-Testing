import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

//INTEGRATION TESTS
describe('MedicoComponent', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({ //Testing module configuration
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance; // Intence of component
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('Should return doctor´s name', () => {
        const nombre = 'Juan José'
        const resp = component.saludarMedico(nombre);
        expect(resp).toContain(nombre);
    });

    it('Should call the service', () => {

    })

});