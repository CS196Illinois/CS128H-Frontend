import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";

@Component({
  selector: "app-grades",
  templateUrl: "./grades.component.html",
  styleUrls: ["./grades.component.scss"],
})
export class GradesComponent implements OnInit {
  grades;
  final_grade;
  FinalGrade;
  hw_grades = [];
  mp_grades = [];
  project_grades = [];
  name;
  flag: boolean = false;
  constructor(private ref: ChangeDetectorRef, private NgZone: NgZone) {}
  isSignedIn: boolean = false;
  isIllini: boolean = true;
  ngOnInit() {}
}
