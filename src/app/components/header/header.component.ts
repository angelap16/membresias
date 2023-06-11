import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any;
  componentName:string|any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.componentName=this.router.component?.name;
    this.user=JSON.parse(localStorage.getItem('usuario')!)
    console.log('estas aca: ', this.componentName);
  }


}
