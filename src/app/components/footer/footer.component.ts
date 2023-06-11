import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() componentName:string|any;
  constructor(private route:ActivatedRoute,private router:Router) {
    
  }

 ngOnInit(): void {
  this.componentName = this.router.routerState.snapshot.root.component;
  console.log(this.componentName,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
   console.log('estas ACA: ', this.componentName);
  }

}
