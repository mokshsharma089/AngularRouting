import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  name:string;
  length:number;
  constructor(private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // below one also works
    // this.name = this.route.snapshot.paramMap.get('name'); 
    this.route.paramMap.
    subscribe((params: ParamMap)=>{
      this.name=params.get('name');
    });
  }
  goHome(){
    this.router.navigate(['']);
  }
}
