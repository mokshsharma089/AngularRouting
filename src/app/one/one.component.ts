import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  constructor(  private router: Router) { }

  ngOnInit(): void {
  }
  goHome(){
    this.router.navigate(['']);
  }
  goBack() {
    window.history.back();
  }
  goTo2(){
    this.router.navigate(['/2']);
  }
  goTo2WithName(name:string){
    this.router.navigate(['/2',name]);
  }

}
