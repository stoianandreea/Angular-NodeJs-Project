import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private url: string = environment.url;

  public httpOptionsPrivate = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    }),
  };

  public httpOptionsPublic = {
    headers: new HttpHeaders({ 
      "Content-Type": "application/json" 
    }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformID: Object) { }

  getToken() {
    return localStorage.getItem("token");
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
      withCredentials: false,
    }
  }

  register(data: any): Observable<any> {
    return this.http.post(this.url +'users/register', data, this.getHeaders())
      .pipe(
        tap((response) => console.log(response)),
        catchError(this.handleError('register'))
      );
  }

  login(user) {
    return this.http
      .post(this.url + 'users/login', user, this.httpOptionsPublic)
      .pipe(
        tap((res: any) => {
          if (res && res.token) {
            localStorage.setItem('token', res.token);
          }
        }),
        catchError(this.handleError('login'))
      );
  }

  logout() {
    if (isPlatformBrowser(this.platformID)) {
      localStorage.removeItem("token");
    }
    this.router.navigate(["/login"]);
  }

  getAllUsers() {
    return this.http
      .get(this.url + "users/userslist", this.httpOptionsPrivate)
      .pipe(catchError(this.handleError("getAllUsers")));
  }

  getAllJewellery() {
    return this.http
      .get(this.url + "products/jewellery", this.httpOptionsPrivate)
      .pipe(catchError(this.handleError("getAllJewellery")));
  }

  getJewelleryById(productId) {
    return this.http
      .get(`${this.url + "products/jewelleryDetails"}/${productId}`)
      .pipe(catchError(this.handleError("getJewelleryDetails(productId)")));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      if (error.status == 401) {
        console.log("Nu mai ai acces!");
      }
      return of(result as T);
    }
  }
}