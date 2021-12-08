import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-alert-table',
  template: `
  <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
  <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
`,
  styleUrls: ['./alert-table.component.css']
})
export class AlertTableComponent implements OnInit {

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      type: "FATAL",
      receivers: "orib naama"
    },
    {
      id: 2,
      name: "Ervin Howell",
      type: "FATAL",
      receivers: "edoe airport"
    }
  ];

  source: LocalDataSource;


  constructor() {
    this.source = new LocalDataSource(this.data);
    this.source.load(this.data);
   }

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Display Name'
      },
      type: {
        title: 'Type'
      },
      receivers: {
        title: 'Receivers'
      }
    }
  };

  ngOnInit(): void {
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'type',
        search: query
      },
      {
        field: 'receivers',
        search: query
      }
    ], true);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

}
