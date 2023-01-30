import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  Account = {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit() {

  }

  onsubmit() {

  }

};
