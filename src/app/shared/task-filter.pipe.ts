import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: any, resource:string) {    
    return (resource === '') ? value : value?.filter((item:any)=>{ return item.resourceName == resource || item.status == resource});
  }

}
