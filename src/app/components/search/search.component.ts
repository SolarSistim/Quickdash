import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataServiceService } from '../../services/data-service.service';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  boardData: any;
  searchButtonColor: string = '';
  searchButtonBorderColor: string = '';
  searchProvider: string = '';
  searchUrl: string = '';
  searchQuery: string = '';
  searchSuggestions: string[] = [];
  searchBarColor: string = '';
  auto: any;

  links: any[] = [];
  filteredLinks: any[] = [];

  myControl = new FormControl('');
  input: any;

  constructor(private DataService: DataServiceService) {}

  ngOnInit() {
    this.DataService.getBoardData().subscribe((data) => {
      this.boardData = data;
      const settings = this.boardData?.['quickdash-settings']?.[0];
      if (settings) {
        this.searchProvider = settings.search['search_provider'];
        this.searchUrl = settings.search['search_url'];
        this.searchBarColor = settings.search['search_bar_color'];
      }

      // Load links from the board data
      this.links = this.boardData?.links?.flatMap((category: any) => category.items) || [];
      this.filteredLinks = this.links;
    });

    // Setup observable for autocomplete filtering
    this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (value.length > 0) {
      return [this.generateSearchQuery(value)];
    }
    return [];
  }

  generateSearchQuery(query: string): string {
    return query;
  }

  generateSearchUrl(query: string): string {
    if (!query) {
      return '';  // or handle it in another way
    }
    const searchTerms = query.split(' ').join('+');
    return `${this.searchUrl}${searchTerms}`;
  }

  updateSearchSuggestions(query: string): void {
    if (query.length > 0) {
      this.searchSuggestions = [this.generateSearchQuery(query)];
    } else {
      this.searchSuggestions = [];
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedValue = event.option.value;
    if (selectedValue.startsWith('http')) {
      window.open(selectedValue, '_blank');
    } else {
      this.navigateToSearch(selectedValue);
    }
    this.resetSearch();
  }

  // Handle navigation to search result
  navigateToSearch(query: string): void {
    const url = this.generateSearchUrl(query);
    window.open(url, '_blank');
  }

  onLinkClick(link: string): void {
    console.log('Attempting to open the link:', link);  // Debugging
    if (link && link.trim() !== '') {
      window.open(link, '_blank');
    } else {
      console.warn('Attempted to open an invalid or empty link:', link);  // Warning for empty link
    }
  }

  // Filter the links based on user input
  filterLinks(query: string): void {
    if (query.length > 0) {
      this.filteredLinks = this.links.filter((link) =>
        link.title.toLowerCase().includes(query.toLowerCase())
      );
      console.log(this.filteredLinks);
    } else {
      this.filteredLinks = this.links;
    }
  }

  // Clear the filter and reset input
  clearFilter(input: HTMLInputElement) {
    input.value = '';
    this.searchQuery = '';
    this.searchSuggestions = [];
    this.filteredLinks = this.links;
  }

  resetSearch() {
    this.searchQuery = '';
    this.filteredLinks = this.links; // Reset the links to their initial state
    this.searchSuggestions = []; // Clear search suggestions
    this.myControl.setValue(''); // Reset the form control value
  }
}