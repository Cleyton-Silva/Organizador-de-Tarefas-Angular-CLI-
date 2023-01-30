import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      console.log('Login efetuado: $(result)');

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }

  }

}
