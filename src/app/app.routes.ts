import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
    {
        path:"employees",
        component:EmployeeListComponent
    },
    {
        path:"employees/:id",
        component:EmployeeDetailsComponent
    },
    {
        path:"add-employees",
        component:AddEmployeeComponent
    },
    {
        path:"edit-employees",
        component:EditEmployeeComponent
    },
    {
        path:"",
        redirectTo:"/employees",
        pathMatch:'full'
    }
];
