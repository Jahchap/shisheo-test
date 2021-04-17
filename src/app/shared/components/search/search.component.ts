import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  onMap: boolean = false
  // events
  searchText: string;
  @Output('searchRestaurants') searchRestaurants: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
    if (this.router.url === "/map") {
      this.onMap = true;
    }

    // this.events = router.events
    //   .subscribe(event => {
    //     if (event instanceof NavigationStart) {
    //       if (event.url === "/map") {
    //         this.onMap = true;
    //       }
    //     }
    //   });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    // this.events.unsubscribe();
    this.onMap = false
  }

  search() {
    this.searchRestaurants.emit(this.searchText)
  }

}
