import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/studentlogin/studentlogin.component';
import { RegisterComponent } from './components/studentregister/studentregister.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/Student-crudauth.service';
import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { StudentupdateComponent } from './components/studentupdate/studentupdate.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { TeacherregisterComponent } from './components/teacherregister/teacherregister.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { TeacherslistComponent } from './components/teacherslist/teacherslist.component';
import { TeacherupdateComponent } from './components/teacherupdate/teacherupdate.component';
import { TeacherprofileComponent } from './components/teacherprofile/teacherprofile.component';
import { AddmathsComponent } from './components/addmaths/addmaths.component';
import { MathslistComponent } from './components/mathslist/mathslist.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { AddbioComponent } from './components/addbio/addbio.component';
import { BiolistComponent } from './components/biolist/biolist.component';
import { MathscrudComponent } from './components/mathscrud/mathscrud.component';
import { BiocrudComponent } from './components/biocrud/biocrud.component';
import { BioupdateComponent } from './components/bioupdate/bioupdate.component';
import { MathsupdateComponent } from './components/mathsupdate/mathsupdate.component';
import { AddartsComponent } from './components/addarts/addarts.component';
import { ArtslistComponent } from './components/artslist/artslist.component';
import { ArtscrudComponent } from './components/artscrud/artscrud.component';
import { ArtsupdateComponent } from './components/artsupdate/artsupdate.component';
import { AddcommerceComponent } from './components/addcommerce/addcommerce.component';
import { CommercelistComponent } from './components/commercelist/commercelist.component';
import { CommercecrudComponent } from './components/commercecrud/commercecrud.component';
import { CommerceupdateComponent } from './components/commerceupdate/commerceupdate.component';
import { AddtechComponent } from './components/addtech/addtech.component';
import { TechlistComponent } from './components/techlist/techlist.component';

const appRoutes : Routes = [
  // {path:'', component: HomeComponent},
  // {path:'register', component: RegisterComponent},
  // {path:'login', component: LoginComponent},
  // {path:'dashboard', component: DashboardComponent},
  // {path:'profile', component: ProfileComponent},  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    StudentslistComponent,
    StudentupdateComponent,
    FooterComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    TeacherloginComponent,
    TeacherregisterComponent,
    StudentdashboardComponent,
    TeacherdashboardComponent,
    TeacherslistComponent,
    TeacherupdateComponent,
    TeacherprofileComponent,
    AddmathsComponent,
    MathslistComponent,
    ChatBoxComponent,
    AddbioComponent,
    BiolistComponent,
    MathscrudComponent,
    BiocrudComponent,
    BioupdateComponent,
    MathsupdateComponent,
    AddartsComponent,
    ArtslistComponent,
    ArtscrudComponent,
    ArtsupdateComponent,
    AddcommerceComponent,
    CommercelistComponent,
    CommercecrudComponent,
    CommerceupdateComponent,
    AddtechComponent,
    TechlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    FlashMessagesModule,
    FontAwesomeModule
  ],
  providers: [ValidateService, AuthService, HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
