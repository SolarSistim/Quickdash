import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { SearchComponent } from '../search/search.component';
import { MatTabsModule } from '@angular/material/tabs';

interface Tab {
  name: string;
  categories: {
category: any;
    name: string;
    items: { title: string; icon: string; link: string }[];
  }[];
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SearchComponent, MatTabsModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  boardData: any;
  categoryHeaderColor: string = '';
  categoryBackgroundColor: string = '';
  categoryLinkColor: string = '';
  enableSearch: boolean = false;
  tabs: Tab[] = [];
  activeTabId: string = '';

  constructor(private DataService: DataServiceService) {}

  ngOnInit() {
    this.DataService.getBoardData().subscribe(data => {
      this.boardData = data;
      console.log(this.boardData);

      const settings = this.boardData?.['quickdash-settings']?.[0];
      if (settings && settings.theme && settings.search) {
        this.categoryHeaderColor = settings.theme['category-header-color'];
        this.categoryBackgroundColor = settings.theme['category-background-color'];
        this.categoryLinkColor = settings.theme['category-link-color'];
        this.enableSearch = settings.search['enabled'] === true;
      }
      this.tabs = this.boardData?.tabs || [];
      if (this.tabs.length > 0) {
        this.activeTabId = this.generateTabId(this.tabs[0].name);
      }
    });
  }

  setActiveTab(tabName: string) {
    this.activeTabId = this.generateTabId(tabName);
  }
  generateTabId(tabName: string): string {
    return 'tab-' + tabName.toLowerCase().replace(/\s+/g, '-');
  }
}