import { Component, OnInit, Input } from "@angular/core";
import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() bio: string;
  @Input() technical_area: string;
  @Input() language: string;
  split_technical_areas;
  split_languages;

  constructor() {}
  ngOnInit() {
    this.split_technical_areas = this.technical_area?.split(",") || [];
    this.split_languages = this.language?.split(",") || [];
    this.split_languages = this.split_languages.map((lang) => lang.trim());
    this.split_technical_areas = this.split_technical_areas.map((area) =>
      area.trim(),
    );
  }
}
