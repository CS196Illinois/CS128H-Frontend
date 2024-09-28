import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormGroup, UntypedFormControl } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { CommonModule } from "@angular/common";
import { StaffService } from "src/app/services/staff.service";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-staff-profile-dashboard",
  templateUrl: "./staff-profile-dashboard.component.html",
  styleUrls: ["./staff-profile-dashboard.component.scss"],
})
export class StaffProfileDashboardComponent implements OnInit {
  profile = null;
  isSubmit;
  imgfile;
  name = new UntypedFormControl("");
  bio = new UntypedFormControl("");
  technical_areas = new UntypedFormControl("");
  languages = new UntypedFormControl("");
  picture = new UntypedFormControl("");
  pictureSource: string;
  // loadProfile() {
  //   let profileData = localStorage.getItem('profile-data')
  //   if (profileData) {
  //     this.profile = JSON.parse(profileData)
  //   }

  //   this.isSubmit = profileData
  // }

  setPictureSource() {
    let id = this.name.value.split(" ");
    for (let i = 0; i < id.length; i++) {
      id[i] = id[i][0].toUpperCase() + id[i].substr(1);
    }
    this.pictureSource = id.join("");
  }

  onChange(event) {
    console.log("TEST!");
    var reader = new FileReader();
    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imgfile = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]); // read file as data url
  }

  setProfile() {
    // this.setPictureSource();
    // let profileData = { 'name': this.name.value, 'bio': this.bio.value, 'technical_areas': this.technical_areas.value, 'languages': this.languages.value, 'picture': this.imgfile }
    // localStorage.setItem('profile-data', JSON.stringify(profileData));
    // this.loadProfile()
    if (!this.imgfile) this.imgfile = "";
    this.profile = {
      name: this.name.value,
      bio: this.bio.value,
      technical_areas: this.technical_areas.value,
      languages: this.languages.value,
      picture: this.imgfile,
    };
  }
  submitProfile() {
    // TODO: do some stuff to post profile-data to backend and persist in DB
    console.log("sending staff profile data to DB!");
    this.setProfile();
    this.StaffService.submitProfile(this.profile);
    localStorage.removeItem("profile-data");
    this.ref.detectChanges();
  }
  constructor(
    private sanitizer: DomSanitizer,
    private StaffService: StaffService,
    private LoginService: LoginService,
    private ref: ChangeDetectorRef,
  ) {}
  ngOnInit() {
    this.StaffService.getStaffProfile().subscribe((staff) => {
      this.profile = {
        name: staff["Name"],
        bio: staff["Bio"],
        technical_areas: staff["TechnicalAreas"],
        languages: staff["Languages"],
        picture: staff["Picture"],
      };
      this.ref.detectChanges();
    });
  }
}
