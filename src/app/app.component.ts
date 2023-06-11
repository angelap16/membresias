import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appMembresias';
  componentName:any;
  constructor(private route:ActivatedRoute,private router:Router){
    this.componentName = this.router.routerState.snapshot.root.component;
    console.log(this.componentName,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    this.componentName=this.route.component?.name;
  }
  
}
