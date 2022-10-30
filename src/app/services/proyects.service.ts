import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Proyects } from './mock_proyects';
import { PROYECTS } from './mock_proyects';


@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  constructor() { }

  getProyects (): Observable<Proyects[]>{
    const proyects =of(PROYECTS)
    return proyects
  }
  getProyect(id:number):Observable<Proyects> {
    console.log(id);
    const proyect = PROYECTS.find(e => e.id ===id)!;
    return of(proyect)
  }
}
