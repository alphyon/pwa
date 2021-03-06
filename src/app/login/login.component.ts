import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) {}
    ngOnInit() { }

    login() {
        this.auth.login().then(console.log);
    }

}
