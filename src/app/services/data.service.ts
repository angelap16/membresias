import { Injectable } from '@angular/core';
import{BehaviorSubject}from 'rxjs';
import{HttpClient} from '@angular/common/http'
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datos:BehaviorSubject<any>=new BehaviorSubject<any>({})
  private detalle:BehaviorSubject<any>=new BehaviorSubject<any>({})
  apiUrl='https://pokeapi.co/api/v2/pokemon/';
  detalleUrl:any;

  constructor(private http:HttpClient) {
  }
 
  get getDatos(){
    return this.datos.asObservable()
  }
  set setDatos(data:any){
    this.datos.next(data)
  }
  get detallePokemon(){
    return this.detalle.asObservable()
  }

  set enviarDetalle(url:any){
    this.detalle.next(url)
  }
  getApi(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/")
  }
  obtenerinfo(){
    console.log('detalleUrl', this.detalleUrl);
    this.detallePokemon.subscribe((data:any)=>{
      this.detalleUrl=(data)
    })
  }
  getDetalle(dataUrl: string) {
    return this.http.get(dataUrl);
  }
  
  
  eliminarElemento(id: number) {
    const url = `${this.apiUrl}${id}/`;
    console.log('url',url);
    
    return this.http.delete(url);
  }
}
