import { Component } from '@angular/core';
import {ToDoListComponent} from './lists/lists.component';
import {ListService} from 'listService.js';

@Component({
  selector: 'app-root',
  templateUrl: 'lists/lists.component.html',
  styleUrls: ['app.component.css'],
  directives: [ToDoListComponent],
  providers: [ListService]
})
export class AppComponent {}
