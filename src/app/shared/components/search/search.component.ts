import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;
  @Output('searchRestaurants') searchRestaurants: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  search() {
    this.searchRestaurants.emit(this.searchText);
  }
}
