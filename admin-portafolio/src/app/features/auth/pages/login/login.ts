import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { AuthApiService } from '../../services/auth-api.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  model = {
    email: '',
    password: ''
  };

  public constructor(
    private authService: AuthService,
    private authApi: AuthApiService,
    private router: Router,
    private toastr: ToastrService
  ) {

  }


  login() {


    this.authApi.login(this.model).subscribe({
      next: (res) => {
        this.authService.setToken(res.token);
        this.router.navigate(['/dashboard']);
        this.toastr.success('Inicio de sesión exitoso', 'Éxito');
      },
      error: (err) => {
        this.toastr.error('Error en el inicio de sesión', 'Error');
      },
      complete: () => {

      }
    });
  }
}
