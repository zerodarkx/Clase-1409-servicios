import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {


  usuarios = [
    {
      nombre: "Julio",
      edad: 29,
      hobby: "levantar el codo"
    },
    {
      nombre: "Camilo",
      edad: 24,
      hobby: "Jugar"
    }
  ]

  constructor(
    private http :HttpClient
  ) { }

  servicioSaludar(nombre :string){
    console.log("hola" + nombre);
  }

  getUsuario(){
    return this.usuarios;
  }

  getPersonajes(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
