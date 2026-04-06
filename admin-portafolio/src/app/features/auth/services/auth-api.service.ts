import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/enviroments/environment';
import { Observable } from 'rxjs';


interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}


@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  private http = inject(HttpClient);
  private api = environment.apiUrl;

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.api}/auth/login`,
      data
    );
  }

  register(data: RegisterRequest) {
    return this.http.post(`${this.api}/auth/register`, data);
  }

}
