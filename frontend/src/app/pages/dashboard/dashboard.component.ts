import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { LecturesComponent } from "../lectures/lectures.component";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormGroup, UntypedFormControl } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { CommonModule } from "@angular/common";
import { LectureService } from "src/app/services/lecture.service";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { throwToolbarMixedModesError } from "@angular/material/toolbar";
import { StaffProfileDashboardComponent } from "./staff-profile-dashboard/staff-profile-dashboard.component";
import { LoginService } from "src/app/services/login.service";
import { StaffDashboardComponent } from "./staff-dashboard/staff-dashboard.component";
import { ActivatedRoute, Router } from "@angular/router";
import { StaffService } from "src/app/services/staff.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  view = 0; // 0 = profile view; 1 = lecture view
  lecture = null;
  isSubmit = null;
  tableView = true;
  lectureData = [];
  lectureStringify;
  title = new UntypedFormControl("");
  slide = new UntypedFormControl("");
  link = new UntypedFormControl("");
  comment = new UntypedFormControl("");
  // TODO: Implement authentication for dashboard
  user: gapi.auth2.GoogleUser;
  isStaff: boolean = false;
  netid;
  status = 0;

  refreshComp() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["./"], {
      relativeTo: this.route,
    });
  }

  setView(view: number) {
    this.view = view;
    localStorage.setItem("view", String(view));
    console.log("View is set to:" + typeof view + view);
  }

  getNewLectureData() {
    this.lectureData.push({
      LectureID: this.lectureData.length,
      Title: this.title.value,
      Slide: this.slide.value,
      Link: this.getVideoLink(this.link.value),
      Comment: this.comment.value,
    });
    this.lectureStringify = JSON.stringify(this.lectureData);
  }

  clearForm() {
    this.title.setValue("");
    this.slide.setValue("");
    this.link.setValue("");
    this.comment.setValue("");
  }

  deleteLecturePrompt(id) {
    let del = confirm(
      "You are trying to delete an old lecture, are you sure you want to delete it?",
    );
    if (del) {
      this.lectureData.splice(id, 1);
      for (let i = id; i < this.lectureData.length; ++i) {
        this.lectureData[i]["LectureID"] -= 1;
      }
      console.log("UPDATED LECTURE: " + JSON.stringify(this.lectureData));
      this.LectureService.submit(this.lectureData);
      this.ref.detectChanges();
    }
  }

  getVideoLink(text) {
    if (!text.includes("http")) {
      var intro = "http://";
      text = intro.concat(text);
    }
    // regex from http://stackoverflow.com/a/5831191/1614967
    var re =
      /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)[?=&+%\w.-]*/gi;
    var id = text.replace(re, "$1");
    if (id.includes("#")) {
      id = id.split("#")[0];
    }
    var starting_url = "https://youtube.com/embed/";
    return starting_url.concat(id);
  }

  toggleTableView() {
    if (this.tableView) {
      this.getNewLectureData();
      console.log(this.lectureData);
      this.tableView = false;
    } else {
      this.lectureData.pop();
      this.tableView = true;
    }
    this.isSubmit = null;
    this.ref.detectChanges();
  }

  submitLecturePrompt() {
    // TODO: do some stuff to post lecture-data to backend and persist in DB
    if (this.title.value && this.link.value) {
      let submit = confirm("Are you sure you want to save your change?");
      if (submit) {
        this.getNewLectureData();
        console.log(this.lectureData);
        this.LectureService.submit(JSON.stringify(this.lectureData));
        this.isSubmit = this.lecture;
        this.clearForm();
        this.ref.detectChanges();
      }
    } else {
      window.alert(
        "Title and Link fields are required. Please fill them in before submitting!",
      );
    }
  }

  constructor(
    private sanitizer: DomSanitizer,
    private LectureService: LectureService,
    private LoginService: LoginService,
    private ref: ChangeDetectorRef,
    private NgZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private StaffService: StaffService,
  ) {}

  ngOnInit() {
    this.LoginService.observable().subscribe((user) => {
      this.user = user;
      if (this.user == null) {
        this.ref.detectChanges();
        return;
      }
      this.StaffService.getStatus().subscribe((status) => {
        this.status = status["status"];
        this.ref.detectChanges();
      });

      const email = this.user.getBasicProfile().getEmail();
      this.netid = email.substring(0, email.indexOf("@"));
      this.LectureService.getLectures().subscribe((data) => {
        if (data["Lectures"].length) {
          this.lectureData = data["Lectures"];
          this.lectureStringify = JSON.stringify(this.lectureData);
          console.log(this.lectureData);
          this.ref.detectChanges();
        } else {
          console.log(data);
          this.ref.detectChanges();
        }
      });
    });
    const view = localStorage.getItem("view");
    if (view) {
      this.view = parseInt(view);
    }
  }
}
