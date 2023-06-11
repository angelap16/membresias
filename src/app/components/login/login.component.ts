import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup
  user:any;
  tipo=true;
  usuarioInvalido=false;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router) {
    this.formGroup=formBuilder.group({
      usuario:['',Validators.required],
      contraseña:['', Validators.required]
    })

   }
   
  ngOnInit(): void {
  }
  iniciarSesion(){
    this.user=this.formGroup.value
    localStorage.setItem('usuario',JSON.stringify(this.user))
    console.log('usuario', this.user);
    
    if(this.user.usuario=="angela"&& this.user.contraseña=="123456"){
      console.log('iniciando...');
      this.usuarioInvalido=false;
      this.router.navigate(['home']);
    }else{
      this.usuarioInvalido=true;
    }
  }

}
