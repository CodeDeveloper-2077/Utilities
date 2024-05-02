import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/core/services/repository.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  public claims: Array<any> = [];

  constructor(private readonly repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  private getClaims = () => {
    this.repositoryService.getClaims('api/apartment/privacy').subscribe(
      res => this.claims = res as []
    );
  }
}
