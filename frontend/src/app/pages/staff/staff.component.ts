import { Component, OnInit } from "@angular/core";
import { StaffService } from "src/app/services/staff.service";
import data from "../../../assets/staff.json";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
  constructor(private StaffService: StaffService) {}
  staff = data["staff"];
  ngOnInit() {
    this.StaffService.getStaffProfile(true).subscribe((staff) => {
      this.staff = this.staff;
      console.log("HERE!" + this.staff[0].Name);
    });
  }
}
