
import {Component} from '@angular/core';
@Component({
  selector: `app-employee`,
  templateUrl: `./employeeList.component.html`,
  styleUrls: ['employeeList.component.css']
})
export class EmployeeListComponent {
  // employeeList: any[]= [
  //  {code: 'emp101', name: 'Akbar', gender: 'Male', sal: '6999.43', dob: '12/21/1999'},
  //  {code: 'emp102', name: 'Raaz', gender: 'Female', sal: '4322', dob: '9/17/1955'},
  //  {code: 'emp103', name: 'xyz', gender: 'Male', sal: '2424.545', dob: '11/28/1947'},
  //  {code: 'emp104', name: 'abc', gender: 'Male', sal: '32432.54654', dob: '03/20/1999'},
  //  {code: 'emp105', name: 'pqr', gender: 'Female', sal: '55522.6546', dob: '12/21/1999'},
  //  ];
  employeeList: any[];
  constructor() {
    this.employeeList = [
    {code: 'emp101', name: 'Akbar', gender: 'Male', sal: '6999.43', dob: '12/21/1999'},
    {code: 'emp102', name: 'Raaz', gender: 'Female', sal: '4322', dob: '9/17/1955'},
    {code: 'emp103', name: 'xyz', gender: 'Male', sal: '2424.545', dob: '11/28/1947'},
    {code: 'emp104', name: 'abc', gender: 'Male', sal: '32432.54654', dob: '03/20/1999'},
 ];
}

  getFullEmploye(): void {
    this.employeeList = [
    {code: 'emp101', name: 'Akbar', gender: 'Male', sal: '6999.43', dob: '12/21/1999'},
    {code: 'emp102', name: 'Raaz', gender: 'Female', sal: '4322', dob: '9/17/1955'},
    {code: 'emp103', name: 'xyz', gender: 'Male', sal: '2424.545', dob: '11/28/1947'},
    {code: 'emp104', name: 'abc', gender: 'Male', sal: '32432.54654', dob: '03/20/1999'},
    {code: 'emp105', name: 'pqr', gender: 'Female', sal: '55522.6546', dob: '12/21/1999'},
    {code: 'emp106', name: 'anjik', gender: 'Male', sal: '6999.43', dob: '12/21/1999'},
    {code: 'emp107', name: 'mazeed', gender: 'Female', sal: '4322', dob: '9/17/1955'},
    {code: 'emp108', name: 'royal', gender: 'Male', sal: '2424.545', dob: '11/28/1947'},
    {code: 'emp109', name: 'amar', gender: 'Male', sal: '32432.54654', dob: '03/20/1999'},
    {code: 'emp110', name: 'payal', gender: 'Female', sal: '55522.6546', dob: '12/21/1999'},
    ];
  }
}

