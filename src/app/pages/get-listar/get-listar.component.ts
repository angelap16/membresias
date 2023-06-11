import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-get-listar',
  templateUrl: './get-listar.component.html',
  styleUrls: ['./get-listar.component.scss']
})
export class GetListarComponent implements OnInit {

  constructor(private dataService:DataService) { }
  lista:any
  listaAux:any
  data:[]|any=[];
  searchText:any;
  apiUrl='https://pokeapi.co/api/v2/pokemon/';
  modal=false;
  mostrarModal: boolean = false;
  dataUrl:any|[]=[];
  ngOnInit(): void {
    this.obtenerDatos()
  }
  obtenerDatos(){
    this.dataService.getApi().subscribe((recive:any)=>{
      this.lista=recive;
      console.log('data lista antes',this.lista); 
      this.lista=this.lista.results;
      console.log(this.dataUrl);
      this.dataUrl=this.lista.url
      console.log('data lista',this.lista); 
      console.log(this.dataUrl);
      this.listaAux=this.data
    })
  }
  filtro(){
    if(this.searchText != ""){
      this.lista= this.lista.filter((f:any)=>f.name.includes(this.searchText));
    }else{
      this.lista = this.listaAux;
    }
  }
  deletePokemon(nombre:string){
    this.lista = this.lista.filter((f:any)=>f.name !=nombre);
  } 
  mostrarAlerta(data:any) {
    console.log('manuel', data);
    this.mostrarModal = true;
    console.log('mensaje alerta', data);
    this.dataService.enviarDetalle=data
  }
}
