import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/views/login/login.component';
import { InductionComponent } from './components/views/induction/induction.component';
import { AssessmentComponent } from './components/views/assessment/assessment.component';
import { AdminComponent } from './components/views/admin/admin.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { EmployeeSearchComponent } from './components/views/employee-search/employee-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InductionComponent,
    AssessmentComponent,
    AdminComponent,
    PageNotFoundComponent,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
