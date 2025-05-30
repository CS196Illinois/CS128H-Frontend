import { Component, OnInit } from "@angular/core";
import data from "../../../assets/lectures.json";
import {
  faChalkboard,
  faVideo,
  faCode,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-lectures-table",
  templateUrl: "./lectures-table.component.html",
  styleUrls: ["./lectures-table.component.scss"],
})
export class LecturesTableComponent implements OnInit {
  lecture = data.lectures[0];
  lectureVideo = [{}];
  faChalkboard = faChalkboard;
  faVideo = faVideo;
  faCode = faCode;
  faTimes = faTimes;

  changeLecture(lecture) {
    this.lecture = lecture;
    // this.populate(lecture);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // this.populate(data.lectures[0]);
  }
}
