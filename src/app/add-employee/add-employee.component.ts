import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Employee } from '../../model/employee.model';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{

  employee:Employee={
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    nationalId: '',
    maritalStatus: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    department: null,
    position: '',
    skillSet: '',
    employmentStartDate: '',
    employmentEndDate: null,
    salary: '',
    employmentStatus: '',
    bankAccountNumber: '',
    manager: null,
    role: null
  }
  constructor(private employeeService:EmployeeServiceService){}
  ngOnInit(): void {
      this.employeeService.createEmployee(this.employee).subscribe(()=>{
        console.log("Employee added Sucessfully")
      });
  }

  addEmployee():void{

  }
}
