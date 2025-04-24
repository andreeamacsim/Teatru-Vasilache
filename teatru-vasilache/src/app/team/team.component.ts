import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamMembers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTeamMembers();
  }

  fetchTeamMembers(): void {
    this.http.get<any[]>('http://localhost:3001/api/team')
      .subscribe(
        (data) => {
          this.teamMembers = data;
        },
        (error) => {
          console.error('Error fetching team members', error);
        }
      );
  }
}
