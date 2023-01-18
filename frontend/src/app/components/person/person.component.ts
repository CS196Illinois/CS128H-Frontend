import { Component, OnInit, Input } from "@angular/core";
import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() picture: string;
  @Input() bio: string;
  @Input() technical_area: string;
  @Input() language: string;
  split_technical_areas;
  split_languages;

  errorHandler(event) {
    console.log("errop!s" + this.name + this.picture + this.bio);
    console.log("errop!s")
    event.target.src = '../../../../../assets/staff_pictures/staff_picturesFA22' + this.picture + '.jpg';
  }
  constructor() {
  }
  ngOnInit() {
    // console.log("from person card!")
    // console.log(this.picture);
    if (!this.picture) {
      this.picture = '/assets/logo.png'
    }
    this.split_technical_areas = this.technical_area.split(',');
    this.split_languages = this.language.split(',');
    for (let language in this.split_languages) {
      language.trimLeft();
      language.trimRight();
    }
    for (let language in this.split_languages) {
      language.trimLeft();
      language.trimRight();
    }
  }
}
