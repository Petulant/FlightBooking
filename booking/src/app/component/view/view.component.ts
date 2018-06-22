
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  title:'';
  firstname:'';
  surname:'';
  Fromplace: '';
  Toplace:'';
  dateFrom:'';
  dateTo:'';
  
  
 
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  
  this.route.queryParams.subscribe(params=>{
    this.title=params['title'];
    this.firstname=params['firstname'];
    this.surname=params['surname'];
    this. Fromplace=params['Fromplace'];
    this.Toplace=params['Toplace'];
    this.dateFrom=params['dateFrom'];
    this.dateTo=params['dateTo'];
    
    console.log(this.title);
    console.log(this.firstname);
    console.log(this.surname);
    console.log(this.Fromplace);
    console.log(this.Toplace);
    console.log(this.dateFrom);
    console.log(this.dateTo);
  
  
  });
}
}
