import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/resource.service';
import { TasksService } from 'src/app/shared/tasks.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities: any;
  taskList: any;
  selectedResource: any;
  data: any;
  resourceList:any;
  statusList: any;
  status: any;
  constructor(private taskService: TasksService, private resource: ResourceService) { }

  ngOnInit(): void {
    this.selectedResource = '';
    this.statusList = [
      { name: 'In progress', ref: 'inprogress' },
      { name: 'Completed', ref: 'completed' },
      { name: 'Assigned', ref: 'assigned' }
    ];
    this.status = "";
    this.data = {
      labels: ['Completed', 'Overdue', 'inprogress'],
      datasets: [
        {
          data: [3, 5, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.resource.getResourceLists()
      .pipe(map((data) => {
        const list = data.map((item:any)=>{ return item.resourceName});
        return list;
        }
       ))
      .subscribe((resource) => {
       this.resourceList = resource;
      });

    this.taskService.getTaskLists()
      .subscribe((task) => {

        this.taskList = task;
      })
    console.log(this.taskList);


  }

}
