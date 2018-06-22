import { AppRoutes } from './app.routes.modules';
import { AppPage } from './../../e2e/src/app.po';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import{RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { BookTicketComponent } from './component/book-ticket/book-ticket.component';



const appRoutes:Routes=[
  {path:'Home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'bookticket',component: BookTicketComponent},
  {path:'contact',component:ContactComponent},
  {path:'view',component:ViewComponent},
  {path:'',redirectTo: '/Home',pathMatch:'full'},
  //{path:'**',redirectTo: '/Home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    AboutUsComponent,
    ContactComponent,
    BookTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
