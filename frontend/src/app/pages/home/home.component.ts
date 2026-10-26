import { Component } from "@angular/core";
import { Lecture, ScheduleItem, longDate, publishedLectures, shortDate, upcomingItems } from "../../course-data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  upcoming: ScheduleItem[] = upcomingItems(5);
  private published = publishedLectures();
  latest: Lecture | undefined = this.published[this.published.length - 1];
  short = shortDate;
  long = longDate;
}
