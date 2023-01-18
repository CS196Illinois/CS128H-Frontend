import { Component, OnInit, NgZone, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { LectureService } from "src/app/services/lecture.service";

@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.scss"],
})
export class LecturesComponent implements OnInit {
  @Input() lectureData: string = null;
  lectures = null;
  currLecture;
  constructor(private sanitizer: DomSanitizer, private NgZone: NgZone, private LectureService: LectureService) { }

  ngOnInit() {

    if (this.lectureData) {
      this.lectures = JSON.parse(this.lectureData)
      for (let i = 0; i < this.lectures.length; i++) {
        this.lectures[i].Link = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.lectures[i].Link
        )
      }
      // this.populate(data.lectures[data.lectures.length-1]);
      this.changeLecture(this.lectures.length - 1);
    } else {
      this.LectureService.getLectures().subscribe((data) => {
        console.log(data)
        this.lectures = data['Lectures']
        for (let i = 0; i < this.lectures.length; i++) {
          this.lectures[i].Link = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.lectures[i].Link
          )
        }
        // this.populate(data.lectures[data.lectures.length-1]);
        this.changeLecture(this.lectures.length - 1);
      })
    }

  }

  changeLecture(id: number) {
    this.NgZone.run(() => {
      console.log(this.lectures[id])
      this.currLecture = this.lectures[id];
    });
  }
}
