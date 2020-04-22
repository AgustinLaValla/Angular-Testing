import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  public medicos: any[] = [];

  constructor(private medicoService:MedicoService) { }

  ngOnInit() { }

  saludarMedico(nombre:string) { 
    return `Hola ${nombre}`;
  };

  obtenerMedicos() { 
    this.medicoService.getMedicos().subscribe(medicos => this.medicos = medicos);
  };

};
