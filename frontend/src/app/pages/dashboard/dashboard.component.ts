import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { LecturesComponent } from "../lectures/lectures.component";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormGroup, UntypedFormControl } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { CommonModule } from "@angular/common";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { throwToolbarMixedModesError } from "@angular/material/toolbar";
import { StaffProfileDashboardComponent } from "./staff-profile-dashboard/staff-profile-dashboard.component";
import { StaffDashboardComponent } from "./staff-dashboard/staff-dashboard.component";
import { ActivatedRoute, Router } from "@angular/router";

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

  constructor(
    private sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef,
    private NgZone: NgZone,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
}
