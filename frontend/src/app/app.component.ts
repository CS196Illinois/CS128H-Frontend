import { ChangeDetectorRef, Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "website2020";

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
