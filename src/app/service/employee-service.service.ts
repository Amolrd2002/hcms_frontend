import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private apiUrl = "http://localhost:8080/employees";
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getAllEmployeesById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/${id}`);
  }

  createEmployee(data: Employee): Observable<any[]> {
    return this.http.post<Employee[]>(`${this.apiUrl}`, data);
  }

  updateEmployeeById(id: number, data: Employee): Observable<Employee[]> {
    return this.http.put<Employee[]>(`${this.apiUrl}/${id}`, data);
  }

  deleteEmployeeById(id: number): Observable<Employee[]> {
    return this.http.delete<Employee[]>(`${this.apiUrl}/${id}`);
  }
}
