import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {
  @Input() mostrar: boolean = false;
  mensaje!:string;
  detalles:any|[]=[];
  datosCompletos!:Observable<any>;
  constructor(private dataService:DataService) { }

  async ngOnInit() {
    await this.getDataDetalles();
    this.sendUrl();
  }
  async getDataDetalles(){
    await this.dataService.detallePokemon.subscribe((data:any)=>{
      this.mensaje=data
     })
  }
  sendUrl() {
    console.log('mensaje',(JSON.stringify(this.mensaje) ));
     this.datosCompletos=this.dataService.getDetalle(this.mensaje)
     this.datosCompletos.subscribe((r:any)=>{
      console.log(r);
      
     })
     console.log('mensaje',this.datosCompletos);
    
  }
  
  
  ocultar() {
    this.mostrar = false;
  }

}
