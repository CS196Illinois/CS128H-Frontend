import { Component } from "@angular/core";
import { SCHEDULE, parseDate, shortDate, today } from "../../course-data";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent {
  weeks = SCHEDULE.map((w) => {
    const t = today();
    const start = parseDate(w.start);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    const weekPast = t >= end;
    return {
      label: w.label,
      startLabel: shortDate(w.start),
      isNow: t >= start && t < end,
      items: w.items.map((i) => ({
        type: i.type,
        name: i.name,
        dateLabel: i.date ? shortDate(i.date) : i.when ?? "",
        past: i.date ? parseDate(i.date) < t : weekPast,
      })),
    };
  });
}
