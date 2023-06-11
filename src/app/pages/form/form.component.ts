import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form:FormGroup;
  formData:any;
  email=true;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private dataService:DataService,
  ) {
    this.form=formBuilder.group({
      nombre:'',
	    Apellido:'', 
	    correo:['',Validators.compose([Validators.required, Validators.email])],
	    fechAfiliacion:'',
	    Telefono:'',
	    sexo:'',
    })
   }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.form.value);
    this.formData=this.form.value
    let datos= localStorage.setItem('Formulario Data', JSON.stringify(this.formData))
    this.dataService.setDatos={nombre:this.formData['nombre'],apellido:this.formData['Apellido'],correo:this.formData['correo'],
    fechAfiliacion:this.formData['fechAfiliacion'], telefono: this.formData['Telefono'], sexo:this.formData['sexo']
    }
  }

}
