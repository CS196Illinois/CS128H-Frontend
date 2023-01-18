import { Component, OnInit } from "@angular/core";
import { StaffService } from "src/app/services/staff.service";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
  constructor(private StaffService: StaffService) { }
  staff = null;
  ngOnInit() {
    this.StaffService.getStaffProfile(true).subscribe((staff) => {
      this.staff = staff['staff']
      console.log("HERE!" + this.staff[0].Name);
    })
  }
}
