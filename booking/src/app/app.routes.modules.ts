import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { BookTicketComponent } from './component/book-ticket/book-ticket.component';

export const AppRoutes= [
    { path:'',redictTo:'Home' },
    {path:'view', component: ViewComponent},
    {path:'aboutus', component: AboutUsComponent},
    {path:'bookticket',component:BookTicketComponent},
    {path:'contact', component:ContactComponent },


];
