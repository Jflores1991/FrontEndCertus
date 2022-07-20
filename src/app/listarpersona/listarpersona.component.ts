import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-listarpersona',
  templateUrl: './listarpersona.component.html',
  styleUrls: ['./listarpersona.component.css']
})
export class ListarpersonaComponent implements OnInit {

  personas:Persona [];

  constructor(private personaservice: PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  private obtenerPersonas (){
    this.personaservice.obtenerListaPersonas().subscribe(dato => {
        this.personas=dato;
    });
  }

}
