import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./pages/home/home.component";
import { ResourcesComponent } from "./pages/resources/resources.component";
import { StaffComponent } from "./pages/staff/staff.component";
import { LecturesTableComponent } from "./components/lectures-table/lectures-table.component";
import { PersonComponent } from "./components/person/person.component";
import { GradesComponent } from "./pages/grades/grades.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "./services/login.service";
import { GradesService } from "./services/grades.service";
import { LecturesComponent } from './pages/lectures/lectures.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule, MatMenuModule } from "@angular/material";
import { HofComponent } from "./pages/hof/hof.component";
import {MatTableModule} from '@angular/material/table';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MatCardModule } from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { AdminComponent } from './pages/admin/admin/admin.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "staff", component: StaffComponent },
  { path: "grades", component: GradesComponent },
  { path: "lectures", component: LecturesComponent},
  { path: "hof", component: HofComponent},
  { path: "schedule", component: ScheduleComponent},
  { path: "admin/info/v1", component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ResourcesComponent,
    StaffComponent,
    LecturesTableComponent,
    PersonComponent,
    GradesComponent,
    LecturesComponent,
    HofComponent,
    ScheduleComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatTreeModule,
    MatCardModule
    // MatTreeNestedDataSource
  ],
  providers: [LoginService, GradesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
