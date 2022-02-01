import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingComponent } from './booking/booking.component';
import { WeddingComponent } from './wedding/wedding.component';
import { DetailsComponent } from './details/details.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AloneplacesComponent } from './aloneplaces/aloneplaces.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes =[
  {path:'',component:HomeComponent},
  {path:'hauntedplace',component:AloneplacesComponent},
  {path:'booking',component:BookingComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BookingComponent,
    WeddingComponent,
    DetailsComponent,
    BlogComponent,
    ContactComponent,
    AloneplacesComponent,
    HomeComponent
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
