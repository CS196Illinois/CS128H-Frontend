import { Component, OnInit } from "@angular/core";
import data from "../../../assets/staff.json";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
  constructor() {}
  staff = data["staff"];
  ngOnInit() {}
}
