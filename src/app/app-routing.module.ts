import { NgModule } from '@angular/core';
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
import { AddbioComponent } from './components/addbio/addbio.component';
import { BiolistComponent } from './components/biolist/biolist.component';
import { MathscrudComponent } from './components/mathscrud/mathscrud.component';
import { BiocrudComponent } from './components/biocrud/biocrud.component';
import { AddartsComponent } from './components/addarts/addarts.component';
import { ArtslistComponent } from './components/artslist/artslist.component';
import { ArtscrudComponent } from './components/artscrud/artscrud.component';
import { ArtsupdateComponent } from './components/artsupdate/artsupdate.component';
import { MathsupdateComponent } from './components/mathsupdate/mathsupdate.component';
import { BioupdateComponent } from './components/bioupdate/bioupdate.component';
import { AddcommerceComponent } from './components/addcommerce/addcommerce.component';
import { CommercelistComponent } from './components/commercelist/commercelist.component';
import { CommercecrudComponent } from './components/commercecrud/commercecrud.component';
import { CommerceupdateComponent } from './components/commerceupdate/commerceupdate.component';
import { AddtechComponent } from './components/addtech/addtech.component';
import { TechlistComponent } from './components/techlist/techlist.component';
import { TechcrudComponent } from './components/techcrud/techcrud.component';
import { TechupdateComponent } from './components/techupdate/techupdate.component';
import { AddresourceComponent } from './components/addresource/addresource.component';
import { ResourceslistComponent } from './components/resourceslist/resourceslist.component';
import { ResourcecrudComponent } from './components/resourcecrud/resourcecrud.component';
import { ResourceupdateComponent } from './components/resourceupdate/resourceupdate.component';
import { ChatAdminComponent } from './components/chat-admin/chat-admin.component';
import { ChatStudentComponent } from './components/chat-student/chat-student.component';
import { ChatTeacherComponent } from './components/chat-teacher/chat-teacher.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ContactuslistComponent } from './components/contactuslist/contactuslist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'studentregister', component: RegisterComponent},
  {path: 'studentlogin', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'studentslist', component: StudentslistComponent},
  {path: 'studentupdate/:id', component: StudentupdateComponent},
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
  {path: 'addbio', component: AddbioComponent},
  {path: 'biolist', component: BiolistComponent},
  {path: 'mathscrud', component: MathscrudComponent},
  {path: 'biocrud', component:BiocrudComponent},
  {path: 'addarts', component:AddartsComponent},
  {path: 'artslist', component:ArtslistComponent},
  {path: 'artscrud', component:ArtscrudComponent},
  {path: 'artsupdate/:id', component:ArtsupdateComponent},
  {path: 'mathsupdate/:id', component:MathsupdateComponent},
  {path: 'bioupdate/:id', component:BioupdateComponent},
  {path: 'addcommerce', component:AddcommerceComponent},
  {path: 'commercelist', component:CommercelistComponent},
  {path: 'commercecrud', component:CommercecrudComponent},
  {path: 'commerceupdate/:id', component:CommerceupdateComponent},
  {path: 'addtech', component:AddtechComponent},
  {path: 'techlist', component:TechlistComponent},
  {path: 'techcrud', component:TechcrudComponent},
  {path: 'techupdate/:id', component:TechupdateComponent},
  {path: 'addresources', component:AddresourceComponent},
  {path: 'resourceslist', component:ResourceslistComponent},
  {path: 'resourcescrud', component:ResourcecrudComponent},
  {path: 'resourceupdate/:id', component:ResourceupdateComponent},
  {path: 'chatadmin', component:ChatAdminComponent},
  {path: 'chatstudent', component:ChatStudentComponent},
  {path: 'chatteacher', component:ChatTeacherComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'contactuslist', component:ContactuslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
