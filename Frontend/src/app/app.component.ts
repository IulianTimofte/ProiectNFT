import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  totalCollections: Listcollection[] | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/get-collections').subscribe(data => {
      this.totalCollections = data;
      console.log(data);
    })
  }
}

export class Listcollection{
   id: number=0;
   floorPrice: string = "";
   totalSupply: string = "";
   numOwner: string = " ";
   name: string = " ";
   totalVolume: string = " ";
   sevenDaySales: string = " ";
}

// interface SearchResults{
//   results: Listcollection[];
// }
