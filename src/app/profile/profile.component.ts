import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type ProfileType = {
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile?: ProfileType;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.http
      .get('https://graph.microsoft.com/v1.0/me')
      .subscribe((profile) => (this.profile = profile));
  }
}
