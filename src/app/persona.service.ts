import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Persona} from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL = "http://localhost:8080/ApiRest/persona";

  constructor(private httpClient : HttpClient) { }

    obtenerListaPersonas(): Observable<Persona[]>{
      return this.httpClient.get<Persona[]>(`${this.baseURL}`);
    }

    registrarPersona(persona:Persona): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`,persona);
    }

}
