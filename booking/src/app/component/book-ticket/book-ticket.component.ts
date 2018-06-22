import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  title:string='';
  firstname: string='';
  surname: string='';
  Fromplace: string='';
  Toplace: string='';
  dateFrom:Date;
  dateTo:Date;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onbooking(){
    console.log(this.firstname);
    this.router.navigate(['/view'],{queryParams:{firstname:this.firstname,surname:this.surname,Fromplace:this.Fromplace,Toplace:this.Toplace,dateFrom:this.dateFrom,dateTo:this.dateTo,title:this.title}});

  }

}
