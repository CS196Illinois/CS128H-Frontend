import { Component, OnInit } from "@angular/core";
import * as data from "../../../assets/lectures.json";
import {
  faChalkboard,
  faVideo,
  faCode,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-lectures-table",
  templateUrl: "./lectures-table.component.html",
  styleUrls: ["./lectures-table.component.scss"]
})
export class LecturesTableComponent implements OnInit {
  lecture = data.lectures[0];
  lectureVideo = [{
  }];
  faChalkboard = faChalkboard;
  faVideo = faVideo;
  faCode = faCode;
  faTimes = faTimes;

  changeLecture(lecture) {
    this.lecture = lecture;
    this.populate(lecture);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.populate(data.lectures[0]);
  }

  populate(lecture) {
    for (let i = 0; i < lecture.video.length; i++) {
      this.lectureVideo.push({
        title: lecture.video[i].title,
        link: this.sanitizer.bypassSecurityTrustResourceUrl(lecture.video[i].link)
      });
      console.log(this.lectureVideo);
    }
  }
}
