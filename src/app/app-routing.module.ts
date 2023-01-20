import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/studentlogin/studentlogin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/studentregister/studentregister.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { StudentupdateComponent } from './components/studentupdate/studentupdate.component';
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

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'studentregister', component: RegisterComponent},
  {path:'studentlogin', component: LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'studentslist', component: StudentslistComponent},
  {path:'studentupdate/:id', component: StudentupdateComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admindashboard', component: AdmindashboardComponent},
  {path: 'teacherlogin', component: TeacherloginComponent},
  {path: 'teacherregister', component: TeacherregisterComponent },
  {path: 'studentdashboard', component: StudentdashboardComponent},
  {path: 'teacherdashboard', component: TeacherdashboardComponent},
  {path: 'teacherslist', component: TeacherslistComponent},
  {path: 'teacherupdate/:id', component: TeacherupdateComponent},
  {path: 'teacherprofile', component: TeacherprofileComponent },
  {path: 'addmaths', component: AddmathsComponent},
  {path: 'mathslist', component: MathslistComponent},
  {path: 'chatbox', component: ChatBoxComponent},
  {path: 'addbio', component: AddbioComponent},
  {path: 'biolist', component: BiolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
