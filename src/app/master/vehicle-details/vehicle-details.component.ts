import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  ngOnInit() {
    // throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['serialNo', 'vehicleNo', 'vehicleName', 'driverName', 'district', 'phoneNo'];

  // Define your data source
  dataSource = new MatTableDataSource([
    { vehicleNo: 'TN-01-1234', vehicleName: 'Honda City', driverName: 'John Doe', district: 'Chennai', phoneNo: '9876543210' },
    { vehicleNo: 'TN-02-5678', vehicleName: 'Toyota Corolla', driverName: 'Jane Doe', district: 'Madurai', phoneNo: '9876543211' },
    { vehicleNo: 'TN-03-9101', vehicleName: 'BMW X5', driverName: 'Mark Smith', district: 'Coimbatore', phoneNo: '9876543212' },
    { vehicleNo: 'TN-04-1121', vehicleName: 'Mercedes Benz', driverName: 'Sara Lee', district: 'Salem', phoneNo: '9876543213' },
    { vehicleNo: 'TN-05-3141', vehicleName: 'Audi A6', driverName: 'Paul Smith', district: 'Trichy', phoneNo: '9876543214' },
    { vehicleNo: 'TN-06-5161', vehicleName: 'Ford Mustang', driverName: 'Anna Brown', district: 'Tirunelveli', phoneNo: '9876543215' },
    { vehicleNo: 'TN-07-7181', vehicleName: 'Chevrolet Cruze', driverName: 'Lucy Green', district: 'Vellore', phoneNo: '9876543216' },
    { vehicleNo: 'TN-08-9202', vehicleName: 'Nissan Altima', driverName: 'Tom White', district: 'Kanchipuram', phoneNo: '9876543217' },
    { vehicleNo: 'TN-01-1234', vehicleName: 'Honda City', driverName: 'John Doe', district: 'Chennai', phoneNo: '9876543210' },
    { vehicleNo: 'TN-02-5678', vehicleName: 'Toyota Corolla', driverName: 'Jane Doe', district: 'Madurai', phoneNo: '9876543211' },
    { vehicleNo: 'TN-03-9101', vehicleName: 'BMW X5', driverName: 'Mark Smith', district: 'Coimbatore', phoneNo: '9876543212' },
    { vehicleNo: 'TN-04-1121', vehicleName: 'Mercedes Benz', driverName: 'Sara Lee', district: 'Salem', phoneNo: '9876543213' },
    { vehicleNo: 'TN-05-3141', vehicleName: 'Audi A6', driverName: 'Paul Smith', district: 'Trichy', phoneNo: '9876543214' },
    { vehicleNo: 'TN-06-5161', vehicleName: 'Ford Mustang', driverName: 'Anna Brown', district: 'Tirunelveli', phoneNo: '9876543215' },
    { vehicleNo: 'TN-07-7181', vehicleName: 'Chevrolet Cruze', driverName: 'Lucy Green', district: 'Vellore', phoneNo: '9876543216' },
    { vehicleNo: 'TN-08-9202', vehicleName: 'Nissan Altima', driverName: 'Tom White', district: 'Kanchipuram', phoneNo: '9876543217' },
  ]);

  // ViewChild for paginator
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // After view initialization, set paginator to dataSource
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}