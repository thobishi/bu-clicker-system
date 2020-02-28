import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/views/login/login.component';
import { MainComponent } from './components/views/main/main.component';
import { EmployeeSearchComponent } from './components/views/employee-search/employee-search.component';
import { InductionComponent } from './components/views/induction/induction.component';
import { AssessmentComponent } from './components/views/assessment/assessment.component';
import { AdminComponent } from './components/views/admin/admin.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { MainMenuComponent } from './components/views/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MainMenuComponent },
      { path: 'induction', component: InductionComponent },
      { path: 'assessment', component: AssessmentComponent }
    ]
  },
  { path: 'employee-search', component: EmployeeSearchComponent},
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
