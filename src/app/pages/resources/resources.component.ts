import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResourceService } from 'src/app/shared/resource.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [MessageService]
})
export class ResourcesComponent implements OnInit {
  resourceList: any;
  displayResourceDialog: boolean = false;
  statusList: any;
  resourceaddDetailsForm: any;
  constructor(private primengConfig: PrimeNGConfig, private resourceService: ResourceService, private fbuilder: FormBuilder, private tostr: MessageService) { }

  ngOnInit(): void {
    this.getResourceLists();
    this.primengConfig.ripple = true;
    this.statusList = [
      { id: 1, itemName: 'available' },
      { id: 2, itemName: 'unavailable' }
    ]

    this.resourceaddDetailsForm = this.fbuilder.group({
      resourceName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      resourceEmail: ['', [Validators.email]],
      resourceStatus: ['', [Validators.required]]
    })
  }

  getResourceLists() {
    this.resourceService.getResourceLists()
      .subscribe((list) => {
        console.log(list)
        this.resourceList = list;
      })
  }

  addResource() {
    this.resourceService.addResource(this.resourceaddDetailsForm.value)
      .subscribe((resource) => {
        this.tostr.add({ severity: 'success', summary: 'Success', detail: 'Resource added succesfully!!!' });
        this.displayResourceDialog = false;
        this.getResourceLists();
      })
  }

  showDialog() {
    this.displayResourceDialog = true;
  }

}
