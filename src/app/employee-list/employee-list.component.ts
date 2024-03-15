import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeServiceService } from '../service/employee-service.service';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {

  employee:Employee[]=[];
  constructor(private employeeService:EmployeeServiceService){}
  //it will load at time component load
  ngOnInit(): void {
      this.getEmployees();
  }

  getEmployees():void{
    this.employeeService.getAllEmployees().subscribe(result=>{
      this.employee=result;
      console.log(result);
    })
  }
}
