import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,SearchComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  boardData: any;
  categoryHeaderColor: string = '';
  categoryBackgroundColor: string = '';
  categoryLinkColor: string = '';
  enableSearch: string = '';

  constructor(private DataService: DataServiceService) {}

  ngOnInit() {
    this.DataService.getBoardData().subscribe(data => {
      this.boardData = data;
      console.log(this.boardData);

      const settings = this.boardData?.['quickdash-settings']?.[0];
      if (settings && settings.theme) {
        this.categoryHeaderColor = settings.theme['category-header-color'];
        this.categoryBackgroundColor = settings.theme['category-background-color'];
        this.categoryLinkColor = settings.theme['category-link-color'];
        this.enableSearch = settings.search['enabled'];
      }
    });
  }

}
