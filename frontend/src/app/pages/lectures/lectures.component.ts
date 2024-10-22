import { Component, OnInit, NgZone, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import data from "../../../assets/lectures.json";
import { SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.scss"],
})
export class LecturesComponent implements OnInit {
  @Input() lectureData: string = null;
  lectures: {
    LectureID: string;
    Title: string;
    Date: string;
    Slide: string;
    Link: string | SafeResourceUrl;
    Comment: string;
  }[] = data["lectures"];
  currLecture;
  constructor(private sanitizer: DomSanitizer, private NgZone: NgZone) {}

  ngOnInit() {
    if (this.lectureData) {
      this.lectures = JSON.parse(this.lectureData);
      for (let i = 0; i < this.lectures.length; i++) {
        this.lectures[i].Link = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.lectures[i].Link as string
        );
      }
    }
  }

  changeLecture(id: number) {
    this.NgZone.run(() => {
      console.log(this.lectures[id]);
      this.currLecture = this.lectures[id];
    });
  }
}
