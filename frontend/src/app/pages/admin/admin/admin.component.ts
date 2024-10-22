import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  name;
  isAdmin: boolean = false;
  constructor(private ref: ChangeDetectorRef, private NgZone: NgZone) {}

  ngOnInit() {}
}
