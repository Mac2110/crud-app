import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../DataHub/about/about.component';
import { AuthGuard } from '../DataHub/auth.guard';
import { ContactsComponent } from '../DataHub/contacts/contacts.component';
import { CreateComponent } from '../DataHub/create/create.component';
import { EditComponent } from '../DataHub/edit/edit.component';
import { HomeComponent } from '../DataHub/home/home.component';
import { PageNotFoundComponent } from '../DataHub/page-not-found/page-not-found.component';
import { ResumeComponent } from '../DataHub/resume/resume.component';

const routes: Routes = [
 {path:"Datahub/home",canActivate:[AuthGuard],component:HomeComponent},
 {path:"Datahub/create",canActivate:[AuthGuard],component:CreateComponent},
 {path:"Datahub/edit/:id",component:EditComponent},
 {path:"Datahub/about",canActivate:[AuthGuard],component:AboutComponent},
 {path:"Datahub/resume",canActivate:[AuthGuard],component:ResumeComponent},
 {path:"Datahub/contacts",canActivate:[AuthGuard],component:ContactsComponent},
 {path:"**",canActivate:[AuthGuard], component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataHubRoutingModule { }
