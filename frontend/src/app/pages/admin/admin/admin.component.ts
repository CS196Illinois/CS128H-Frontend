import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { GradesService } from "src/app/services/grades.service";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  name;
  isAdmin: boolean = false;
  user: gapi.auth2.GoogleUser;
  constructor(
    private GradesService: GradesService,
    private LoginService: LoginService,
    private ref: ChangeDetectorRef,
    private NgZone: NgZone,
  ) {}

  ngOnInit() {
    this.LoginService.observable().subscribe((user) => {
      console.log(user.getBasicProfile().getEmail());
      if (
        user.getBasicProfile().getEmail() === "jonahlt2@illinois.edu" ||
        user.getBasicProfile().getEmail() === "weustis2@illinois.edu"
      ) {
        this.isAdmin = true;
        this.user = user;
        this.name = user.getBasicProfile().getGivenName();
        this.ref.detectChanges();
      }
    });
  }
}
