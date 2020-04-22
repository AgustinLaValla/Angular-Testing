import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

   getMedicos() { 
     return this.http.get('...').pipe(map((resp) =>resp['medicos']));
   };
}
