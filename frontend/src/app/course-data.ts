import scheduleData from "../assets/schedule.json";
import lectureData from "../assets/lectures.json";

export interface ScheduleItem {
  date: string; // YYYY-MM-DD, or "" when the item spans the week
  type: string;
  name: string;
  when?: string; // label used when there is no date, e.g. "Whole week"
}

export interface ScheduleWeek {
  label: string;
  start: string; // YYYY-MM-DD (Monday)
  items: ScheduleItem[];
}

export interface Lecture {
  LectureID: string;
  Number: number;
  Title: string;
  Date: string; // YYYY-MM-DD
  Presenter: string;
  Reading: string;
  Slide: string;
  Link: string;
  Comment: string;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function parseDate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function shortDate(s: string): string {
  const d = parseDate(s);
  return MONTHS[d.getMonth()] + " " + d.getDate();
}

export function longDate(s: string): string {
  const d = parseDate(s);
  return DAYS[d.getDay()] + ", " + MONTHS[d.getMonth()] + " " + d.getDate();
}

export function today(): Date {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

export const SCHEDULE: ScheduleWeek[] = scheduleData.weeks;

/** Lectures whose date has arrived. Future lectures stay hidden until their day. */
export function publishedLectures(): Lecture[] {
  const t = today();
  return (lectureData.lectures as Lecture[]).filter((l) => parseDate(l.Date) <= t);
}

/** The next n dated schedule items after today. */
export function upcomingItems(n: number): ScheduleItem[] {
  const t = today();
  const all: ScheduleItem[] = [];
  SCHEDULE.forEach((w) => w.items.forEach((i) => i.date && all.push(i)));
  return all.filter((i) => parseDate(i.date) > t).slice(0, n);
}
