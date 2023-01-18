import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  user: gapi.auth2.GoogleUser;
  staffProfile = new ReplaySubject<JSON>(1);
  staff = new ReplaySubject<JSON>(1);
  status = new ReplaySubject<JSON>(1)

  constructor(private http: HttpClient, private LoginService: LoginService) {
    this.LoginService.observable().subscribe((user) => {
      this.user = user;
      // sign in
      if (this.user) this.getStaffProfile();
      // sign out
      if (!this.user) this.staffProfile.next(null);
    });
  }

  public getStatus() {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    this.http
      .get<JSON>(
        "http://127.0.0.1:5000/api/get/get128Status",
        httpOptions
      ).subscribe((res) => {
        this.status.next(res)
      });
    return this.status.asObservable()
  }

  public addStaff(staffObj: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    this.http
      .post(
        "http://127.0.0.1:5000/api/post/add128Staff",
        staffObj,
        httpOptions
      ).subscribe((res) => {
        console.log(res)
      });
  }

  public delStaff(email: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    this.http
      .post(
        "http://127.0.0.1:5000/api/post/del128Staff",
        email,
        httpOptions
      ).subscribe((res) => {
        console.log(res)
      });
  }

  public getStaff(): Observable<JSON> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    this.http
      .get<JSON>(
        "http://127.0.0.1:5000/api/get/get128Staff",
        httpOptions
      ).subscribe((res) => {
        this.staff.next(res)
      });
    return this.staff.asObservable()
  }

  public getStaffProfile(all = false): Observable<JSON> {
    if (!all) {
      if (!this.user) {
        return this.staffProfile.asObservable()
      }
      const email = this.user.getBasicProfile().getEmail()
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: "application/json",
          "Content-Type": "application/json",
          email: email,
        }),
      };
      // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
      this.http
        .get<JSON>(
          "http://127.0.0.1:5000/api/get/128/GetStaffProfile",
          httpOptions
        ).subscribe((res) => {
          console.log("getting staff object: " + JSON.stringify(res))
          this.staffProfile.next(res);
        });
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: "application/json",
          "Content-Type": "application/json"
        }),
      };
      this.http
        .get<JSON>(
          "http://127.0.0.1:5000/api/get/128/GetAllStaffProfile",
          httpOptions
        ).subscribe((res) => {
          console.log(res)
          this.staffProfile.next(res);
        });
    }
    return this.staffProfile.asObservable();
  }

  public submitProfile(staffObj: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    this.http
      .post(
        "http://127.0.0.1:5000/api/post/128/PostStaff",
        staffObj,
        httpOptions
      ).subscribe((res) => {
        console.log(res)
      });
  }
}
