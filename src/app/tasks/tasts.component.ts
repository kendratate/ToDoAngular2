import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: "tasks/tasks.component.html",
  styleUrls: ['./app.component.css']
})
export class TaskComponent {
  title = 'Task component';
  document.getElementById('todoItem').focus();

  lists = ListService.getList();
  listTitle = $stateParams.title;


  createItem() {
    if (lists[listTitle].indexOf(item) === -1 && item) {
      lists[listTitle].push({name: item, check: false});
      ListService.saveList(lists);
    }
    item = '';
    document.getElementById('todoItem').focus();
  };

  deleteItem(item) {
    var currentList = lists[listTitle];
    currentList.splice(currentList.indexOf(item), 1);
    ListService.saveList(lists);
  };

  checkItem(e, item) {
    var currentList = lists[listTitle];
    currentList[currentList.indexOf(item)].check = true;

    e.currentTarget.style.opacity = "1.0";
    $mdToast.showSimple('Good work checking off that task!');
    ListService.saveList(lists);

  };

  clearChecked() {
    var currentList = lists[listTitle];

    // iterate through array backwards so splice doesn't change length of array and mess up loop
    for (var i = currentList.length - 1; i >= 0; i--) {
      if (currentList[i].check == true) {
        currentList.splice(i, 1);
      }
    }

    ListService.saveList(lists);
  };
}


