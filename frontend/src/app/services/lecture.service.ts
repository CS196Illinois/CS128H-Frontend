import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { LoginService } from "./login.service";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LectureService {
  lectures = new ReplaySubject<JSON>(1);
  user: gapi.auth2.GoogleUser;
  constructor(
    private http: HttpClient,
    private LoginService: LoginService,
  ) {
    this.LoginService.observable().subscribe((user) => {
      this.user = user;
      // sign in
      if (this.user) this.getLectures();
      // sign out
      if (!this.user) this.lectures.next(null);
    });
  }

  public getLectures(): Observable<JSON> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    this.http
      .get<JSON>(
        "https://cs196.cs.illinois.edu/wsgi/api/get/128Lectures",
        httpOptions,
      )
      .subscribe((res) => {
        this.lectures.next(res);
      });
    return this.lectures.asObservable();
  }

  public submit(lectures) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    console.log("SENDING!!");
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    console.log(lectures);
    this.http
      .post(
        "https://cs196.cs.illinois.edu/wsgi/api/post/Add128Lectures",
        lectures,
        httpOptions,
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  public delete(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token,
      }),
    };
    // deployment endpoint: https://cs196.cs.illinois.edu/wsgi/api
    let body = { LectureID: id };
    this.http
      .post(
        "https://cs196.cs.illinois.edu/wsgi/api/post/Delete128Lectures",
        body,
        httpOptions,
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
