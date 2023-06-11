import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  $data!:Observable<any>
  datos:any;
  listData:[]|any=[];
  estado:string="";
  fechaActual:any
  fechAfiliacion:any
  constructor(private dataService:DataService) {
  
    console.log(this.$data);
   }

  ngOnInit(): void {
    this.obtenerDatos()
    this.estadoVencimiento()
  }
  obtenerDatos(){
    this.$data=this.dataService.getDatos
    this.$data.subscribe((data:any)=>{
      this.listData.push(data)
      console.log(this.listData);
    })
   
    this.listData.forEach((element:any) => {
      this.fechAfiliacion=element.fechAfiliacion
      console.log('vence',this.fechAfiliacion);
      
    });
  }
  estadoVencimiento(){
    const fechaActual=new Date()
    const fechaAfiliacion = new Date(this.fechAfiliacion);
    const diasTranscurridos = Math.floor((fechaActual.getTime() - fechaAfiliacion.getTime()) / (1000 * 3600 * 24));
    console.log('dias transcurridos', diasTranscurridos);
    
    if (diasTranscurridos > 30 && this.fechAfiliacion !="") {
      this.estado = "VENCIDA";
    } else if(diasTranscurridos<30){
      this.estado = "VIGENTE";
    }else{
      this.estado="";
    }
  }
}
