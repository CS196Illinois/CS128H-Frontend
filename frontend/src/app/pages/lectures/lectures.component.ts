import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Lecture, longDate, publishedLectures } from "../../course-data";

@Component({
  selector: "app-lectures",
  templateUrl: "./lectures.component.html",
  styleUrls: ["./lectures.component.scss"],
})
export class LecturesComponent implements OnInit {
  lectures: Lecture[] = publishedLectures();
  curr: Lecture | undefined;
  playlistUrl = "https://www.youtube.com/playlist?list=PLezlz_6l_jm3iMcZr1Nsf4bkVDruO-K4a";
  long = longDate;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const n = Number(params.get("n"));
      this.curr = this.lectures.find((l) => l.Number === n) ?? this.lectures[this.lectures.length - 1];
    });
  }

  select(n: number) {
    this.router.navigate([], { queryParams: { n }, replaceUrl: true });
  }
}
